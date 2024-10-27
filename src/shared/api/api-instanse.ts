import ky, { Options } from "ky";
import Cookies from "js-cookie";
import { TokenDto } from "@/features/auth/_domian";

const BASE_URL = "https://icherniakov.ru/yt-course/";

export const jsonApiInstance = () => {
  // Функция для обновления токена
  const refreshAccessToken = async (): Promise<void | TokenDto> => {
    const refreshToken = Cookies.get("refresh_token");

    if (!refreshToken) throw new Error("Refresh token not found");

    const response = await ky.post(`${BASE_URL}auth/refresh`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to refresh access token");
    }

    const tokenData = await response.json<TokenDto>();
    Cookies.set("access_token", tokenData.access_token, { secure: true });
    return tokenData;
  };

  // Ненаутентифицированный запрос
  const apiNotAuth = async <T extends object>(
    path: string,
    options?: RequestInit & { signal?: AbortSignal },
  ): Promise<T | undefined> => {
    try {
      const response = await ky(`${BASE_URL}${path}`, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return await response.json<T>();
    } catch (e) {
      console.log("Error:", e);
    }
  };

  // Создаем экземпляр authKy с автоматическим обновлением токена
  const authKy = ky.create({
    prefixUrl: BASE_URL,
    hooks: {
      beforeRequest: [
        (request) => {
          const accessToken = Cookies.get("access_token");
          if (accessToken) {
            request.headers.set("Authorization", `Bearer ${accessToken}`);
          }
        },
      ],
      afterResponse: [
        async (request, options, response) => {
          if (response.status === 401) {
            try {
              const newTokens = await refreshAccessToken();
              if (newTokens?.access_token) {
                request.headers.set(
                  "Authorization",
                  `Bearer ${newTokens.access_token}`,
                );
                // Повторяем запрос с обновленным access токеном
                return await ky(request as Options);
              }
            } catch (error) {
              console.error("Failed to refresh token", error);
            }
          }
        },
      ],
    },
  });

  return {
    apiNotAuth,
    authKy,
  };
};
