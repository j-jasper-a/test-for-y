"use client";

import { MdOutlineShoppingCart as CartIcon } from "react-icons/md";

export default function CartButton() {
  return (
    <div className="relative">
      <button className="flex items-center gap-2 rounded-full border-[1px] border-text-white p-3 transition-all hover:border-accent hover:text-accent">
        <CartIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
