export function getItem(key: string) {
  //   const cartData: string | null = localStorage.getItem(key);
  //   const locStor = cartData ? JSON.parse(cartData) : [];
  const locStor = JSON.parse(localStorage.getItem(key) || "[]");
  return locStor;
}

export function setItem(key: string, cartState: any) {
  localStorage.setItem(key, JSON.stringify(cartState.products));
}
