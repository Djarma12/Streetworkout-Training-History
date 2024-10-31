import { Suspense } from "react";
import ProductList from "../_components/ProductList";

export default function Page() {
  return (
    <div>
      <Suspense fallback={"Loading..."} key="products">
        <ProductList />
      </Suspense>
    </div>
  );
}
