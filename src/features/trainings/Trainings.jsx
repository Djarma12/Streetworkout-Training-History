import { useUser } from "../authentication/useUser";
import { useTrainingList } from "../../hooks/useTrainingList";
import { useDeleteTraining } from "./useDeleteTraining";
import { combineTrainingAndDates } from "../../utils/helpers";
import TrainingItem from "./TrainingItem";

function Trainings() {
  const { user } = useUser();
  const { isLoading, trainings } = useTrainingList({
    exerciserId: user.id,
  });
  const { deleteTraining, isDeleting } = useDeleteTraining();

  console.log(trainings);
  if (isLoading) return null;

  const sortedTrainingData = trainings.sort(
    (a, b) => new Date(b.trainingDate) - new Date(a.trainingDate)
  );

  const trainingsAndDates = combineTrainingAndDates(trainings);

  return (
    <>
      {trainingsAndDates.map((training) => (
        <TrainingItem training={training} key={training.id} />
      ))}
    </>
  );
}

export default Trainings;
