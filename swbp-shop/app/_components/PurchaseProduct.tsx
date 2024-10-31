"use client";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useShopping } from "../_contexts/ShoppingContext";
import { createPaymentIntent } from "../_lib/actions/payment";
import { stripePromise } from "../_lib/stripe";
import CheckoutForm from "./CheckoutForm";

function PurchaseProduct() {
  const { products } = useShopping();
  const [clientSecret, setClientSecret] = useState("");

  async function initiatePayment() {
    const { clientSecret } = await createPaymentIntent({
      productIds: [1, 2],
      description: `Payment of the user`,
    });
    setClientSecret(clientSecret!);
  }
  console.log(clientSecret, !!clientSecret);
  return (
    <div>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
      <button onClick={initiatePayment}>Purchase Product</button>
      {!!clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default PurchaseProduct;
