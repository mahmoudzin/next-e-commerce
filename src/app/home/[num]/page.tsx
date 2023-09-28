import ListItems from "@/components/ListItems";
import { notFound } from "next/navigation";
import Link from "next/link";

const getAllProduct = async (num: string) => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=10&skip=${num}`
  );
  if (!res.ok) return notFound();
  return await res.json();
};

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products/");
  const { total } = await res.json();

  return Array.from({ length: total / 10 }, (_, i) => ({
    num: String(i * 10),
  }));
}

export default async function Home({ params }: { params: { num: string } }) {
  const { num } = params;

  const skape = Number(num);
  const { total, products } = await getAllProduct(num);

  return (
    <div>
      {<ListItems items={products} />}
      <div className="flex w-full justify-between items-center mb-5">
        <ControllerButton
          dir="prev"
          skape={String(skape < total ? skape - 10 : skape)}
          dis={
            skape < 10
              ? "bg-gray-300 cursor-not-allowed pointer-events-none"
              : ""
          }
        />
        <ControllerButton
          dir="next"
          skape={String(skape >= 0 ? skape + 10 : skape)}
          dis={
            skape >= total - 10
              ? "bg-gray-300 cursor-not-allowed pointer-events-none"
              : ""
          }
        />
      </div>
    </div>
  );
}

function ControllerButton({
  dir,
  skape,
  dis,
}: {
  dir: "prev" | "next";
  skape: string;
  dis: string;
}) {
  return (
    <Link
      className={`${dis}
      capitalize bg-primary transition hover:bg-rose-700 px-4 py-1 text-lg text-white rounded`}
      href={`/home/${skape}`}
    >
      {dir}
    </Link>
  );
}
