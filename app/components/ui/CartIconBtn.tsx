import { AiOutlineShoppingCart } from "react-icons/ai";
export default function CartIconBtn() {
  // todo: get the amount/length of item from cart context and display
  return (
    <div className="relative">
      <div className="absolute bottom-0 -right-[5px] flex justify-center items-center bg-green-500 h-[18px] w-[18px] rounded-full">
        0
      </div>
      <AiOutlineShoppingCart className="text-[2rem]" />
    </div>
  );
}
