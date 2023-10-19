import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import Logout from "../features/authentication/Logout";
import ButtonProfile from "./ButtonProfile";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-200);
  grid-row: 1/-1;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 4.8rem;
`;

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      <Footer>
        <ButtonProfile />
        <Logout />
      </Footer>
    </StyledSidebar>
  );
}

export default Sidebar;
