import { auth } from "@/app/_lib/auth";
import Image from "next/image";
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
        <Link href="login">My Payments</Link>
        {session?.user?.image ? (
          <Link
            href="/account"
            className="flex relative scale-[1.15] -translate-x-3 hover:text-accent-400 transition-colors flex items-center gap-4"
          >
            <Image
              className="object-cover"
              fill
              src={session.user.image}
              referrerPolicy="no-referrer"
              alt={session.user.name || "User image"}
            />
            <span>Guest area</span>
          </Link>
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
