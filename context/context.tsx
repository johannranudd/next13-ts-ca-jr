"use client";
import React, {
  ReactNode,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useReducer,
} from "react";
import { reducer, initialState } from "./reducer/cartReducer";
import { TProduct, ContextInterface } from "@/types/types";

export const Context = createContext<ContextInterface>({
  cartState: {},
  dispatch: (): TProduct[] => [],
  menuIsOpen: false,
  setMenuIsOpen: () => false,
});

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const [cartState, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider
      value={{ cartState, dispatch, menuIsOpen, setMenuIsOpen }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => useContext(Context);
