"use client";
import { useContextApp } from "@/app/store/GlobalContext";
import Image from "next/image";
import { useState } from "react";
import { BsArrowUpSquareFill, BsArrowDownSquareFill } from "react-icons/bs";
export default function CartItem({ item }: { item: any }) {
  const [number, setNumber] = useState(1);
  const { removeItemFromCart } = useContextApp();
  return (
    <div className="flex justify-between items-center mb-3 border p-1 relative">
      <button
        onClick={() => removeItemFromCart(item.id)}
        className="font-bold text-xl block absolute left-0 top-0 text-white bg-primary py-1 px-2"
      >
        x
      </button>
      <Image
        src={item.thumbnail}
        alt={item.title}
        width={200}
        height={150}
        loading="lazy"
        className="rounded-3 mr-4 inline-block h-[70px] w-[70px] object-cover"
      ></Image>
      <div>
        <p className="text-sm uppercase font-bold">{item.title}</p>
        <p>
          Price: {number} x {item.price}: {item.price * number}
        </p>
      </div>

      <div>
        <button
          className="block mb-3"
          onClick={() => {
            console.log(number);

            setNumber(number !== item.stock ? number + 1 : number);
          }}
        >
          <BsArrowUpSquareFill />
        </button>
        <button
          className="block"
          onClick={() => setNumber(number !== 1 ? number - 1 : number)}
        >
          <BsArrowDownSquareFill />
        </button>
      </div>
    </div>
  );
}
