import { Outlet } from "react-router-dom";
import styled, { css } from "styled-components";

import Header from "./Header";
import Sidebar from "./Sidebar";
import useBodyOverflow from "../hooks/useBodyOverflow";
import mediaQueryManager from "../styles/MediaQueryManager";
import { SidebarProvider } from "../context/SidebarProvider";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  overflow: hidden;

  ${mediaQueryManager.tabPort(
    css`
      grid-template-columns: 1fr;
    `
  )}
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem;

  border-top: 2px solid var(--color-brand-200);
  border-left: 2px solid var(--color-brand-200);
  height: 100vh;
  height: 100svh;
  overflow-y: auto;

  ${mediaQueryManager.phone(
    css`
      padding: 3.2rem 2.4rem;
    `
  )}
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
      <SidebarProvider>
        <Header />
        <Sidebar />
      </SidebarProvider>
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
