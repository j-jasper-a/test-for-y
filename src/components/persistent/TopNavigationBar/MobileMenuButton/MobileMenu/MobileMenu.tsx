"use client";

import GoBackButton from "@/components/common/GoBackButton/GoBackButton";
import { useMainContext } from "@/providers/Providers";
import { useLocale, useTranslations } from "next-intl";
import { HiChevronRight as RightIcon } from "react-icons/hi2";
import { MdOutlineShoppingCart as CartIcon } from "react-icons/md";

export default function MobileMenu() {
  const t = useTranslations("persistent.topNavigationBar");
  const locale = useLocale();
  const { setMobileMenuOpen, mobileMenuOpen, setMobileLanguageMenuOpen } =
    useMainContext();

  return (
    <div
      className={`${mobileMenuOpen ? "left-0" : "-left-full"} absolute top-0 z-10 flex h-screen w-screen flex-col gap-6 bg-background-1 px-4 py-6 transition-all`}
    >
      <GoBackButton onClick={() => setMobileMenuOpen(false)} />
      <p className="text-xl font-medium">{`${t("messages.hello")},`}</p>

      <div className="flex flex-col gap-2">
        <p className="py-4 text-xl font-medium">{t("labels.shopping")}</p>
        <div className="flex items-center justify-between py-1 hover:text-accent">
          <div className="flex items-center gap-2">
            <CartIcon className="h-6 w-6" />
            <span className="text-sm">{t("links.shoppingCart")}</span>
          </div>
          <RightIcon className="h-5 w-5" />
        </div>
      </div>

      <hr className="border-border" />

      <div className="flex flex-col gap-2">
        <p className="py-4 text-xl font-medium">{t("labels.yourAccount")}</p>
        <div className="flex items-center justify-between py-1 hover:text-accent">
          <span className="text-sm">{t("links.signIn")}</span>
          <RightIcon className="h-5 w-5" />
        </div>
        <div className="flex items-center justify-between py-1 hover:text-accent">
          <span className="text-sm">{t("links.signUp")}</span>
          <RightIcon className="h-5 w-5" />
        </div>
      </div>

      <hr className="border-border" />

      <div className="flex flex-col gap-2">
        <p className="py-4 text-xl font-medium">{t("labels.support")}</p>
        <div className="flex items-center justify-between py-1 hover:text-accent">
          <span className="text-sm">{t("links.messageToYuta")}</span>
          <RightIcon className="h-5 w-5" />
        </div>
      </div>

      <hr className="border-border" />

      <div className="flex flex-col gap-2">
        <p className="py-4 text-xl font-medium">{t("labels.language")}</p>
        <button
          onClick={() => setMobileLanguageMenuOpen(true)}
          className="flex items-center justify-between py-1 hover:text-accent"
        >
          <span className="text-sm">
            {locale === "ja" ? "Japanese" : "English(US)"}
          </span>
          <RightIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
