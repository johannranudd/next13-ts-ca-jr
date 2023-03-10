"use client";
import React, {
  useState,
  createContext,
  useContext,
  useReducer,
  useEffect,
} from "react";
import { reducer, initialState } from "./reducer/cartReducer";
import { ContextInterface, IDataObject } from "@/types/types";
import { setItem } from "@/app/utils/storage/localstorage";

export const Context = createContext<ContextInterface>({
  cartState: {},
  dispatch: (): IDataObject[] => [],
  menuIsOpen: false,
  setMenuIsOpen: () => false,
  searchArray: [],
  setSearchArray: () => [],
});

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [searchArray, setSearchArray] = useState<IDataObject[]>([]);
  const [cartState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setItem("cart", cartState.products);
  }, [cartState]);

  useEffect(() => {
    dispatch({ type: "UPDATE_TOTAL" });
  }, [cartState.itemsInCart]);

  return (
    <Context.Provider
      value={{
        cartState,
        dispatch,
        menuIsOpen,
        setMenuIsOpen,
        searchArray,
        setSearchArray,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => useContext(Context);
