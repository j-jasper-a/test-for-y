"use client";

import { useTranslations } from "next-intl";
import { HiChevronLeft as LeftIcon } from "react-icons/hi";

type GoBackButtonProps = {
  onClick?: () => void;
};

export default function GoBackButton({ onClick }: GoBackButtonProps) {
  const t = useTranslations("global");

  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-1 text-sm transition-all"
    >
      <LeftIcon className="h-5 w-5 group-hover:text-accent" />
      <span className="group-hover:text-accent">{t("buttons.goBack")}</span>
    </button>
  );
}
