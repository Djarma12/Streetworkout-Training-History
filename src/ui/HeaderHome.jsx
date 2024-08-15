import styled, { css } from "styled-components";
import Logo from "./Logo";
import HomeNav from "./HomeNav";
import mediaQueryManager from "../styles/MediaQueryManager";

const StyledHeaderHome = styled.header`
  margin-inline: auto;
  padding-inline: 6.4rem;
  height: 9.6rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  ${mediaQueryManager.tabPort(css`
    align-items: center;
  `)}
`;

function HeaderHome() {
  return (
    <StyledHeaderHome>
      <Logo />
      <HomeNav />
    </StyledHeaderHome>
  );
}

export default HeaderHome;
