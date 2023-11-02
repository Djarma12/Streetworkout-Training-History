import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Sidebar from "./Sidebar";
import useBodyOverflow from "../hooks/useBodyOverflow";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  overflow: hidden;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem;

  border-top: 2px solid var(--color-brand-200);
  border-left: 2px solid var(--color-brand-200);
  /* height: calc(100vh - 8rem); */
  height: 100vh;
  overflow-y: auto;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  margin-bottom: 6.4rem;
  margin-inline: auto;
`;

function AppLayout() {
  useBodyOverflow();
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
