import { BiMenuAltRight, BiWindowClose } from "react-icons/bi";
import styled, { css } from "styled-components";

import { useSidebar } from "../context/SidebarProvider";
import mediaQueryManager from "../styles/MediaQueryManager";
import ButtonIcon from "./ButtonIcon";
import HeaderHeading from "./HeaderHeading";

import { isTabPort } from "../utils/helpers";

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
  const { isOpen, toggleOpen } = useSidebar();

  return (
    <StyledHeader>
      <HeaderHeading />
      {isTabPort() && (
        <ButtonIcon variation="tertiary" onClick={toggleOpen}>
          {isOpen ? <BiWindowClose /> : <BiMenuAltRight />}
        </ButtonIcon>
      )}
    </StyledHeader>
  );
}
export default Header;
