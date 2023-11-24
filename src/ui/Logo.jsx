import styled from "styled-components";

const StyledLogo = styled.img`
  /* border-radius: 50%; */
  height: 9rem;
  width: 9rem;
`;

function Logo() {
  return <StyledLogo src="/logo.png" alt="Logo" />;
}

export default Logo;
