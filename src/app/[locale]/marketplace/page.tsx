"use client";

import Loading from "@/components/common/Loading/Loading";
import ProductCard from "@/components/marketplace/ProductCard/ProductCard";
import { useMainContext } from "@/providers/Providers";
import {
  Categories,
  Platforms,
  ProductType,
  SubCategories,
} from "@/schemas/product";
import getProducts from "@/utils/getProducts";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Marketplace() {
  const { searchQuery } = useMainContext();
  const locale = useLocale();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get(
    "category",
  ) as ProductType["category"];
  const currentSubcategory = searchParams.get(
    "subcategory",
  ) as ProductType["subcategory"];
  const currentPlatform = searchParams.get(
    "platform",
  ) as ProductType["platform"][number];
  const minPrice = searchParams.get("minPrice")
    ? Number(searchParams.get("minPrice"))
    : undefined;
  const maxPrice = searchParams.get("maxPrice")
    ? Number(searchParams.get("maxPrice"))
    : undefined;

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
    ],
    queryFn: () =>
      getProducts({
        category: currentCategory || undefined,
        subcategory: currentSubcategory || undefined,
        platform: currentPlatform || undefined,
      }),
  });

  const filteredProducts = products?.filter((product) => {
    const matchesSearchQuery = [
      product.name,
      product.creator,
      product.category,
      product.subcategory,
      product.platform,
    ]
      .join(" ")
      .toLowerCase()
      .includes(searchQuery.toLowerCase().trim().replace(/\s/g, " "));

    const withinPriceRange =
      (!minPrice || product.price >= minPrice) &&
      (!maxPrice || product.price <= maxPrice);

    return matchesSearchQuery && withinPriceRange;
  });

  if (isLoading) {
    return <Loading />;
  }

  if (filteredProducts?.length === 0) {
    return (
      <div className="flex h-[75vh] w-full items-center justify-center">
        <div className="font-bold text-text-gray">Nothing here.</div>
      </div>
    );
  }

  if (isError) {
    return <div>Failed to load products</div>;
  }

  const breadcrumbs = [
    { name: locale === "ja" ? "すべて" : "All", href: "/marketplace" },
  ];

  if (currentCategory) {
    breadcrumbs.push({
      name:
        locale === "ja"
          ? Categories[currentCategory].ja
          : Categories[currentCategory].en,
      href: `/marketplace?category=${currentCategory}`,
    });
  }

  if (currentSubcategory) {
    breadcrumbs.push({
      name:
        locale === "ja"
          ? SubCategories[currentSubcategory].ja
          : SubCategories[currentSubcategory].en,
      href: `/marketplace?category=${currentCategory}&subcategory=${currentSubcategory}`,
    });
  }

  if (currentPlatform) {
    breadcrumbs.push({
      name:
        locale === "ja"
          ? Platforms[currentPlatform].ja
          : Platforms[currentPlatform].en,
      href: `/marketplace?category=${currentCategory}&subcategory=${currentSubcategory}&platform=${currentPlatform}`,
    });
  }

  return (
    <div className="relative mx-auto flex max-w-screen-lg flex-col gap-6 px-4 py-4 sm:px-10 sm:py-7 md:px-20">
      <nav className="text-base font-bold sm:text-[2rem]">
        <ul className="flex">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index} className="inline-flex items-center">
              <Link href={breadcrumb.href} className="hover:text-accent">
                {breadcrumb.name}
              </Link>
              {index < breadcrumbs.length - 1 && (
                <span className="px-2 font-normal">{`>`}</span>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="mb-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
          {filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
