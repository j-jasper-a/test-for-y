"use client";

import FloatingMenu from "@/components/common/FloatingMenu/FloatingMenu";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { HiOutlineGlobeAlt as GlobeIcon } from "react-icons/hi";

const LocaleButton = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split("/");
    const currentLocale = segments[1];
    const newPath = `/${newLocale}${pathname.slice(currentLocale.length + 1)}`;
    const queryString = searchParams.toString();
    router.replace(`${newPath}${queryString ? `?${queryString}` : ""}`);
    router.refresh();
  };

  return (
    <button onClick={() => setMenuOpen((prev) => !prev)} className="relative">
      <GlobeIcon size={16} />
      {menuOpen && (
        <FloatingMenu>
          <ul className="p-2 text-xs font-medium">
            <li>
              <button
                onClick={() => handleLocaleChange("en")}
                className="flex h-7 w-48 items-center gap-2 rounded-lg p-2 hover:bg-background-3"
              >
                <Image
                  src="/assets/flags/US.svg"
                  alt="logo"
                  width={24}
                  height={24}
                  className="h-3 w-auto"
                />
                <p>English(US)</p>
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLocaleChange("ja")}
                className="flex h-7 w-48 items-center gap-2 rounded-lg p-2 hover:bg-background-3"
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
            </li>
          </ul>
        </FloatingMenu>
      )}
    </button>
  );
};

export default LocaleButton;
