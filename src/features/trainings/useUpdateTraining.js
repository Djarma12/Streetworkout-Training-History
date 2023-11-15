import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTraining as updateTrainingApi } from "../../services/apiTrainings";
import toast from "react-hot-toast";

export function useUpdateTraining(userId) {
  const queryClient = useQueryClient();

  const { mutate: updateTraining, isLoading: isUpdating } = useMutation({
    mutationFn: updateTrainingApi,
    onSuccess: () => {
      toast.success("Successfully updated training!");
      queryClient.invalidateQueries({
        queryKey: ["exerciserTrainings", userId],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { updateTraining, isUpdating };
}
