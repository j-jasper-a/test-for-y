"use client";

import { Categories, ProductType, SubCategories } from "@/schemas/product";
import { useLocale } from "next-intl";
import Link from "next/link";
import {
  TbStarFilled as FilledStarIcon,
  TbStarHalfFilled as HalfStarIcon,
  TbStar as EmptyStarIcon,
} from "react-icons/tb";

type Props = {
  product: ProductType;
  info?: boolean;
};

const ProductCard = ({ product, info = true }: Props) => {
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
    <Link
      href={`/marketplace/products/${product.id}`}
      className="flex flex-col gap-2 text-sm"
    >
      <div className="flex aspect-square flex-col items-center justify-center rounded-xl bg-background-3 text-base">
        {info && (
          <div>
            <p>{category}</p>
            <p>{`>${subcategory}`}</p>
          </div>
        )}
      </div>
      {info && (
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-text-gray">{creator}</p>
          <div className="flex items-center gap-1">
            {[...Array(Math.floor(ratings))].map((_, index) => (
              <FilledStarIcon key={index} />
            ))}
            {ratings % 1 !== 0 && <HalfStarIcon />}
            {[...Array(5 - Math.ceil(ratings))].map((_, index) => (
              <EmptyStarIcon key={index} />
            ))}
            {ratings.toFixed(1)}
          </div>
          <p className="font-bold">{price}</p>
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
