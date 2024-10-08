"use client";

import FilterMenu from "./FilterMenu/FilterMenu";
import { useMainContext } from "@/providers/Providers";
import { HiOutlineAdjustmentsHorizontal as FilterIcon } from "react-icons/hi2";

export default function FilterButton() {
  const { setFilterMenuOpen, filterMenuOpen } = useMainContext();

  return (
    <div className="relative hidden sm:block">
      <button
        onClick={() => setFilterMenuOpen((prev) => !prev)}
        className="rounded-full border-[1px] border-text-white p-2 text-text-white transition-all hover:border-accent hover:text-accent"
      >
        <FilterIcon className="h-6 w-6" />
      </button>
      {filterMenuOpen && <FilterMenu />}
    </div>
  );
}
