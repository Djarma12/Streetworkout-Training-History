import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";

import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import SpinnerMini from "../../ui/SpinnerMini";
import Logo from "../../ui/Logo";
import Heading from "../../ui/Heading";
import mediaQueryManager from "../../styles/MediaQueryManager";

import { useLoginSignup } from "./useLoginSignup";
// import { insertUser } from "../../services/apiAuth";

const StyledLoginForm = styled.div`
  width: 100%;
  padding: 6.4rem 4.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueryManager.phone(
    css`
      padding: 4.8rem 3.2rem;
    `
  )}
`;

const Background = styled.div`
  background-color: var(--color-brand-200);
  position: fixed;
  z-index: -10;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;
`;

function LoginForm() {
  const [isSignUp, setIsSignUp] = useState(false);
  const { loginSignup, isLoading } = useLoginSignup(isSignUp);

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "test@test.com", password: "123123" },
  });

  function onSubmit({ email, password }) {
    loginSignup(
      { email, password }
      // {
      //   onSettled: async (user) => {
      //     if (isSignUp) {
      //       await insertUser({ nickName, birthDate, userid: user.user.id });
      //     }
      //   },
      // }
    );
  }

  return (
    <StyledLoginForm>
      <Background />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header>
          <Logo />
          <Heading as="h1">{isSignUp ? "SignUp" : "LogIn"}</Heading>
        </Header>

        <FormRowVertical label="Email address" error={errors?.email?.message}>
          <Input
            type="email"
            id="email"
            disabled={isLoading}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
          />
        </FormRowVertical>
        <FormRowVertical label="Password" error={errors?.password?.message}>
          <Input
            type="password"
            id="password"
            disabled={isLoading}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 6,
                message: "Password needs a minimum of 6 characters",
              },
            })}
          />
        </FormRowVertical>
        {isSignUp && (
          <>
            <FormRowVertical
              label="Repeat password"
              error={errors?.passwordConfirm?.message}
            >
              <Input
                type="password"
                id="passwordConfirm"
                autoComplete="current-password"
                disabled={isLoading}
                {...register("passwordConfirm", {
                  required: "This field is required",
                  validate: (value) =>
                    value === getValues().password || "Passwords need to match",
                })}
              />
            </FormRowVertical>
          </>
        )}
        <FormRowVertical>
          <Button type="submit" disabled={isLoading}>
            {!isLoading ? isSignUp ? "Sign up" : "Log in" : <SpinnerMini />}
          </Button>
        </FormRowVertical>
        <FormRowVertical>
          <Button
            variation="secondary"
            type="button"
            disabled={isLoading}
            onClick={() => setIsSignUp((e) => !e)}
          >
            {isSignUp ? "I have existing account" : "Create Account"}
          </Button>
        </FormRowVertical>
      </Form>
    </StyledLoginForm>
  );
}

export default LoginForm;
