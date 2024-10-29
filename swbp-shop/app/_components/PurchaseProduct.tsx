"use client";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { createPaymentIntent } from "../_lib/actions/payment";
import { stripePromise } from "../_lib/stripe";
import CheckoutForm from "./CheckoutForm";

function PurchaseProduct({ product }) {
  const [clientSecret, setClientSecret] = useState("");

  async function initiatePayment() {
    const { clientSecret } = await createPaymentIntent({
      productIds: [product.id],
      description: `Payment of the user`,
    });
    setClientSecret(clientSecret!);
  }
  console.log(clientSecret, !!clientSecret);
  return (
    <div>
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
