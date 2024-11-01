import Cookies from "js-cookie";
import { FormFields, TokenDto } from "../_domian";
import ky, { Options } from "ky";

const BASE_URL = "https://icherniakov.ru/yt-course/";

export const authApi = {
  baseKey: "auth",
  getAuthToken: async (payload: Required<FormFields>): Promise<TokenDto> => {
    const formData = new FormData();
    formData.append("username", payload.username);
    formData.append("password", payload.password);

    try {
      const response = await ky.post(`${BASE_URL}auth/token`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const token = await response.json<TokenDto>();

      Cookies.set("access_token", token.access_token, { secure: true });
      Cookies.set("refresh_token", token.refresh_token, { secure: true });

      return token;
    } catch (error) {
      // @ts-ignore
      const errorData = await error.response.json();
      throw new Error(errorData.detail || "An error occurred");
    }
  },
  refreshToken: async (): Promise<void | TokenDto> => {
    const refreshToken = Cookies.get("refresh_token");

    if (!refreshToken) throw new Error("Refresh token not found");

    try {
      const response = await ky.post(`${BASE_URL}auth/refresh`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const token = await response.json<TokenDto>();
      Cookies.set("access_token", token.access_token, { secure: true });
      return token;
    } catch (error) {
      console.log(error);
    }
  },
  authKy: ky.create({
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
              const newTokens = await authApi.refreshToken();
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
  }),
};
