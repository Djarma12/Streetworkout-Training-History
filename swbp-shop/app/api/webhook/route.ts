// import { NextRequest, NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
//   apiVersion: "2024-09-30.acacia",
// });

// export async function POST(req: NextRequest) {
//   const body = await req.text();
//   const res = JSON.parse(body);
//   const sig = req.headers.get("stripe-signature");
//   let event: Stripe.Event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       body,
//       sig!,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     );
//     console.log("event", event.type);
//     console.log(res.data);
//     // const response: any = await registerPayment();
//     return NextResponse.json({ status: "success", event: event.type });
//   } catch (err) {
//     console.log(err);
//     return new Response(`Webhook Error: ${err}`, {
//       status: 400,
//     });
//   }

//   //   switch (event.type){
//   //   case "checkout.session.completed":
//   //   const savedSession=await handleCompleted
//   // }
//   //   if (
//   //     eventType !==  &&
//   //     eventType !== "checkout.session.async_payment_succeeded"
//   //   )
//   //     return new Response("Server Error", {
//   //       status: 500,
//   //     });

//   //   try {
//   //     // database update here
//   //     return new Response("Subscription added", {
//   //       status: 200,
//   //     });
//   //   } catch (error) {
//   //     return new Response("Server error", {
//   //       status: 500,
//   //     });
//   // }
// }
