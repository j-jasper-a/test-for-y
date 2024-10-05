"use client";

import FloatingMenu from "@/components/common/FloatingMenu/FloatingMenu";
import { useLocale } from "next-intl";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineGlobeAlt as GlobeIcon } from "react-icons/hi";

const LocaleButton = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLocaleChange = (newLocale: string) => {
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
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
