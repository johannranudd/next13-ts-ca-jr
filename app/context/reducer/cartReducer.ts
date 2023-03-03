import { IState, IDataObject } from "@/types/types";
import { getItem } from "@/app/utils/storage/localstorage";

export const initialState: any = {
  products: getItem("cart"),
};

// console.log(typeof );
// products: getItem("cart"),

export function reducer(state: IState, action: any) {
  switch (action.type) {
    case "ADD":
      // const cart = getItem();
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "CHANGE":
    case "DELETE":
    default: {
      //   throw Error("Unknown action: " + action.type);
      return state;
    }
  }
}
