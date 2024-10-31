import { getProducts } from "@/app/_lib/apiProducts";
import Link from "next/link";

async function ProductList() {
  const products = await getProducts();
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <span>{product.name}</span>
          <span>{product.price}</span>
          <Link href="products/1">Details</Link>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
