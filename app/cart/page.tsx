import CartList from "./CartList";
import { Suspense } from "react";
import TotalCheckout from "./TotalCheckout";
export default function CartPage() {
  return (
    <div className="mb-28 mt-20">
      <Suspense fallback={<h2 className="text-center">Loading cart...</h2>}>
        <CartList />
        <TotalCheckout />
      </Suspense>
    </div>
  );
}
