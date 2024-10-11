import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import HeaderHome from "./HeaderHome";

const Main = styled.main`
  background-color: var(--color-grey-50);
`;

const Container = styled.div`
  margin-top: 70.4svh;
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
