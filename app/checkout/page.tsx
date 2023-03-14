import TotalPriceCheckout from "./TotalPriceCheckout";
import ListOfPurchases from "./ListOfPurchases";
import { Suspense } from "react";
import LoadingWidget from "../components/widgets/LoadingWidget";

export default function CheckoutPage() {
  return (
    <div className="mb-48 mt-20">
      <Suspense fallback={<LoadingWidget />}>
        <ListOfPurchases />
        <TotalPriceCheckout />
      </Suspense>
    </div>
  );
}
