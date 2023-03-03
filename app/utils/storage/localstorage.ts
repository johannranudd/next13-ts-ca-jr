import { IDataObject } from "@/types/types";
export function getItem(key: string): IDataObject[] {
  // const locStor = JSON.parse(localStorage.getItem(key) || "[]");
  const locStor = JSON.parse(localStorage.getItem(key) || "[]");
  return locStor;
}

export function setItem(key: string, cartState: any) {
  localStorage.setItem(key, JSON.stringify(cartState));
}
