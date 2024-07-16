import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";

const StyledHeaderHome = styled.header`
  margin-inline: auto;
  padding-inline: 6.4rem;
  height: 9.6rem;
  display: flex;
  justify-content: space-between;
`;

const Nav = styled.nav`
  display: flex;
  gap: 8rem;
  align-items: center;
  position: relative;

  &::after {
    content: "";
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

const NavItem = styled.li`
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-grey-200);
  transition: all 0.2s;

  &:hover {
    color: var(--color-primary);
  }
`;

function HeaderHome() {
  return (
    <StyledHeaderHome>
      <Logo />
      <Nav>
        <NavList>
          <NavItem>
            <Link to="/home">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">About</Link>
          </NavItem>
          <NavItem>
            <Link to="/services">Services</Link>
          </NavItem>
          <NavItem>
            <Link to="/our-team">Our team</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact">Contact</Link>
          </NavItem>
        </NavList>
        <Link to="/login">
          <Button>Become a member</Button>
        </Link>
      </Nav>
    </StyledHeaderHome>
  );
}

export default HeaderHome;
