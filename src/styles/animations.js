import { keyframes } from "styled-components";

export const moveRight = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
`;

export const moveBottom = keyframes`
  0% {
    transform: translate(-50%, -150%);
  }

  100% {
    transform: translate(-50%, 0);
  }
`;
