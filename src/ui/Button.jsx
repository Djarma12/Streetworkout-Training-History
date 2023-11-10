import styled, { css } from "styled-components";
import mediaQueryManager from "../styles/MediaQueryManager";

const position = {
  // center: css`
  //   align-self: center;
  // `,
  right: css`
    align-self: flex-end;
  `,
  // medium: css`
  //   font-size: 1.4rem;
  //   padding: 1.2rem 1.6rem;
  //   font-weight: 500;
  // `,
  // large: css`
  //   font-size: 1.6rem;
  //   padding: 1.2rem 2.4rem;
  //   font-weight: 500;
  // `,
};

const variations = {
  primary: css`
    border-radius: 100px;
    border: none;
    background-image: linear-gradient(
      to right,
      var(--color-primary-light),
      var(--color-primary-dark)
    );
    color: var(--color-grey-0);
    border-radius: var(--border-radius-sm);
    box-shadow: var(--shadow-sm);
    text-transform: uppercase;

    font-size: 1.4rem;
    padding: 1.6rem 4.8rem;
    font-weight: 400;

    &:hover {
      transform: scale(1.02);
    }

    &:focus {
      outline: none;
      animation: pulsate 1s infinite;
      transform: scale(1.01);
    }

    ${mediaQueryManager.phone(
      css`
        font-size: 1rem;
        padding: 1.2rem 3.2rem;
      `
    )}
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: transparent;
    letter-spacing: 1px;
    padding: 0;
    font-weight: 500;

    &:hover {
      color: var(--color-blue-900);
    }
  `,
  /*danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,*/
};

const Button = styled.button`
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  text-align: center;

  ${(props) => position[props.position]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  // position: "center",
};

export default Button;
