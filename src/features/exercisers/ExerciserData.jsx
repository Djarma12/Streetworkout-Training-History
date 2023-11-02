import { useParams } from "react-router";
import { useExerciserData } from "../authentication/useExerciserData";
import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import { differenceInYears } from "date-fns";
import { age, formatDMY } from "../../utils/helpers";

const StyledExerciserData = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 3.2rem;
`;

const ExerciserContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: space-around; */
`;

const ListItem = styled.p`
  color: var(--color-grey-600);
  font-weight: 500;
  background-color: var(--color-brand-100);
  border-radius: 0.4rem;
  padding: 0.8rem 2.4rem;

  span {
    font-weight: 700;
    color: var(--color-grey-700);
  }
`;

const Image = styled.img`
  height: 15rem;
  /* background-size: cover; */
  /* background-position: top; */
  /* aspect-ratio: 9 / 16; */
  border-radius: 0.4rem;
`;

function ExerciserData() {
  const { exerciserId } = useParams();
  const { isLoading, exerciserData: { nickName, birthDate, avatar } = {} } =
    useExerciserData(exerciserId);

  if (isLoading) return <Spinner />;

  return (
    <StyledExerciserData>
      <ExerciserContent>
        <ListItem>
          Nick name: <span>{nickName}</span>
        </ListItem>
        <ListItem>
          Age: <span>{age(birthDate)}</span>{" "}
          <span>({formatDMY(birthDate)})</span>
        </ListItem>
      </ExerciserContent>
      <Image src={avatar || "/anonimous.png"} alt="Avatar" />
    </StyledExerciserData>
  );
}

export default ExerciserData;
