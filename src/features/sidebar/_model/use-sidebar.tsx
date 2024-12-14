import { useQuery } from "@tanstack/react-query";
import $httpClient from "@/shared/api/httpClient.ts";

export function useSidebar() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["subscribers"],
    queryFn: () => $httpClient.get("account/subscribers/"),
  });

  return {
    data,
    isLoading,
    isError,
  };
}
