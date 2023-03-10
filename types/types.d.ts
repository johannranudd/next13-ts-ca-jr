// context
// export type TProduct = {
//   id: string;
//   name: string;
//   price: number;
// };

export interface IState {
  products: IDataObject[] | [];
  itemsInCart: number;
  totalPrice: number;
}

export interface ContextInterface {
  cartState: Object<IState>;
  dispatch: Dispatch<any>;
  menuIsOpen: boolean;
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
  searchArray: Array<IDataObject>;
  setSearchArray: Dispatch<SetStateAction<[]>>;
}
// END context

// response object for fetching data from https://api.noroff.dev/api/v1/online-shop
interface IReviews {
  id: string;
  username: string;
  rating: number;
  description: string;
}

interface IDataObject {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: Array<string>;
  reviews: Array<IReviews>;
  amountInCart?: number;
}
// END response object for fetching data from https://api.noroff.dev/api/v1/online-shop
