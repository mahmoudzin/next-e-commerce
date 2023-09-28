"use client";
import { useContextApp } from "@/app/store/GlobalContext";
import CartItem from "./CartItem";
export default function CartList() {
  const { cartItems, openCart, setOpenCart } = useContextApp();

  return (
    <div
      style={{ transition: "right 0.3s ease-in-out" }}
      className={`fixed ${
        openCart ? "right-0 " : "right-[-100%]"
      } top-0 overflow-auto h-screen z-50 w-[350px] bg-white shadow`}
    >
      <button
        onClick={() => setOpenCart(false)}
        className="absolute top-3 left-5 text-gray-200"
      >
        X
      </button>
      {cartItems.length === 0 ? (
        <div className="flex flex-col h-full justify-center px-5 text-center">
          <p>There no Items added to the cart yet {"(- ! - )"}</p>
        </div>
      ) : (
        <div className="mt-8 px-2">
          {cartItems.map((item: any) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
