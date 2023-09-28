import ListItems from "@/components/ListItems";
import { notFound } from "next/navigation";
const getProductsByCategory = async (category: string) => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}`
  );
  if (!res.ok) return undefined;
  return await res.json();
};

export async function generateStaticParams() {
  const res = await fetch("https://dummyjson.com/products/categories");
  const data = await res.json();

  return data.map((category: string) => ({
    category,
  }));
}

export default async function ({ params }: { params: { category: string } }) {
  const { category } = params;
  const { products } = await getProductsByCategory(category);

  if (!products || products.length === 0) return notFound();
  return <div>{<ListItems items={products} />}</div>;
}
