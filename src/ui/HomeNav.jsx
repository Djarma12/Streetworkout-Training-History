import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { SidebarProvider } from "../context/SidebarProvider";
import { moveBottom } from "../styles/animations";
import mediaQueryManager from "../styles/MediaQueryManager";
import Button from "./Button";
import ToggleSidebar from "./ToggleSidebar";

const StyledHomeNav = styled.nav`
  display: flex;
  gap: 8rem;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    display: block;
    height: 3px;
    width: calc(100% + 4.8rem);
    clip-path: polygon(40% 0, 100% 0, 100% 98%, 40% 100%, 0% 38%);
    background-color: var(--color-red-600);
    position: absolute;
    top: 2rem;
    right: 0;
  }

  animation: ${moveBottom} 0.25s ease-out;

  ${mediaQueryManager.bigDesktop(css`
    animation: none;
  `)}
  ${mediaQueryManager.tabPort(css`
    width: 80%;
    height: max-content;
    flex-direction: column;
    background-color: var(--color-grey-700);
    border-radius: var(--border-radius-lg);
    padding: 3.2rem 4.8rem;
    gap: 3.2rem;
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translateX(-50%);

    & > :first-child {
      align-self: self-end;
    }
    & > :last-child {
      width: max-content;
    }

    &::after {
      display: none;
      /* top: 0.4rem;
      width: 100%; */
    }
  `)}
`;

const NavList = styled.ul`
  display: flex;
  gap: 3.2rem;
  align-items: center;

  ${mediaQueryManager.tabPort(css`
    flex-direction: column;
    background-color: var(--color-grey-700);
  `)}
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    text-transform: uppercase;
    font-weight: 700;
    color: var(--color-grey-200);
    transition: all 0.2s;
  }
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-primary);
  }
`;

function HomeNav() {
  return (
    <SidebarProvider>
      <SidebarProvider.Sidebar>
        <StyledHomeNav>
          <ToggleSidebar />
          <SidebarProvider.CloseSidebar>
            <NavList>
              <li>
                <StyledNavLink to="/home">Home</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/our-team">Our team</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/services">Services</StyledNavLink>
              </li>
              <li>
                <StyledNavLink to="/contact">Contact</StyledNavLink>
              </li>
            </NavList>
          </SidebarProvider.CloseSidebar>
          <Link to="/login">
            <Button>Become a member</Button>
          </Link>
        </StyledHomeNav>
      </SidebarProvider.Sidebar>
      <ToggleSidebar />
    </SidebarProvider>
  );
}

export default HomeNav;
