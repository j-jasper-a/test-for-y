import { specifications } from "../../../../../data/specifications";
import { useTranslations } from "next-intl";

type ProductSpecificationsProps = {
  locale: string;
};

export default function ProductSpecifications({
  locale,
}: ProductSpecificationsProps) {
  const t = useTranslations("pages.product");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl font-bold sm:text-right">
        {t("titles.specifications")}
      </p>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
        {specifications.map((spec) => (
          <div key={spec.label.en} className="text-xs sm:text-right">
            <p className="font-bold">
              {locale === "ja" ? spec.label.ja : spec.label.en}
            </p>
            <p className="max-w-[38ch] text-text-gray">
              {locale === "ja" ? spec.description.ja : spec.description.en}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
