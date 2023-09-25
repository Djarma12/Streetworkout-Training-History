import { useState } from "react";
import { useLogin } from "./useLogin";

function LoginForm() {
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123123");

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          // setEmail("");
          // setPassword("");
        },
      }
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginForm;
