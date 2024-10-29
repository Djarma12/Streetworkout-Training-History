"use client";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  console.log(elements);
  async function handleSubmit() {
    if (!elements || !stripe) return null;
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: "http://localhost:3000/complete-payment" },
    });
    if (error) {
      console.log("Err", error);
      alert("Payment blocked");
    } else {
      alert("Payment Successful");
    }
  }
  return (
    <div className="w-96">
      <span>Complete your payment</span>
      <form action={handleSubmit}>
        <PaymentElement />
        {/* <AddressElement
          options={{ mode: "billing", allowedCountries: ["EUR"] }}
        /> */}
        <button>Pay</button>
      </form>
    </div>
  );
}

export default CheckoutForm;
