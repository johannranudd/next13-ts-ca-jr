import { IDataObject } from "@/types/types";

export function sortByTitle(array: Array<IDataObject>) {
  return array.sort((a, b) => a.title.localeCompare(b.title));
}

export function getUniqueItems(products: Array<IDataObject>) {
  const uniqueArray: Array<IDataObject> = [];

  products.reduce((total: any, value: IDataObject) => {
    if (!total.includes(value.id)) {
      total.push(value.id);
      uniqueArray.push({ ...value });
    }
    return total;
  }, []);
  return uniqueArray;
}

export function getNumberOfProductsInCart(
  uniqueArray: Array<IDataObject>,
  products: Array<IDataObject> = []
) {
  const countById: any = {};

  products.forEach((obj) => {
    const id = obj.id;
    countById[id] = (countById[id] || 0) + 1;
  });

  interface IIdAndAmountInCart {
    id: string;
    amountInCart: number;
  }

  const objectWithIdAndAmount = Object.keys(countById).map(
    (id): IIdAndAmountInCart => {
      return { id: id, amountInCart: countById[id] };
    }
  );

  const numberedArray: any = uniqueArray.map((item, index) => {
    if (item.id === objectWithIdAndAmount[index].id) {
      const amountInCart: undefined | number =
        objectWithIdAndAmount[index].amountInCart;
      return {
        ...item,
        amountInCart: amountInCart,
      };
    }
  });
  return numberedArray;
}
