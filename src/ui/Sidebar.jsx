import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-200);
  grid-row: 1/-1;

  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27%;
  padding: 1.6rem 4.8rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <h1>Logo</h1>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
