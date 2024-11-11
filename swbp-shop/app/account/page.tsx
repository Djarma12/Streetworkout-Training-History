import { Session } from "next-auth";
import SignOutButton from "../_components/SignOutButton";
import { auth } from "../_lib/auth";

export const metadata = { title: "My Account" };

export default async function Page() {
  const session = (await auth()) as Session;
  return (
    <>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Welcome, {session.user?.name?.split(" ").at(0)}
      </h2>
      <SignOutButton />
    </>
  );
}
