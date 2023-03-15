import { Suspense } from "react";
import FormConponent from "./FormConponent";
import LoadingWidget from "../components/widgets/LoadingWidget";

export default function ContactPage() {
  return (
    <div className="mt-28 mb-48">
      <h1>Contact</h1>
      <Suspense fallback={<LoadingWidget />}>
        <FormConponent />
      </Suspense>
    </div>
  );
}
