import styled, { css } from "styled-components";

import ExerciserItem from "./ExerciserItem";
import Spinner from "../../ui/Spinner";
import mediaQueryManager from "../../styles/MediaQueryManager";

import { useExercisersList } from "./useExercisersList";

const List = styled.ul`
  display: grid;
  gap: 3.2rem;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));

  ${mediaQueryManager.phone(
    css`
      gap: 2.4rem;
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    `
  )}
`;

function ExercisersList() {
  const { exercisers, isLoading } = useExercisersList();

  if (isLoading) return <Spinner />;

  return (
    <List>
      {exercisers?.map((exerciser) => (
        <ExerciserItem exerciser={exerciser} key={exerciser.id} />
      ))}
    </List>
  );
}

export default ExercisersList;
