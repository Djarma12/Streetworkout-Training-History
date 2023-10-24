import { Link, useNavigate, useParams } from "react-router-dom";
import { useTrainingList } from "../../hooks/useTrainingList";
import { useExercisersList } from "./useExercisersList";
import { currentExerciser } from "../../utils/helpers";
import TrainingScheduler from "../../ui/Scheduler";
import Spinner from "../../ui/Spinner";

function ExerciserTrainingList() {
  const navigate = useNavigate();
  const { exerciserId } = useParams();
  const { trainings, isLoading, startDayHour, endDayHour } = useTrainingList({
    exerciserId,
  });
  const { exercisers, isLoading: isLoadingExercisers } = useExercisersList();

  console.log(trainings);
  if (isLoading || isLoadingExercisers) return <Spinner />;

  return (
    <div>
      {/* Put name to AppLayout for rendering name of exerciser when we look his trainings and detail in training, so if  exerciserId exists in url, it will be rendered(stalno ce se prikazivati ime kada prelazimo iz exerciserTrainingList u exerciserTrainingDetail */}
      {/* <h4>{currentExerciser({ exercisers, exerciserId }).nickName}</h4>
      <p>Exerciser Training List</p>
      {trainings.map((training) => (
        <p key={training.id}>
          <Link to={`/exercisers/${exerciserId}/${training.id}`}>
            See training
          </Link>
        </p>
      ))}

      <br />
      <br /> */}
      <TrainingScheduler
        trainings={trainings}
        startDayHour={startDayHour}
        endDayHour={endDayHour}
      />
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default ExerciserTrainingList;
