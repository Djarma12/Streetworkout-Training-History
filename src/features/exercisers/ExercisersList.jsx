import { Link } from "react-router-dom";
import { useExercisersList } from "./useExercisersList";
import ExerciserItem from "./ExerciserItem";
import styled from "styled-components";

const ExerciserList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

function ExercisersList() {
  const { exercisers, isLoading } = useExercisersList();

  if (isLoading) return;

  return (
    <div>
      <p>Exercisers List</p>

      <ExerciserList>
        {exercisers.map((exerciser) => (
          <ExerciserItem exerciser={exerciser} key={exerciser.id} />
        ))}
      </ExerciserList>
    </div>
  );
}

export default ExercisersList;
