import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.6rem 0;
`;

const Label = styled.label`
  cursor: pointer;
  width: max-content;
  font-weight: 700;
  color: var(--color-grey-700);
  border-bottom: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    color: var(--color-grey-800);
    border-bottom: 1px solid var(--color-grey-300);
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
