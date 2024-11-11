import PurchaseProduct from "../_components/PurchaseProduct";

export const metadata = { title: "Shopping Cart" };

export default function Page() {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <PurchaseProduct />
    </div>
  );
}
