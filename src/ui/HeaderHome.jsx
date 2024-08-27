import styled, { css } from "styled-components";
import mediaQueryManager from "../styles/MediaQueryManager";
import HomeNav from "./HomeNav";
import Logo from "./Logo";

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
  ${mediaQueryManager.tabLand(css`
    padding-inline: 4.8rem;
  `)}
  ${mediaQueryManager.tabPort(css`
    align-items: center;
  `)}
  ${mediaQueryManager.phone(css`
    padding-inline: 3.2rem;
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
