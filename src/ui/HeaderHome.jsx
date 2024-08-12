import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
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
`;

const Nav = styled.nav`
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
`;

const NavList = styled.ul`
  display: flex;
  gap: 3.2rem;
  align-items: center;
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

function HeaderHome() {
  return (
    <StyledHeaderHome>
      <Logo />
      <Nav>
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
        <Link to="/login">
          <Button>Become a member</Button>
        </Link>
      </Nav>
    </StyledHeaderHome>
  );
}

export default HeaderHome;
