"use client";

import { useTranslations } from "next-intl";

const ListYourCreation = () => {
  const t = useTranslations("persistent.topNavigationBar.links");

  return (
    <button onClick={() => {}} className="text-sm">
      {t("listYourCreation")}
    </button>
  );
};

export default ListYourCreation;
