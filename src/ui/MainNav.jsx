import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMainNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function MainNav() {
  return (
    <nav>
      <StyledMainNav>
        <li>
          <Link to="/trainings">My trainings</Link>
        </li>
        <li>
          <Link to="/trainings/new">Add new training</Link>
        </li>
        <li>
          <Link to="/exercisers">Exercisers</Link>
        </li>
      </StyledMainNav>
    </nav>
  );
}

export default MainNav;
