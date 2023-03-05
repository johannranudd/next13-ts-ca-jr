import CartList from "./CartList";
import { Suspense } from "react";
import TotalCheckout from "./TotalCheckout";
export default function CartPage() {
  return (
    <>
      <Suspense fallback={<div>Loading cart...</div>}>
        <CartList />
        <TotalCheckout />
      </Suspense>
    </>
  );
}
