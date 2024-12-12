import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authApi } from "../api/index.ts";
import { FormFields } from "../_domian/index.ts";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
export function useAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

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

  const isTokenValid = (): boolean => {
    const token = Cookies.get("access_token");
    if (token) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (isTokenValid()) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  }, [token, navigate]);

  return {
    success,
    isLoadData,
    handleGetAuthToken,
    error,
  };
}
