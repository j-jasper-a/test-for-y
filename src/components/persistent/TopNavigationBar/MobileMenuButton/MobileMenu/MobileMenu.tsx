"use client";

import GoBackButton from "@/components/common/GoBackButton/GoBackButton";
import { useMainContext } from "@/providers/Providers";
import { useLocale } from "next-intl";
import { HiChevronRight as RightIcon } from "react-icons/hi2";
import { MdOutlineShoppingCart as CartIcon } from "react-icons/md";

export default function MobileMenu() {
  const locale = useLocale();
  const { setMobileMenuOpen, mobileMenuOpen, setMobileLanguageMenuOpen } =
    useMainContext();

  return (
    <div
      className={`${mobileMenuOpen ? "left-0" : "-left-full"} absolute top-0 z-10 flex h-screen w-screen flex-col gap-6 bg-background-1 px-4 py-6 transition-all`}
    >
      <GoBackButton onClick={() => setMobileMenuOpen(false)} />
      <p className="text-xl font-medium">Hello,</p>

      <div className="flex flex-col gap-2">
        <p className="py-4 text-xl font-medium">Shopping</p>
        <div className="flex items-center justify-between py-1 hover:text-accent">
          <div className="flex items-center gap-2">
            <CartIcon className="h-6 w-6" />
            <span className="text-sm">Shopping Cart</span>
          </div>
          <RightIcon className="h-5 w-5" />
        </div>
      </div>

      <hr className="border-border" />

      <div className="flex flex-col gap-2">
        <p className="py-4 text-xl font-medium">Your account</p>
        <div className="flex items-center justify-between py-1 hover:text-accent">
          <span className="text-sm">Sign in</span>
          <RightIcon className="h-5 w-5" />
        </div>
        <div className="flex items-center justify-between py-1 hover:text-accent">
          <span className="text-sm">Sign up</span>
          <RightIcon className="h-5 w-5" />
        </div>
      </div>

      <hr className="border-border" />

      <div className="flex flex-col gap-2">
        <p className="py-4 text-xl font-medium">Support</p>
        <div className="flex items-center justify-between py-1 hover:text-accent">
          <span className="text-sm">{`Message to Yuta(The founder)`}</span>
          <RightIcon className="h-5 w-5" />
        </div>
      </div>

      <hr className="border-border" />

      <div className="flex flex-col gap-2">
        <p className="py-4 text-xl font-medium">Language</p>
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
