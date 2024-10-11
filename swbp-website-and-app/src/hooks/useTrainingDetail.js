import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { getTrainingDetail } from "../services/apiExercisers";

export function useTrainingDetail() {
  const { exerciserTrainingId, trainingId } = useParams();
  console.log(exerciserTrainingId);

  const {
    isLoading,
    data: trainingDetail,
    error,
  } = useQuery({
    queryKey: ["trainingDetail", exerciserTrainingId || trainingId],
    queryFn: () =>
      getTrainingDetail({ trainingId: exerciserTrainingId || trainingId }),
  });

  return { isLoading, trainingDetail, error };
}
