import styled, { css } from "styled-components";

import MainNav from "./MainNav";
import Logo from "./Logo";
import Logout from "../features/authentication/Logout";
import ButtonProfile from "./ButtonProfile";
import mediaQueryManager from "../styles/MediaQueryManager";

import { SidebarProvider } from "../context/SidebarProvider";
import { moveRight } from "../styles/animations";

const StyledSidebar = styled.aside`
  grid-row: 1/-1;
  height: 100vh;
  height: 100svh;
  background-color: var(--color-grey-900);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.6rem;

  animation: ${moveRight} 0.25s ease-out;

  ${mediaQueryManager.tabPort(css`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 100;
    transform: translateX(0);
    width: max-content;
  `)}
`;

const Footer = styled.footer`
  width: 100%;
  padding-inline: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Sidebar() {
  return (
    <SidebarProvider.Sidebar>
      <StyledSidebar>
        <Logo />
        <MainNav />
        <Footer>
          <ButtonProfile />
          <Logout />
        </Footer>
      </StyledSidebar>
    </SidebarProvider.Sidebar>
  );
}

export default Sidebar;
