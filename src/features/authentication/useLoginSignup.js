import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi, signup as signupApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLoginSignup(isSignUp) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = isSignUp ? signupApi : loginApi;

  const { mutate: loginSignup, isLoading } = useMutation({
    mutationFn: mutation,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      navigate("/trainings", { replace: true });
      {
        toast.success(
          isSignUp
            ? "Account successfully created! Please confirm your email address."
            : "Successfully loged in!"
        );
      }
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error(err.message);
    },
  });

  return { loginSignup, isLoading };
}
