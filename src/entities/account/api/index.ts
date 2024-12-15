import { Account, Accounts } from "../_domain";
import $httpClient from "@/shared/api/httpClient.ts";

export default class AccountService {
  static BASE_KEY_ACCOUNTS = "accounts";
  static BASE_KEY_ME = "me";
  static async getSubscribers(): Promise<Accounts> {
    const response = await $httpClient.get<Accounts>("account/subscribers/");
    return response.data;
  }

  static async getMeProfile(): Promise<Account> {
    const response = await $httpClient.get<Account>("account/me");
    return response.data;
  }
}
