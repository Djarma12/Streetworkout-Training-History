import styled from "styled-components";
import HeaderHeading from "./HeaderHeading";

const StyledHeader = styled.header`
  z-index: 1;
  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-md);
  grid-column: 2/3;

  padding-inline: 4.4rem;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.4rem;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderHeading />
      icon
    </StyledHeader>
  );
}
export default Header;
