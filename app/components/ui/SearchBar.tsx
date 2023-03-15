"use client";
import { useState, useEffect } from "react";
import { getData } from "@/app/utils/gets";
import { IDataObject } from "@/types/types";
import { useGlobalContext } from "@/app/context/context";

export default function SearchBar() {
  const { setSearchArray } = useGlobalContext();
  const [search, setSearch] = useState<string>("");

  async function handleSearch() {
    const regex = "^[a-zA-Z0-9æøåÆØÅ]+( [a-zA-Z0-9æøåÆØÅ]+)*$";
    const result = search.match(regex);

    if (search === "") {
      const products = await getData();
      setSearchArray(products);
    }

    if (result && search !== "") {
      const products = await getData();
      const filter = products.filter((product: IDataObject) => {
        if (product.title.toLowerCase().includes(search.toLowerCase())) {
          return product;
        }
      });
      setSearchArray(filter);
    }
  }

  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <div className="px-2 flex justify-center w-full">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 w-full max-w-[400px] border rounded-md border-secondary dark:border-primary focus:outline outline-thirdClr"
        placeholder="Search product title"
      />
    </div>
  );
}
