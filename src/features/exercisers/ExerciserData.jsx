import { useParams } from "react-router";
import { useExerciserData } from "../authentication/useExerciserData";
import Spinner from "../../ui/Spinner";

function ExerciserData() {
  const { exerciserId } = useParams();
  const { isLoading, exerciserData } = useExerciserData(exerciserId);
  if (isLoading) return <Spinner />;

  return <div>{exerciserData.nickName}</div>;
}

export default ExerciserData;
