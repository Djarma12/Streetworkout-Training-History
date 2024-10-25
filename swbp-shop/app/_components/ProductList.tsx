import { getProducts } from "@/app/_lib/apiProducts";

async function ProductList() {
  const products = await getProducts();
  console.log(products);
  return <div>{products[0].name}</div>;
}

export default ProductList;
