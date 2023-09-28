import { Link } from "react-router-dom";
import { useUser } from "../authentication/useUser";
import { useTrainingList } from "../../hooks/useTrainingList";
import { useDeleteTraining } from "./useDeleteTraining";

function TrainingList() {
  const { user } = useUser();
  const { isLoading, trainings } = useTrainingList({
    exerciserId: user.id,
  });
  const { deleteTraining, isDeleting } = useDeleteTraining();

  console.log(trainings);
  if (isLoading) return null;
  return (
    <>
      <h3>Trainings data</h3>
      {trainings.map((training) => (
        <p key={training.id}>
          <Link to={`/trainings/${training.id}`}>
            See training {training.trainingName}
          </Link>
          <button
            onClick={() => deleteTraining(training.id)}
            disabled={isDeleting}
          >
            Delete training
          </button>
        </p>
      ))}
    </>
  );
}

export default TrainingList;
