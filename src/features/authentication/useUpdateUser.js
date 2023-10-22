import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      queryClient.setQueryData(["userData"]);
    },
    onError: (err) => {
      console.log("ERROR", err);
    },
  });

  return { updateUser, isUpdating };
}
