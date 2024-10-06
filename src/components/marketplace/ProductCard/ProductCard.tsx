"use client";

import { Categories, ProductType, SubCategories } from "@/schemas/product";
import { useLocale } from "next-intl";

type Props = {
  product: ProductType;
};

const ProductCard = ({ product }: Props) => {
  const locale = useLocale();
  const EXCHANGE_RATE = 148.75;

  const name = product.name;
  const creator = product.creator;
  const category =
    locale === "ja"
      ? Categories[product.category].ja
      : Categories[product.category].en;
  const subcategory =
    locale === "ja"
      ? SubCategories[product.subcategory].ja
      : SubCategories[product.subcategory].en;

  const price =
    locale === "ja"
      ? new Intl.NumberFormat("ja-JP", {
          style: "currency",
          currency: "JPY",
        }).format(product.price * EXCHANGE_RATE)
      : new Intl.NumberFormat(locale, {
          style: "currency",
          currency: "USD",
        }).format(product.price);

  const ratings = product.ratings;

  return (
    <div className="flex flex-col gap-2 text-sm">
      <div className="flex aspect-square flex-col items-center justify-center rounded-xl bg-background-3 text-base">
        <div>
          <p>{category}</p>
          <p>{`>${subcategory}`}</p>
        </div>
      </div>
      <div>
        <p className="font-bold">{name}</p>
        <p>{creator}</p>
        <p>{ratings}</p>
        <p className="font-bold">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
