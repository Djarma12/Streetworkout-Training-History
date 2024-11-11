import { signOutAction } from "@/app/_lib/actions/signInOut";

export default function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button type="submit">SignOut</button>
    </form>
  );
}
