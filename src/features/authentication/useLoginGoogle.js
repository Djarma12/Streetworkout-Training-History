import { useMutation } from "@tanstack/react-query";
import { loginGoogle as apiLoginGoogle } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLoginGoogle() {
  const { mutate: loginGoogle, isLoading: isLogging } = useMutation({
    mutationFn: apiLoginGoogle,
    onSettled: () => toast.loading("Choose the email you use to log in."),
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorect.");
    },
  });

  return { loginGoogle, isLogging };
}
