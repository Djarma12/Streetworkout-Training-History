import styled from "styled-components";
import { BiSolidHeart } from "react-icons/bi";
import { useDebouncedLikes } from "../features/likes/useDebouncedLikes";

const StyledLikeButton = styled.div`
  position: fixed;
  bottom: 2.4rem;
  right: 2.4rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    color: var(--color-red-${(prop) => prop.color});
  }
  &:active {
    transform: scale(1.3);
  }

  svg {
    font-size: 6.2rem;
    color: var(--color-red-${(prop) => prop.color});
  }

  span {
    font-size: 1.2rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -70%);
    color: var(--color-grey-0);
    font-weight: 700;
  }
`;

function LikeButton({ likes }) {
  const { handleCount, count, pendingLikes } = useDebouncedLikes({
    likes,
  });

  const color = (count <= 8 ? count : 8) + "00";

  return (
    <StyledLikeButton onClick={handleCount} color={color}>
      <BiSolidHeart />
      <span>{pendingLikes}</span>
    </StyledLikeButton>
  );
}

export default LikeButton;
