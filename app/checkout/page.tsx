import TotalPriceCheckout from "./TotalPriceCheckout";
import ListOfPurchases from "./ListOfPurchases";
import { Suspense } from "react";

export default function CheckoutPage() {
  return (
    <div className="mb-28 mt-20">
      {/* <h1 className="text-center">Success!</h1>
      <p className="text-center">Thank you for your purchase:</p> */}
      <Suspense fallback={<h2>Loading</h2>}>
        <ListOfPurchases />
      </Suspense>
      <Suspense fallback={<h2>Loading</h2>}>
        <TotalPriceCheckout />
      </Suspense>
    </div>
  );
}
