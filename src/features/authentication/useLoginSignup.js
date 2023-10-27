import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi, signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLoginSignup(isSignUp) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = isSignUp ? signupApi : loginApi;

  const { mutate: loginSignup, isLoading } = useMutation({
    mutationFn: mutation,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/trainings", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { loginSignup, isLoading };
}
