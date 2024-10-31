import Link from "next/link";

export default function Navigation() {
  return (
    <ul className="flex gap-12">
      <li>
        <Link href="products">Products</Link>
      </li>
      <li>
        <Link href="shopping-cart">Shopping Cart</Link>
      </li>
      <li>
        <Link href="login">Login</Link>
      </li>
    </ul>
  );
}
