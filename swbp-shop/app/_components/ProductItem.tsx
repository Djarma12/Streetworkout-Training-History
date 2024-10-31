"use client";

import Link from "next/link";
import { useShopping } from "../_contexts/ShoppingContext";
import { Product } from "../_types/dbTables";

export default function ProductItem({ product }: { product: Product }) {
  const { addProduct } = useShopping();
  const { id, name } = product;

  function handleProduct() {
    addProduct({ id, name, num: 1, size: "X" });
  }

  return (
    <li className="flex flex-col">
      <span>{product.name}</span>
      <span>{product.price} $</span>
      <Link href="products/1">Details</Link>
      <button onClick={handleProduct}>Add to Cart</button>
    </li>
  );
}
