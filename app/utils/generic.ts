import { IDataObject } from "@/types/types";

export function getUniqueNumberedSortedCart(array: Array<IDataObject>) {
  const uniqueArray = getUniqueItems(array);
  const numberedArray = getNumberOfProductsInCart(uniqueArray, array);
  const sortedByTitle = sortByTitle(numberedArray);
  return sortedByTitle;
}

export function getTotals(array: Array<any>) {
  if (array.length === 0) {
    return 0;
  }
  return array.reduce((total, current) => {
    return Number(total) + Number(current.discountedPrice);
  }, []);
}

export function sortByTitle(array: Array<IDataObject>) {
  return array.sort((a, b) => a.title.localeCompare(b.title));
}

export function getUniqueItems(products: Array<IDataObject>) {
  const uniqueArray: Array<IDataObject> = [];

  products.reduce((total: Array<string>, value: IDataObject) => {
    if (!total.includes(value.id)) {
      total.push(value.id);
      uniqueArray.push(value);
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

  const numberedArray: Array<any> = uniqueArray.map((item, index) => {
    if (item.id === objectWithIdAndAmount[index].id) {
      const amountInCart: number = objectWithIdAndAmount[index].amountInCart;
      return {
        ...item,
        amountInCart: amountInCart,
      };
    }
  });
  return numberedArray;
}
