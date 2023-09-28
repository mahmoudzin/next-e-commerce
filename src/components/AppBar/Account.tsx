"use client";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContextApp } from "@/app/store/GlobalContext";
export default function Account() {
  const { setOpenCart, cartItems, token, loading } = useContextApp();
  return (
    <div>
      {loading ? (
        <>loading....</>
      ) : !token ? (
        <>
          <Link href="/account">Login</Link>
        </>
      ) : (
        <div
          className="cursor-pointer relative"
          onClick={() => setOpenCart(true)}
        >
          {cartItems.length !== 0 && (
            <span className="flex justify-center items-center absolute bg-primary rounded-full w-5 h-5 top-[-10px] right-0">
              {cartItems.length}
            </span>
          )}
          <AiOutlineShoppingCart className="text-3xl" />
        </div>
      )}
    </div>
  );
}
