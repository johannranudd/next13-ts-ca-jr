import CartList from "./CartList";
import { Suspense } from "react";
import TotalCheckout from "./TotalCheckout";
import LoadingWidget from "../components/widgets/LoadingWidget";

export default function CartPage() {
  return (
    <div className="mt-16 mb-48">
      <Suspense fallback={<LoadingWidget />}>
        <CartList />
        <TotalCheckout />
      </Suspense>
    </div>
  );
}
