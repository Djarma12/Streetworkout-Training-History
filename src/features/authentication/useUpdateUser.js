import { useMutation } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";

export function useUpdateUser() {
  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserApi,
    onError: (err) => {
      console.log("ERROR", err);
    },
    enabled: true,
  });

  return { updateUser, isUpdating };
}
