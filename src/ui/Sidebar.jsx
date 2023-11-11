import styled, { css } from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import Logout from "../features/authentication/Logout";
import ButtonProfile from "./ButtonProfile";
import mediaQueryManager from "../styles/MediaQueryManager";
import { SidebarProvider, useSidebar } from "../context/SidebarProvider";
import { moveRight } from "../styles/animations";

const StyledSidebar = styled.aside`
  grid-row: 1/-1;
  height: 100vh;
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

  ${mediaQueryManager.phone(
    css`
      padding-bottom: 12.8rem;
    `
  )}
`;

function Sidebar() {
  const { isOpen, toggleOpen } = useSidebar();

  return (
    <>
      {isOpen && (
        <StyledSidebar>
          <Logo />
          <MainNav />
          <Footer>
            <SidebarProvider.CloseSidebar>
              <ButtonProfile />
            </SidebarProvider.CloseSidebar>
            <Logout />
          </Footer>
        </StyledSidebar>
      )}
    </>
  );
}

export default Sidebar;
