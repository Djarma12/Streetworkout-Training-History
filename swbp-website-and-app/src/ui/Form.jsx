import styled, { css } from "styled-components";
import mediaQueryManager from "../styles/MediaQueryManager";

const Form = styled.form`
  font-size: 1.6rem;
  background-color: var(--color-grey-200);
  padding: 2.4rem 4.8rem;
  border-radius: var(--border-radius-md);
  max-width: 60rem;

  margin-inline: auto;
  flex-basis: 60rem;

  ${mediaQueryManager.phone(
    css`
      font-size: 1.2rem;
      padding: 2.4rem 3.2rem;
    `
  )}
`;

export default Form;
