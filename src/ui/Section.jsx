import styled, { css } from "styled-components";

const variations = {
  redLight: css`
    background-color: var(--color-red-50);
  `,
};

const StyledSection = styled.section`
  padding-block: 9.6rem;
  padding-inline: 4.8rem;
  ${(props) => variations[props.variation]}
`;

const Container = styled.div`
  max-width: 120rem;
  margin-inline: auto;
`;

function Section({ variation, children }) {
  return (
    <StyledSection variation={variation}>
      <Container>{children}</Container>
    </StyledSection>
  );
}

export default Section;
