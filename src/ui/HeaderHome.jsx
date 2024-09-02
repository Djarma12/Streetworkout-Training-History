import styled, { css } from "styled-components";
import mediaQueryManager from "../styles/MediaQueryManager";
import HomeNav from "./HomeNav";
import Logo from "./Logo";
import { useScrollDirection } from "../hooks/useScrollDirection";

const StyledHeaderHome = styled.header`
  margin-inline: auto;
  padding-inline: 6.4rem;
  height: 9.6rem;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  &.up {
    background-color: var(--color-grey-800);
  }
  &.down {
    top: -9.6rem;
  }
  ${mediaQueryManager.tabLand(css`
    padding-inline: 4.8rem;
  `)}
  ${mediaQueryManager.tabPort(css`
    align-items: center;
  `)}
  ${mediaQueryManager.phone(css`
    padding-inline: 3.2rem;
  `)}
`;

function HeaderHome() {
  const scrollDirection = useScrollDirection();
  return (
    <StyledHeaderHome className={scrollDirection}>
      <Logo />
      <HomeNav />
    </StyledHeaderHome>
  );
}

export default HeaderHome;
