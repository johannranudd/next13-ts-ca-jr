import { Suspense, use } from "react";
import { getData } from "./utils/gets";
import ListOfProducts from "./components/lists/ListOfProducts";
import SearchBar from "./components/ui/SearchBar";

export default function Home() {
  const data = use(getData());
  return (
    <main className="mb-52 mt-20 px-2">
      <h1>Home Page</h1>
      <SearchBar />
      <Suspense fallback={<h2>Loading...</h2>}>
        <ListOfProducts data={data} />
      </Suspense>
    </main>
  );
}
