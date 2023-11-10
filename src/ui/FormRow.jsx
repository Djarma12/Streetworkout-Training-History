import styled, { css } from "styled-components";
import mediaQueryManager from "../styles/MediaQueryManager";

const StyledFormRow = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 15rem 1.4fr 1fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  ${mediaQueryManager.phone(
    css`
      grid-template-columns: 10rem 1.6fr 1fr;
      gap: 0.8rem;
    `
  )}
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);

  ${mediaQueryManager.phone(
    css`
      font-size: 1.2rem;
    `
  )}
`;

function FormRow({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props?.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRow;
