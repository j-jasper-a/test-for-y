"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { FaLanguage as SwitchIcon } from "react-icons/fa6";

const LocaleSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button onClick={() => handleLocaleChange(locale === "en" ? "ja" : "en")}>
      <div className="flex items-center gap-2 rounded-full bg-white p-2 text-xs text-black">
        <SwitchIcon />
        <span>{`Switch to ${locale === "en" ? "Japanese" : "English"}`}</span>
      </div>
    </button>
  );
};

export default LocaleSwitcher;
