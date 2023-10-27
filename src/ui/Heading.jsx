import styled, { css } from "styled-components";

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
    `}
`;

export default Heading;
