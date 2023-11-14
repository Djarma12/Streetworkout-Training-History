import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledExerciser = styled.li`
  position: relative;
  border-radius: 0.4rem;
  overflow: hidden;
  max-width: 20rem;
`;

const Image = styled.div`
  cursor: pointer;
  width: 100%;
  background-image: linear-gradient(
      var(--gradient-brand-500),
      var(--gradient-brand-500)
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-position: top;
  aspect-ratio: 9 / 16;
  transition: all 0.2s;
  filter: blur(0);

  &:hover {
    filter: blur(2px);
    background-image: linear-gradient(
        var(--gradient-brand-hover-500),
        var(--gradient-brand-hover-500)
      ),
      url(${(props) => props.image});
  }
`;

const ShowName = styled.span`
  pointer-events: none;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--color-grey-900);
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 10;
  transform: translate(-50%, -50%);
`;

function ExerciserItem({ exerciser }) {
  const { userid, nickName, avatar } = exerciser;
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  
  return (
    <StyledExerciser
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      onClick={() => navigate(`${userid}`)}
    >
      {isShown && <ShowName>{nickName}</ShowName>}
      <Image image={avatar || "/anonimous.png"} />
    </StyledExerciser>
  );
}

export default ExerciserItem;
