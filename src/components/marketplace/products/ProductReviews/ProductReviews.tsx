"use client";

import { reviews } from "../../../../../data/reviews";
import ReviewCard from "./ReviewCard/ReviewCard";
import { useTranslations } from "next-intl";

export default function ProductReviews() {
  const t = useTranslations("pages.product");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl font-bold">{t("titles.reviews")}</p>
      <div className="grid grid-cols-2 gap-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
