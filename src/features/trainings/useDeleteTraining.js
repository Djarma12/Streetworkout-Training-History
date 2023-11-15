import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTraining as deleteTrainingApi } from "../../services/apiTrainings";
import { useNavigate } from "react-router-dom";
import { useUser } from "../authentication/useUser";
import toast from "react-hot-toast";

export function useDeleteTraining() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user } = useUser();

  const { mutate: deleteTraining, isLoading: isDeleting } = useMutation({
    mutationFn: deleteTrainingApi,
    onSuccess: () => {
      toast.success("Successfully deleted training.");
      queryClient.invalidateQueries({
        queryKey: ["exerciserTrainings", user.id],
      });
      navigate("/trainings");
    },
    onError: (err) => toast.error(err.message),
  });

  return { deleteTraining, isDeleting };
}
