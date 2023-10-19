import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      queryClient.setQueryData(["user"]);
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { updateUser, isLoading };
}
