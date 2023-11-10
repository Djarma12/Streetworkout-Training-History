import styled, { css } from "styled-components";

const variations = {
  primary: css`
    &:hover {
      background-color: var(--color-brand-100);
    }

    & svg {
      color: var(--color-primary-light);
    }
  `,
  secondary: css`
    &:hover {
      transform: scale(1.1);
    }
    & svg {
      color: var(--color-grey-100);
    }
  `,
  tertiary: css`
    &:hover {
      background-color: var(--color-grey-300);
      transform: scale(1.1);
    }

    & svg {
      color: var(--color-brand-800);
    }
  `,
};

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  transition: all 0.2s;
  border-radius: var(--border-radius-sm);

  ${(props) => variations[props.variation]}

  & svg {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export default ButtonIcon;
