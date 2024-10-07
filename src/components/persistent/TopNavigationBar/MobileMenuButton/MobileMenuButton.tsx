import { HiBars3 as MenuIcon } from "react-icons/hi2";

export default function MobileMenuButton() {
  return (
    <button className="rounded-full border-[1px] border-text-white p-2 text-text-white transition-all hover:border-accent hover:text-accent">
      <MenuIcon className="h-6 w-6" />
    </button>
  );
}
