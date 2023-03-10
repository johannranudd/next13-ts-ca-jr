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
    <div className="flex justify-center mb-10">
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-secondary rounded-md outline-none"
        placeholder="Search product title"
      />
    </div>
  );
}
