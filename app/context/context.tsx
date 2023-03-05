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
import { getData } from "../utils/gets";

export const Context = createContext<ContextInterface>({
  cartState: {},
  dispatch: (): IDataObject[] => [],
  menuIsOpen: false,
  setMenuIsOpen: () => false,
});

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [cartState, dispatch] = useReducer(reducer, initialState);

  // async function fetchOnClient() {
  //   const data = await getData();
  //   dispatch({ type: "INITIAL", payload: data });
  // }
  useEffect(() => {
    // fetchOnClient();
    dispatch({ type: "UPDATE_TOTAL" });
    // console.log("TOTAL::", cartState.total);
  }, [cartState.itemsInCart]);

  useEffect(() => {
    setItem("cart", cartState.products);
    // dispatch({ type: "UPDATE_TOTAL" });
    // console.log("STATE IN CONTEXT:: ", cartState.products);
  }, [cartState]);

  return (
    <Context.Provider
      value={{ cartState, dispatch, menuIsOpen, setMenuIsOpen }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => useContext(Context);
