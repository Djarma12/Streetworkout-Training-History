import styled from "styled-components";

const StyledExerciser = styled.li`
  max-height: 10rem;
  padding: 2.4rem 3.2rem;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
`;

function ExerciserItem({ exerciser }) {
  return (
    <StyledExerciser>
      Name: {exerciser.nickName}
      <Image src={exerciser.avatar} />
    </StyledExerciser>
  );
}

export default ExerciserItem;
