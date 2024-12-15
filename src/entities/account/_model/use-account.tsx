import { useQuery } from "@tanstack/react-query";
import AccountService from "../api/index.ts";

export function useAccount() {
  const { data, isLoading, isError } = useQuery({
    queryKey: [AccountService.BASE_KEY_ACCOUNTS],
    queryFn: () => AccountService.getSubscribers(),
  });

  const { data: meProfile } = useQuery({
    queryKey: [AccountService.BASE_KEY_ME],
    queryFn: () => AccountService.getMeProfile(),
  });

  const { items } = data || {};

  return {
    items,
    data,
    isLoading,
    isError,
    meProfile,
  };
}
