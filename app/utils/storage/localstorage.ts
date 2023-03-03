import { IDataObject } from "@/types/types";
export function getItem(key: string): IDataObject[] {
  if (typeof window !== "undefined") {
    const locStor = JSON.parse(localStorage.getItem(key) || "[]");
    if (locStor != null || locStor != undefined) {
      return locStor;
    } else {
      return [];
    }
  } else {
    return [];
  }
}

export function setItem(key: string, cartState: any) {
  localStorage.setItem(key, JSON.stringify(cartState));
}
