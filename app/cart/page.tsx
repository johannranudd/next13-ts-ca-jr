import CartList from "./CartList";
import { Suspense } from "react";
export default function CartPage() {
  return (
    <>
      <Suspense fallback={<div>Loading cart...</div>}>
        <CartList />
      </Suspense>
    </>
  );
}
