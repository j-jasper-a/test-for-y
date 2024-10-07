"use client";

import { useTranslations } from "next-intl";

const ListYourCreation = () => {
  const t = useTranslations("persistent.topNavigationBar.links");

  return (
    <button
      onClick={() => {}}
      className="whitespace-nowrap text-sm transition-all hover:text-accent"
    >
      {t("listYourCreation")}
    </button>
  );
};

export default ListYourCreation;
