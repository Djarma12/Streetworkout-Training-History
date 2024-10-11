import { useQuery } from "@tanstack/react-query";
import { getExerciserData } from "../../services/apiExercisers";
import { useState } from "react";

export function useExerciserData(userId) {
  const [isFetching, setIsFetching] = useState(true);

  const {
    isLoading,
    data: exerciserData,
    refetch,
  } = useQuery({
    queryKey: ["exerciserData", userId],
    queryFn: () => getExerciserData(userId),
    onError: () => setIsFetching(false),
    enabled: isFetching,
  });

  return {
    isLoading,
    exerciserData,
    refetch,
  };
}
