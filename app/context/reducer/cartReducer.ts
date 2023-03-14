import { IState } from "@/types/types";
import { getItem } from "@/app/utils/storage/localstorage";
import { getTotals } from "@/app/utils/generic";

export const initialState: IState = {
  products: getItem("cart"),
  itemsInCart: 0,
  totalPrice: 0,
};

export function reducer(
  state: IState,
  action: { type: string; payload?: any }
) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        products: [...state.products, action.payload],
        itemsInCart: state.itemsInCart + 1,
      };
    case "DECREMENT":
      let newArr = state.products.slice();
      let index = newArr.findIndex((item) => item.id === action.payload.id);
      newArr.splice(index, 1);
      return {
        ...state,
        products: newArr,
        itemsInCart: state.itemsInCart - 1,
      };

    case "UPDATE_TOTAL":
      const totalPrice = getTotals(state.products);
      return {
        ...state,
        totalPrice: totalPrice,
      };
    case "CLEAR_CART":
      return {
        products: [],
        itemsInCart: 0,
        totalPrice: 0,
      };
    default: {
      return state;
    }
  }
}
