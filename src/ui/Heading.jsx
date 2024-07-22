import styled, { css } from "styled-components";
import mediaQueryManager from "../styles/MediaQueryManager";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: var(--color-grey-600);
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.4rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--color-grey-500);

      ${mediaQueryManager.phone(
        css`
          font-size: 1.8rem;
        `
      )}
    `}
  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--color-red-700);
    `}
  ${(props) =>
    props.as === "h4" &&
    css`
      font-style: italic;
      line-height: 1.1;
      font-size: 6.4rem;
      color: var(--color-red-50);
      width: 60rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 2px;
    `}
`;

export default Heading;
