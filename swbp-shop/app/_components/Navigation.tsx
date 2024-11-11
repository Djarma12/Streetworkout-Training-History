import { auth } from "@/app/_lib/auth";
import Link from "next/link";

export default async function Navigation() {
  const session = await auth();
  return (
    <ul className="flex gap-12">
      <li>
        <Link href="products">Products</Link>
      </li>
      <li>
        <Link href="shopping-cart">Shopping Cart</Link>
      </li>
      <li>
        {session?.user?.image ? (
          <>
            <Link
              href="/account"
              className="hover:text-accent-400 transition-colors flex items-center gap-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element*/}
              <img
                className="h-8 rounded-full"
                src={session.user.image}
                referrerPolicy="no-referrer"
                alt={session.user.name || "User image"}
              />
              <span>{session.user?.name}</span>
            </Link>
          </>
        ) : (
          <Link
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
        )}
      </li>
    </ul>
  );
}
