import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTraining as createTrainingApi } from "../../services/apiTrainings";
import { useNavigate } from "react-router-dom";

export function useCreateTraining(userId) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createTraining, isLoading: isCreating } = useMutation({
    mutationFn: createTrainingApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["exerciserTrainings", userId],
      });
      navigate("/trainings");
    },
    onError: (err) => console.error(err.message),
  });

  return { createTraining, isCreating };
}
