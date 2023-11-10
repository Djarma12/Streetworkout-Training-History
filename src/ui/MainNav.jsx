import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { BiSolidHome, BiSolidAddToQueue } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";

import ButtonIcon from "./ButtonIcon";
import { SidebarProvider } from "../context/SidebarProvider";

const StyledMainNav = styled.ul`
  color: var(--color-grey-200);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const MainNavItem = styled.li`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 3px;
    transform: scaleY(0);
    transition: transform 0.2s, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s,
      //0.2s je delay
      background-color 0.1s;
    background-color: var(--color-primary-dark);
  }

  &:hover::before,
  &.active::before {
    transform: scaleY(1);
    width: 100%;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  text-transform: uppercase;
  padding: 1.6rem 4.8rem;
  z-index: 10;

  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

function MainNav() {
  const activeURL = useLocation().pathname.slice(1);

  return (
    <nav>
      <StyledMainNav>
        <SidebarProvider.CloseSidebar>
          <MainNavItem className={activeURL === "trainings" ? "active" : ""}>
            <NavLink to="/trainings">
              <ButtonIcon variation="secondary">
                <BiSolidHome />
              </ButtonIcon>{" "}
              My trainings
            </NavLink>
          </MainNavItem>
        </SidebarProvider.CloseSidebar>

        <SidebarProvider.CloseSidebar>
          <MainNavItem
            className={activeURL === "trainings/new" ? "active" : ""}
          >
            <NavLink to="/trainings/new">
              <ButtonIcon variation="secondary">
                <BiSolidAddToQueue />
              </ButtonIcon>
              Add new training
            </NavLink>
          </MainNavItem>
        </SidebarProvider.CloseSidebar>

        <SidebarProvider.CloseSidebar>
          <MainNavItem className={activeURL === "exercisers" ? "active" : ""}>
            <NavLink to="/exercisers">
              <ButtonIcon variation="secondary">
                <BsFillPeopleFill />
              </ButtonIcon>
              Exercisers
            </NavLink>
          </MainNavItem>
        </SidebarProvider.CloseSidebar>
      </StyledMainNav>
    </nav>
  );
}

export default MainNav;
