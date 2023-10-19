import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledExerciser = styled.li`
  /* height: 25rem; */
  /* padding: 2.4rem 3.2rem; */
  position: relative;
  border-radius: 0.4rem;
  overflow: hidden;
`;

const Image = styled.div`
  cursor: pointer;
  width: 100%;
  background-image: linear-gradient(
      var(--gradient-brand-500),
      var(--gradient-brand-500)
    ),
    url(${(props) => props.imageUrl});
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
      url(${(props) => props.imageUrl});
  }
`;

const ShowName = styled.span`
  pointer-events: none;
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
      <Image imageUrl={avatar} />
    </StyledExerciser>
  );
}

export default ExerciserItem;
