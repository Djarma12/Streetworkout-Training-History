import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.4rem;
    padding: 1.2rem 4.8rem;
    text-transform: uppercase;
    font-weight: 400;
    text-align: center;
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
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      /* background-image: linear-gradient(
        to left,
        var(--color-primary-light),
        var(--color-primary-dark)
      ); */
      transform: scale(1.02);
    }

    &:focus {
      outline: none;
      animation: pulsate 1s infinite;
      transform: scale(1.01);
    }
  `,
  /*secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,*/
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "small",
};

export default Button;