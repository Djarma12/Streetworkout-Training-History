import styled, { css } from "styled-components";

const variations = {
  primary: css`
    letter-spacing: 0.7px;
    line-height: 1.6;
    color: var(--color-grey-500);
    font-weight: 500;

    &:not(:last-child) {
      margin-bottom: 1.2rem;
    }
  `,
  secondary: css`
    font-size: 2rem;
    width: 45rem;
    color: var(--color-red-100);
    &:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  `,
  tertiary: css`
    text-transform: uppercase;
    font-weight: 500;
    color: var(--color-grey-200);
    margin-bottom: 1.6rem;
    font-size: 1.4rem;
    letter-spacing: 0.4px;

    display: flex;
    align-items: center;
    gap: 0.4rem;

    a:link,
    a:visited {
      color: var(--color-grey-200);
      font-weight: 500;
      transition: all 0.2s;
    }
    a:hover,
    a:active {
      color: var(--color-primary);
    }
  `,
};

const Paragraph = styled.p`
  ${(props) => variations[props.variation]}
`;

Paragraph.defaultProps = {
  variation: "primary",
};

export default Paragraph;
