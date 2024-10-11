import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.img`
  /* border-radius: 50%; */
  height: 9rem;
  width: 9rem;
`;

function Logo() {
  return (
    <Link to="/">
      <StyledLogo src="/logo.png" alt="Logo" />
    </Link>
  );
}

export default Logo;
