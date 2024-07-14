import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import mediaQueryManager from "../styles/MediaQueryManager";
import HeaderHome from "./HeaderHome";

const StyledHomeLayout = styled.div`
  background-image: url("public/App-Layout.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 80dvh;
`;

const Main = styled.main`
  /* background-color: var(--color-grey-50);
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
  )} */
`;

const Container = styled.div`
  /* max-width: 120rem;
  margin: 0 auto;
  margin-bottom: 6.4rem;
  margin-inline: auto; */
`;

function HomeLayout() {
  return (
    <StyledHomeLayout>
      <HeaderHome />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledHomeLayout>
  );
}

export default HomeLayout;
