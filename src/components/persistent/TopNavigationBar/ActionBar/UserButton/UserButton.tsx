"use client";

import FloatingMenu from "@/components/common/FloatingMenu/FloatingMenu";
import { useMainContext } from "@/providers/Providers";
import { HiUserCircle as UserIcon, HiBars3 as MenuIcon } from "react-icons/hi2";

export default function UserButton() {
  const { userMenuOpen, setUserMenuOpen, closeMenus } = useMainContext();

  return (
    <div className="relative">
      <button
        onClick={() => {
          closeMenus({ except: "user" });
          setUserMenuOpen((prev) => !prev);
        }}
        className="flex items-center gap-2 rounded-full border-[1px] border-text-white p-3 transition-all hover:border-accent hover:text-accent"
      >
        <MenuIcon className="h-5 w-5" />
        <UserIcon className="h-6 w-6" />
      </button>
      {userMenuOpen && (
        <FloatingMenu className="rounded-xl bg-background-2 text-sm text-text-white shadow-sm shadow-background-1">
          <ul className="flex flex-col gap-1 p-2">
            <li className="cursor-pointer rounded-xl px-2 py-1 transition-all hover:bg-background-3">
              Sign In
            </li>
            <li className="cursor-pointer rounded-xl px-2 py-1 transition-all hover:bg-background-3">
              Sign Up
            </li>
            <hr className="border-border my-2" />
            <li className="cursor-pointer rounded-xl px-2 py-1 transition-all hover:bg-background-3">
              List your item
            </li>
            <li className="cursor-pointer whitespace-nowrap rounded-xl px-2 py-1 transition-all hover:bg-background-3">
              Message to Yuta(The founder)
            </li>
          </ul>
        </FloatingMenu>
      )}
    </div>
  );
}
