import styled, { css } from "styled-components";
import mediaQueryManager from "../styles/MediaQueryManager";

const positions = {
  // center: css`
  //   align-self: center;
  // `,
  right: css`
    align-self: flex-end;
  `,
};

const variations = {
  primary: css`
    background-image: linear-gradient(
      to right,
      var(--color-primary-light),
      var(--color-primary-dark)
    );
    color: var(--color-grey-0);
    border-radius: var(--border-radius-tiny);
    box-shadow: var(--shadow-sm);
    text-transform: uppercase;

    font-size: 1.4rem;
    padding: 1.6rem 4.8rem;
    font-weight: 400;

    &:hover {
      transform: scale(1.02);
    }

    ${mediaQueryManager.phone(
      css`
        font-size: 1.2rem;
        padding: 1.2rem 3.2rem;
      `
    )}
  `,
  secondary: css`
    font-size: 1.4rem;
    padding: 1.6rem 4.8rem;
    color: var(--color-grey-600);
    background-color: var(--color-grey-50);
    font-weight: 500;
    border-radius: var(--border-radius-tiny);
    box-shadow: var(--shadow-sm);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    &:hover {
      transform: scale(1.02);
    }
    ${mediaQueryManager.phone(
      css`
        font-size: 1.2rem;
        padding: 1.2rem 3.2rem;
      `
    )}
  `,
  tertiary: css`
    color: var(--color-grey-600);
    background: transparent;
    letter-spacing: 1px;
    padding: 0;
    font-weight: 500;

    &:hover {
      color: var(--color-blue-900);
    }
  `,
};

const Button = styled.button`
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  text-align: center;

  ${(props) => positions[props.position]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  // position: "center",
};

export default Button;
