import { useQuery } from "@tanstack/react-query";
import { getExercisers } from "../../services/apiExercisers";
import { useUser } from "../authentication/useUser";

export function useExercisersList() {
  const { user } = useUser();
  const {
    isLoading,
    data: exercisers,
    error,
  } = useQuery({
    queryKey: ["exercisers"],
    queryFn: () => getExercisers(user.id),
  });

  return { isLoading, exercisers, error };
}
