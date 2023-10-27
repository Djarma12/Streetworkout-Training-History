import styled, { css } from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import Logout from "../features/authentication/Logout";
import ButtonProfile from "./ButtonProfile";
import { useDarkMode } from "../context/DarkModeContext";

const StyledSidebar = styled.aside`
  ${(props) => {
    if (props.dark) {
      return css`
        background-color: var(--color-grey-50);
      `;
    } else {
      return css`
        background-color: var(--color-grey-900);
      `;
    }
  }}
  grid-row: 1/-1;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-block: 1.6rem;
`;

const Footer = styled.footer`
  width: 100%;
  padding-inline: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Sidebar() {
  const { isDarkMode } = useDarkMode();

  return (
    <StyledSidebar dark={isDarkMode}>
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
