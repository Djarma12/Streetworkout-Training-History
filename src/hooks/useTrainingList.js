import { useQuery } from "@tanstack/react-query";
import { getTraining } from "../services/apiExercisers";

export function useTrainingList({ exerciserId }) {
  const {
    isLoading,
    data: trainings,
    error,
  } = useQuery({
    queryKey: ["exerciserTrainings", exerciserId],
    queryFn: () => getTraining({ exerciserId }),
  });

  return { isLoading, trainings, error };
}
