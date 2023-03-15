import CartList from "./CartList";
import { Suspense } from "react";
import TotalCheckout from "./TotalCheckout";
import LoadingWidget from "../components/widgets/LoadingWidget";

export default function CartPage() {
  return (
    <div className="mb-48 mt-20">
      <Suspense fallback={<LoadingWidget />}>
        <CartList />
        <TotalCheckout />
      </Suspense>
    </div>
  );
}
