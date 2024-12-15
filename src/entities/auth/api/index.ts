import { TokenDto } from "@/entities/auth/_domian";
import $httpClient from "@/shared/api/httpClient.ts";

export default class AuthService {
  static BASE_KEY = "auth";

  static async login(payload: {
    username: string;
    password: string;
  }): Promise<TokenDto> {
    const formData = new FormData();
    formData.append("username", payload.username);
    formData.append("password", payload.password);

    console.log(Array.from(formData.entries()));

    const response = await $httpClient.post<TokenDto>("auth/token", formData);
    return response.data;
  }

  static async logout(): Promise<void> {
    return $httpClient.post("auth/logout");
  }
}
