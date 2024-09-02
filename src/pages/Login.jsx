import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Footer from "../ui/Footer";
import HeaderHome from "../ui/HeaderHome";

const StyledLogin = styled.div`
  background-image: linear-gradient(
      to bottom left,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.2)
    ),
    url("/home-2.webp");
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (max-width: 37.5rem) {
    background-image: linear-gradient(
        to bottom left,
        rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.4)
      ),
      url("/home-2-small.webp");
  }
`;

const LoginContainer = styled.div`
  padding-block: 12.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

function Login() {
  return (
    <>
      <StyledLogin>
        <HeaderHome />
        <LoginContainer>
          <LoginForm />
        </LoginContainer>
      </StyledLogin>
      <Footer />
    </>
  );
}

export default Login;
