import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authApi } from "@/features/auth/api";
import { FormFields } from "@/features/auth/_domian";

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
