"use client";

import Link from "next/link";
import { useState } from "react";
import { AiFillShopping } from "react-icons/ai";
export default function SideBar({ data }: { data: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed block top-[300px] left-0 cursor-pointer px-1 py-2 bg-primary rounded-r-lg md:hidden"
      >
        <AiFillShopping />
      </button>
      <aside
        style={{ transition: "left 0.3s ease-in-out" }}
        className={`fixed top-0 ${
          open ? "left-0 " : "left-[-100%]"
        } overflow-auto h-screen z-50 w-[250px] bg-white shadow md:block md:static md:w-1/4`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 text-gray-200 md:hidden"
        >
          X
        </button>

        <h3>Categories:</h3>

        <Link className="px-2 py-1 block" href={`/`}>
          All
        </Link>

        {data.map((item: string) => (
          <Link
            className="capitalize px-2 py-1 block"
            key={item}
            href={`/categories/${item}`}
          >
            {item}
          </Link>
        ))}
      </aside>
    </>
  );
}
