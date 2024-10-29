import { getProducts } from "@/app/_lib/apiProducts";
import PurchaseProduct from "./PurchaseProduct";

async function ProductList() {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product?.name}</span>
          <PurchaseProduct product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
