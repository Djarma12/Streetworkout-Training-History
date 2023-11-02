import styled from "styled-components";

const StyledLogo = styled.img`
  border-radius: 50%;
  height: 8rem;
  width: 8rem;
`;

function Logo() {
  return <StyledLogo src="/logo.webp" alt="Logo" />;
}

export default Logo;
