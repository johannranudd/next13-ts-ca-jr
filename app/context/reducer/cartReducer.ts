import { IState, IDataObject } from "@/types/types";
import { getItem, setItem } from "@/app/utils/storage/localstorage";

export const initialState: IState = {
  products: getItem("cart"),
};

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

export function reducer(state: IState, action: any) {
  switch (action.type) {
    case "ADD":
      // console.log(action.payload);
      const locStor = getItem("cart");
      if (state.products.length === 0) {
        console.log("no Locstor");
        return {
          ...state,
          products: [...state.products, { ...action.payload, amountInCart: 0 }],
        };
      } else {
        const mappy = state.products.map((item: any) => {
          if (item.id === action.payload.id) {
            console.log("equal");
            return { ...item, amountInCart: item.amountInCart + 1 };
            // return {
            //   ...state,
            //   products: [
            //     ...state.products,
            //     { ...item, amountInCart: item.amountInCart + 1 },
            //   ],
            // };
          } else {
            console.log("unique");
            return { ...item, amountInCart: 0 };
            // return {
            //   ...state,
            //   products: [...state.products, { ...item, amountInCart: 0 }],
            // };
          }
          // return item;
        });
        console.log(mappy);
        // console.log(state.products);
        // const newArray = [...state.products, mappy[0]];
        // console.log(newArray);
        // setItem("cart", newArray);
        return {
          ...state,
          products: [...state.products, mappy[0]],
        };
        // const newPayload = { ...action.payload, amountInCart: 0 };
      }

    case "CHANGE":
    case "DELETE":
    default: {
      //   throw Error("Unknown action: " + action.type);
      return state;
    }
  }
}

// const locStor = getItem("cart");
//       if (locStor.length === 0) {
//         console.log("no Locstor");
//         return {
//           ...state,
//           products: [...state.products, { ...action.payload, amountInCart: 0 }],
//         };
//       } else {
//         const mappy = locStor.map((item: any) => {
//           if (item.id === action.payload.id) {
//             console.log("equal");
//             return { ...item, amountInCart: (item.amountInCart += 1) };
//           } else {
//             console.log("unique");
//             return { ...action.payload, amountInCart: 0 };
//           }
//         });
//         console.log(mappy[0]);
//         return {
//           ...state,
//           products: [...state.products, { ...mappy[0] }],
//         };
//         // const newPayload = { ...action.payload, amountInCart: 0 };
//       }
//     // return state;
