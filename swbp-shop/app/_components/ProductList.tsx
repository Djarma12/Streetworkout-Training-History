import { getProducts } from "@/app/_lib/apiProducts";
import ProductItem from "./ProductItem";

async function ProductList() {
  const products = await getProducts();
  console.log(products);
  return (
    <ul className="flex gap-16">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default ProductList;
