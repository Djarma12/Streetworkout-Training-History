import { useQuery } from "@tanstack/react-query";
import { getExerciserData } from "../../services/apiExercisers";

export function useExerciserData(userId) {
  const { isLoading, data: exerciserData } = useQuery({
    queryKey: ["exerciserData", userId],
    queryFn: () => getExerciserData(userId),
  });

  return {
    isLoading,
    exerciserData,
  };
}
