import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import HeaderHome from "../ui/HeaderHome";

const StyledLogin = styled.div`
  background-image: linear-gradient(
      to bottom left,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.2)
    ),
    url("public/login-background.jpg");
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100dvh;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100% - 9.6rem);
`;

function Login() {
  return (
    <StyledLogin>
      <HeaderHome />
      <LoginContainer>
        <LoginForm />
      </LoginContainer>
    </StyledLogin>
  );
}

export default Login;
