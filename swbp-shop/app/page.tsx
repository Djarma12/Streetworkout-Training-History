import PurchaseProduct from "@/app/_components/PurchaseProduct";
import { Suspense } from "react";
import ProductList from "./_components/ProductList";

export default function Home() {
  return (
    <>
      {/* <Link href={constants.preOrder}>Preorder for 29.99</Link>; */}
      <Suspense fallback={"Loading..."} key="products">
        <ProductList />
      </Suspense>
      <PurchaseProduct />
    </>
  );
}
