import { Suspense } from "react";
import FormConponent from "./FormConponent";
import LoadingWidget from "../components/widgets/LoadingWidget";

export default function ContactPage() {
  return (
    <div className="mt-16 mb-48">
      <h1 className="text-[1.8rem] py-8">Contact</h1>
      <Suspense fallback={<LoadingWidget />}>
        <FormConponent />
      </Suspense>
    </div>
  );
}
