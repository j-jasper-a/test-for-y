"use client";

import { faqs } from "../../../../../data/faqs";
import Accordion from "@/components/common/Accordion/Accordion";
import { useLocale, useTranslations } from "next-intl";

export default function ProductFaqs() {
  const locale = useLocale();
  const t = useTranslations("pages.product");

  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl font-bold">{t("titles.faqs")}</p>
      <div className="flex flex-col gap-4">
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            title={locale === "ja" ? faq.question.ja : faq.question.en}
          >
            {locale === "ja" ? faq.answer.ja : faq.answer.en}
          </Accordion>
        ))}
      </div>
    </div>
  );
}
