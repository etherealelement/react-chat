import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authApi } from "../api/index.ts";
import { FormFields } from "../_domian/index.ts";

export function useAuth() {
  const queryClient = useQueryClient();

  const getAuthTokenMutation = useMutation({
    mutationFn: authApi.getAuthToken,
    onError: (error) => error,
    onSettled: async () => {
      return await queryClient.invalidateQueries({
        queryKey: [authApi.baseKey],
      });
    },
  });

  const handleGetAuthToken = (payload: Required<FormFields>) => {
    getAuthTokenMutation.mutate(payload);
  };

  const isLoadData = getAuthTokenMutation.isPending;
  const token = getAuthTokenMutation.data;
  const error = getAuthTokenMutation.error;
  const success = getAuthTokenMutation.isSuccess;

  return {
    success,
    isLoadData,
    handleGetAuthToken,
    error,
  };
}
