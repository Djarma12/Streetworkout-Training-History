import styled, { css } from "styled-components";

import mediaQueryManager from "../styles/MediaQueryManager";
import HeaderHeading from "./HeaderHeading";

import ToggleSidebar from "./ToggleSidebar";

const StyledHeader = styled.header`
  z-index: 1;
  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-md);
  grid-column: 2/3;

  padding-inline: 4.8rem;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;

  ${mediaQueryManager.tabPort(
    css`
      grid-column: 1/-1;
      padding-inline: 2.4rem;
    `
  )}
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderHeading />
      <ToggleSidebar />
    </StyledHeader>
  );
}
export default Header;
