import { useQuery } from "@tanstack/react-query";
import { getExercisers } from "../../services/apiExercisers";

export function useExercisersList() {
  const {
    isLoading,
    data: exercisers,
    error,
  } = useQuery({
    queryKey: ["exercisers"],
    queryFn: getExercisers,
  });

  return { isLoading, exercisers, error };
}
