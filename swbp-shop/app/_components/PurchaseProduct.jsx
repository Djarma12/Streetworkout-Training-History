"use client";
import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { createPaymentIntent } from "../_lib/actions/payment";
import { stripePromise } from "../_lib/stripe";
import CheckoutForm from "./CheckoutForm";

function PurchaseProduct() {
  const [clientSecret, setClientSecret] = useState("");
  async function initiatePayment() {
    const paymentIntent = await createPaymentIntent(
      10000,
      `Payment of the user`
    );
    setClientSecret(paymentIntent.client_secret);
  }

  return (
    <div>
      <button onClick={initiatePayment}>Purchase Product</button>
      {!!clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret: clientSecret }}
        >
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default PurchaseProduct;
