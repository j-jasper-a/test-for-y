"use client";

import ProductCard from "@/components/marketplace/ProductCard/ProductCard";
import getProducts from "@/utils/getProducts";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

export default function Marketplace() {
  // Get the query parameters from the URL using Next.js's `useSearchParams`
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const currentSubcategory = searchParams.get("subcategory");
  const currentPlatform = searchParams.get("platform");

  // Use `useQuery` to fetch products, with query parameters passed to `getProducts`
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [
      "products",
      currentCategory,
      currentSubcategory,
      currentPlatform,
    ], // Dependency array to refetch on param change
    queryFn: () =>
      getProducts({
        category: currentCategory || undefined,
        subcategory: currentSubcategory || undefined,
        platform: currentPlatform || undefined,
      }),
  });

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Failed to load products</div>;
  }

  return (
    <div className="mx-auto max-w-screen-lg px-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Marketplace</h1>
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
