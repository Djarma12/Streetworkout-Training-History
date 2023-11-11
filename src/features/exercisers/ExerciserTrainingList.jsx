import { Link, useNavigate, useParams } from "react-router-dom";
import { useTrainingList } from "../../hooks/useTrainingList";
import { currentExerciser } from "../../utils/helpers";
import TrainingScheduler from "../../ui/Scheduler";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";
import styled from "styled-components";
import ExerciserData from "./ExerciserData";

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

  console.log(trainings);
  if (isLoading) return <Spinner />;

  return (
    <StyledExerciserTrainingList>
      <ExerciserData />
      <TrainingScheduler
        trainings={trainings}
        startDayHour={startDayHour}
        endDayHour={endDayHour}
      />
      {/* <Button position="right" variation="primary" onClick={() => navigate(-1)}> */}
      <Button onClick={() => navigate(-1)}>Go back</Button>
    </StyledExerciserTrainingList>
  );
}

export default ExerciserTrainingList;
