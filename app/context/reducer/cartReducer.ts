import { IState, IDataObject } from "@/types/types";
import { getItem, setItem } from "@/app/utils/storage/localstorage";

export const initialState: IState = {
  products: getItem("cart"),
};

export function reducer(state: IState, action: any) {
  switch (action.type) {
    // case "INITIAL":
    //   return state;
    case "ADD":
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
