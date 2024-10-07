"use client";

import GoBackButton from "@/components/common/GoBackButton/GoBackButton";
import { useMainContext } from "@/providers/Providers";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MobileLanguageMenu() {
  const { mobileLanguageMenuOpen, setMobileLanguageMenuOpen } =
    useMainContext();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split("/");
    const currentLocale = segments[1];
    const newPath = `/${newLocale}${pathname.slice(currentLocale.length + 1)}`;
    const queryString = searchParams.toString();
    router.replace(`${newPath}${queryString ? `?${queryString}` : ""}`);
    router.refresh();
  };

  return (
    <div
      className={`${mobileLanguageMenuOpen ? "left-0" : "-left-full"} absolute top-0 z-10 flex h-screen w-screen flex-col gap-6 bg-background-1 px-4 py-6 transition-all`}
    >
      <GoBackButton onClick={() => setMobileLanguageMenuOpen(false)} />

      <div className="flex flex-col">
        <button
          onClick={() => handleLocaleChange("en")}
          className="flex items-center gap-2 py-1 transition-all hover:text-accent"
        >
          <Image
            src="/assets/flags/US.svg"
            alt="logo"
            width={24}
            height={24}
            className="h-3 w-auto"
          />
          <p>{`English(US)`}</p>
        </button>

        <button
          onClick={() => handleLocaleChange("ja")}
          className="flex items-center gap-2 py-1 transition-all hover:text-accent"
        >
          <Image
            src="/assets/flags/JA.svg"
            alt="logo"
            width={24}
            height={24}
            className="h-3 w-auto"
          />
          <p>Japanese</p>
        </button>
      </div>
    </div>
  );
}
