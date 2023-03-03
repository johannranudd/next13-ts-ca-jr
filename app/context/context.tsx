"use client";
import React, {
  ReactNode,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useReducer,
  useEffect,
} from "react";
import { reducer, initialState } from "./reducer/cartReducer";
import { ContextInterface, IState, IDataObject } from "@/types/types";
import { getItem, setItem } from "@/app/utils/storage/localstorage";

export const Context = createContext<ContextInterface>({
  cartState: {},
  dispatch: (): IDataObject[] => [],
  menuIsOpen: false,
  setMenuIsOpen: () => false,
});

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [cartState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    setItem("cart", cartState.products);
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
