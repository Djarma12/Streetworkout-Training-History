import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="products">Products</Link>
      <Link href="shopping-cart">Shopping Cart</Link>
      <Link href="login">Login</Link>
    </>
  );
}
