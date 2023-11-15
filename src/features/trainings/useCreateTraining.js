import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTraining as createTrainingApi } from "../../services/apiTrainings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useCreateTraining(userId) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: createTraining, isLoading: isCreating } = useMutation({
    mutationFn: createTrainingApi,
    onSuccess: () => {
      toast.success("Successfully added new training.");
      queryClient.invalidateQueries({
        queryKey: ["exerciserTrainings", userId],
      });
      navigate("/trainings");
    },
    onError: (err) => toast.error(err.message),
  });

  return { createTraining, isCreating };
}
