import { Suspense } from "react";
import ListOfProducts from "./components/lists/ListOfProducts";

export default function Home() {
  return (
    <main className="mb-52 mt-20 px-2">
      <h1>Home Page</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <ListOfProducts />
      </Suspense>
    </main>
  );
}
