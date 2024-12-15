import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TokenDto } from "../_domian/index.ts";
import AuthService from "../api/index.ts";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const getAuthMutation = useMutation({
    mutationFn: (payload: { username: string; password: string }) =>
      AuthService.login(payload),
    onError: (error) => {
      console.error("Ошибка получения токена:", error);
    },
    onSuccess: (response) => {
      const token: TokenDto = response;
      if (token?.access_token) {
        // Сохранение токена в localStorage
        localStorage.setItem("access_token", token.access_token);
        localStorage.setItem("refresh_token", token.refresh_token);
        // Навигация на главную страницу
        navigate("/");
      }
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: [AuthService.BASE_KEY],
      });
    },
  });

  const login = (payload: { username: string; password: string }) => {
    getAuthMutation.mutate(payload);
  };

  // Состояния мутации
  const isLoadData = getAuthMutation.isPending;
  const error = getAuthMutation.error;
  const success = getAuthMutation.isSuccess;

  return {
    login,
    isLoadData,
    success,
    error,
  };
}
