"use client";

import ProductCard from "@/components/marketplace/ProductCard/ProductCard";
import { ProductType } from "@/schemas/product";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Marketplace() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");
  const currentSubcategory = searchParams.get("subcategory");
  const currentPlatform = searchParams.get("platform");
  const [products, setProducts] = useState<ProductType[]>([]);

  return (
    <div className="mx-auto max-w-screen-lg px-10">
      <div>
        <p>Parent category</p>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 md:grid-cols-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
