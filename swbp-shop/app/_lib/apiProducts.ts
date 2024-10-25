import { supabase } from "./supabase";

export async function getProducts() {
  const { data: products, error } = await supabase.from("products").select("");

  await new Promise((res) => setTimeout(res, 1000));
  if (error) throw new Error(error.message);

  return products;
}
