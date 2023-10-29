import { Link } from "react-router-dom";
import { useExercisersList } from "./useExercisersList";
import ExerciserItem from "./ExerciserItem";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";

const List = styled.ul`
  display: grid;
  gap: 3.2rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
`;

function ExercisersList() {
  const { exercisers, isLoading } = useExercisersList();

  if (isLoading) return <Spinner />;

  return (
    <List>
      {exercisers.map((exerciser) => (
        <ExerciserItem exerciser={exerciser} key={exerciser.id} />
      ))}
      {/* {exercisers.map((exerciser) => (
          <ExerciserItem exerciser={exerciser} key={exerciser.id} />
        ))}
        {exercisers.map((exerciser) => (
          <ExerciserItem exerciser={exerciser} key={exerciser.id} />
        ))}
        {exercisers.map((exerciser) => (
          <ExerciserItem exerciser={exerciser} key={exerciser.id} />
        ))} */}
    </List>
  );
}

export default ExercisersList;
