import { signInAction } from "@/app/_lib/actions/signInOut";

export default function SignInButton() {
  return (
    <form action={signInAction}>
      <button type="submit">Signin with Google</button>
    </form>
  );
}
