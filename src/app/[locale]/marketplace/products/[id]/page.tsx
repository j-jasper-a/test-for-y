"use client";

import Loading from "@/components/common/Loading/Loading";
import ProductBreadcrumbs from "@/components/marketplace/products/ProductBreadcrumbs/ProductBreadcrumbs";
import ProductFaqs from "@/components/marketplace/products/ProductFaqs/ProductFaqs";
import ProductInfo from "@/components/marketplace/products/ProductInfo/ProductInfo";
import ProductPreview from "@/components/marketplace/products/ProductPreview/ProductPreview";
import ProductReviews from "@/components/marketplace/products/ProductReviews/ProductReviews";
import ProductSpecifications from "@/components/marketplace/products/ProductSpecifications/ProductSpecifications";
import SimilarProducts from "@/components/marketplace/products/SimilarProducts/SimilarProducts";
import { getProductById } from "@/utils/getProductById";
import getProducts from "@/utils/getProducts";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

type PageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: PageProps) {
  const locale = useLocale();
  const productId = params.id;
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProductById(productId),
  });

  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (isLoading) {
    return <Loading />;
  }

  if (!product) {
    return <div>There is no product with that ID.</div>;
  }

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col gap-4 px-4 py-4 sm:gap-8 sm:px-10 md:px-20">
      <ProductBreadcrumbs locale={locale} product={product} />
      <div className="flex h-full flex-col justify-between gap-4 sm:flex-row">
        <ProductPreview product={product} />
        <ProductInfo product={product} locale={locale} />
        <ProductSpecifications locale={locale} />
      </div>
      <SimilarProducts products={products} />
      <hr className="border-border sm:my-8" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16">
        <ProductFaqs />
        <ProductReviews />
      </div>
    </div>
  );
}
