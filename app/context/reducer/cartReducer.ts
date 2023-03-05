import { IState, IDataObject } from "@/types/types";
import { getItem, setItem } from "@/app/utils/storage/localstorage";
import { getTotals } from "@/app/utils/generic";

export const initialState: IState = {
  products: getItem("cart"),
  itemsInCart: 0,
  totalPrice: 0,
};

export function reducer(state: IState, action: any) {
  switch (action.type) {
    // case "INITIAL":
    //   return state;
    case "INCREMENT":
      return {
        ...state,
        products: [...state.products, action.payload],
        itemsInCart: state.itemsInCart + 1,
      };
    case "DECREMENT":
      let newArr = state.products.slice();
      let index = state.products.findIndex((item) => {
        if (item.id === action.payload.id) {
          return item;
        }
      });
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
    case "CHANGE":
    case "DELETE":
    default: {
      //   throw Error("Unknown action: " + action.type);
      return state;
    }
  }
}

// function getUniqueItems(products: Array<IDataObject>) {
//   const newArr: Array<IDataObject> = [];
//   products.reduce((total: any, value: IDataObject) => {
//     if (!total.includes(value.id)) {
//       total.push(value.id);
//       newArr.push({ ...value, item });
//     }
//     return total;
//   }, []);

//   // console.log(newArr);
//   return newArr;
// }
