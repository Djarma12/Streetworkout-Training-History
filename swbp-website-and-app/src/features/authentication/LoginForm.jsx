import { useState } from "react";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import mediaQueryManager from "../../styles/MediaQueryManager";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Heading from "../../ui/Heading";
import Input from "../../ui/Input";
import Logo from "../../ui/Logo";
import SpinnerMini from "../../ui/SpinnerMini";

import { useLoginSignup } from "./useLoginSignup";
import { TEST_CREDENTIAL } from "../../utils/contants";
import { useLoginGoogle } from "./useLoginGoogle";

const StyledLoginForm = styled.div`
  width: 100%;
  padding-inline: 4.8rem;
  color: var(--color-grey-900);

  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQueryManager.phone(
    css`
      padding: 4.8rem 3.2rem;
    `
  )}
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
  const { loginSignup, isLoginSignup } = useLoginSignup(isSignUp);
  const { loginGoogle, isLogging: isLoggingGoogle } = useLoginGoogle();
  const isLoading = isLoginSignup || isLoggingGoogle;

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  function onSubmit({ email, password }) {
    loginSignup({ email, password });
  }

  return (
    <StyledLoginForm>
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
            placeholder="example@gmail.com"
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
            placeholder={
              isSignUp ? "Must have at least 6 characters" : "Enter Password"
            }
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
              error={errors?.passwordConfirm?.message}>
              <Input
                type="password"
                id="passwordConfirm"
                autoComplete="current-password"
                disabled={isLoading}
                placeholder="Confirm password"
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
          <Button
            variation="secondary"
            type="button"
            disabled={isLoading}
            onClick={loginGoogle}>
            Login With Google <img src="/google.svg" alt="Google Image" />
          </Button>
          <Button
            variation="secondary"
            type="button"
            disabled={isLoading}
            onClick={() => setIsSignUp((e) => !e)}>
            {isSignUp ? "I have existing account" : "Create Account"}
          </Button>
        </FormRowVertical>
        <FormRowVertical>
          <Button
            variation="tertiary"
            type="button"
            disabled={isLoading}
            onClick={() => onSubmit(TEST_CREDENTIAL)}>
            Test Application
          </Button>
        </FormRowVertical>
      </Form>
    </StyledLoginForm>
  );
}

export default LoginForm;
