import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTraining as updateTrainingApi } from "../../services/apiTrainings";

export function useUpdateTraining(userId) {
  const queryClient = useQueryClient();
  // const navigate = useNavigate();

  const { mutate: updateTraining, isLoading: isUpdating } = useMutation({
    mutationFn: updateTrainingApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["exerciserTrainings", userId],
      });
    },
    onError: (err) => console.error(err.message),
  });

  return { updateTraining, isUpdating };
}
