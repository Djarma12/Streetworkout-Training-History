"use client";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  async function handleSubmit() {
    try {
      if (!elements || !stripe) return;
      const result = await stripe?.confirmPayment({
        elements,
        confirmParams: { return_url: "http://localhost:3000" },
      });
      if (result.error) {
        console.log("Err", result.error);
        alert("Payment blocked");
      } else {
        alert("Payment Successful");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="w-96">
      <span>Complete your payment</span>
      <form onSubmit={handleSubmit}>
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
