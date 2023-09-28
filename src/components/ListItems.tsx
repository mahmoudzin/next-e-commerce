import Image from "next/image";
import React from "react";
import Item from "./Item";

const ListItems = ({ items }: { items: any }) => {
  return (
    <ul className="w-full flex flex-wrap row justify-center">
      {items.map((item: any) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ListItems;
