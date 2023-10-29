import { Link, useNavigate, useParams } from "react-router-dom";
import { useTrainingList } from "../../hooks/useTrainingList";
import { useExercisersList } from "./useExercisersList";
import { currentExerciser } from "../../utils/helpers";
import TrainingScheduler from "../../ui/Scheduler";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import styled from "styled-components";

const StyledExerciserTrainingList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

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
    <StyledExerciserTrainingList>
      <TrainingScheduler
        trainings={trainings}
        startDayHour={startDayHour}
        endDayHour={endDayHour}
      />
      <Button position="right" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </StyledExerciserTrainingList>
  );
}

export default ExerciserTrainingList;
