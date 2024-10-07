"use client";

import { HiChevronLeft as LeftIcon } from "react-icons/hi";

type GoBackButtonProps = {
  onClick?: () => void;
};

export default function GoBackButton({ onClick }: GoBackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-1 text-sm transition-all"
    >
      <LeftIcon className="h-5 w-5 group-hover:text-accent" />
      <span className="group-hover:text-accent">Go back</span>
    </button>
  );
}
