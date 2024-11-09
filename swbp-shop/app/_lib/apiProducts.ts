import { Product } from "../_types/dbTables";
import { supabase } from "./supabase";

export async function getProducts(): Promise<Product[]> {
  const { data: products, error } = await supabase
    .from("products")
    .select("")
    .returns<Product[]>();
  await new Promise((res) => setTimeout(res, 1000));
  if (error) throw new Error(error.message);

  return products;
}
