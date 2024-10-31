"use server";
import { Product } from "@/app/_types/dbTables";
import Stripe from "stripe";
import { getProducts } from "../apiProducts";

const calculateOrderAmount = (items: Product[]) => {
  let total = 0;
  items.forEach((item) => {
    total += item.price * 100;
  });
  return total;
};
export async function createPaymentIntent({
  productIds,
  description,
}: {
  productIds: number[];
  description: string;
}) {
  const products = (await getProducts()).filter((product) =>
    productIds.includes(product.id)
  );
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    typescript: true,
    apiVersion: "2024-09-30.acacia",
  });
  console.log(products);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(products),
    description,
    currency: "EUR",
  });
  console.log(calculateOrderAmount(products));
  return { clientSecret: paymentIntent.client_secret };
}
