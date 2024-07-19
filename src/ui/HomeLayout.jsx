import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import mediaQueryManager from "../styles/MediaQueryManager";
import HeaderHome from "./HeaderHome";
import Footer from "./Footer";

const Main = styled.main`
  background-color: var(--color-red-50);
  padding-inline: 4.8rem;
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
  max-width: 120rem;
  margin: 0 auto;
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
