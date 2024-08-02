import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import mediaQueryManager from "../styles/MediaQueryManager";
import Footer from "./Footer";
import HeaderHome from "./HeaderHome";

const Main = styled.main`
  background-color: var(--color-grey-50);
  /* padding-top: 9.6rem; */

  /* border-top: 2px solid var(--color-brand-200);
  border-left: 2px solid var(--color-brand-200);
  height: 100vh;
  height: 100svh;
  overflow-y: auto;
  
  ${mediaQueryManager.phone(
    css`
      padding: 3.2rem 2.4rem;
    `
  )} */
`;

const Container = styled.div`
  margin-top: 80dvh;
`;

function HomeLayout() {
  return (
    <>
      <HeaderHome />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      <Footer />
    </>
  );
}

export default HomeLayout;
