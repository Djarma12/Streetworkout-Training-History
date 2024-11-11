import { Suspense } from "react";
import ProductList from "../_components/ProductList";

export const metadata = { title: "Products" };

export default function Page() {
  return (
    <div>
      <Suspense fallback={"Loading..."} key="products">
        <ProductList />
      </Suspense>
    </div>
  );
}
