"use client";
import { useContextApp } from "@/app/store/GlobalContext";
import Image from "next/image";
import React from "react";

const Item = ({ item }: { item: any }) => {
  const { addItemToCart, token } = useContextApp();
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 max-w-sm mb-4">
      <div className="flex flex-col justify-between bg-white border border-gray-200 rounded-lg shadow min-h-full text-center py-2 px-1">
        <div className="py-2 mb-3">
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={200}
            height={150}
            loading="lazy"
            className="rounded-3 inline-block min-h-[150px] max-h-[200px] object-cover "
          ></Image>
        </div>

        <div>
          <a href="#">
            <h5>{item.title}</h5>
            <p className="text-xl font-semibold tracking-tight text-gray-900 ">
              {item.description}
            </p>
          </a>
        </div>
        <div className="px-5 pb-5">
          <div className="flex items-center mt-2.5 mb-5">
            <span className="block text-xl text-yellow-300">&#9733;</span>

            <span className="bg-rose-100 text-primary text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">
              {item.rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 ">$599</span>
            <button
              onClick={() => {
                if (token) addItemToCart(item);
                else alert("you have to login first to add to cart");
              }}
              className="text-white bg-primary hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
