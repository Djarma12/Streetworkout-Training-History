import styled from "styled-components";
import Spinner from "./Spinner";

const StyledSpinnerFullPage = styled.div`
  margin: 2.5rem;
  height: 100vh;
  display: flex;
  align-items: center;
`;

function SpinnerFullPage() {
  return (
    <StyledSpinnerFullPage>
      <Spinner />
    </StyledSpinnerFullPage>
  );
}

export default SpinnerFullPage;
