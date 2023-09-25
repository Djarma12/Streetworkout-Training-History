import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTraining as createTrainingApi } from "../../services/apiTrainings";
import { useUser } from "../authentication/useUser";

export function useCreateTraining() {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { mutate: createTraining, isLoading: isCreating } = useMutation({
    mutationFn: createTrainingApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["exerciser", user.id] });
    },
    onError: (err) => console.error(err.message),
  });

  return { createTraining, isCreating };
}
