import styled from "styled-components";

const StyledSection = styled.section`
  padding-block: 9.6rem;
`;

function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}

export default Section;
