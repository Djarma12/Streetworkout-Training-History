import styled, { css } from "styled-components";
import mediaQueryManager from "../styles/MediaQueryManager";

const StyledVideo = styled.iframe`
  height: auto;
  width: 100%;
  height: 60rem;
  color: var(--color-red-50);
  background-size: cover;
  background-position: center 17%;
  background-repeat: no-repeat;
  display: flex;

  ${mediaQueryManager.tabPort(css`
    height: 45rem;
  `)}
`;

export default StyledVideo;
