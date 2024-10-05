import ListYourCreation from "./ListYourCreation/ListYourCreation";
import LocaleButton from "./LocaleButton/LocaleButton";
import SearchBar from "./SearchBar/SearchBar";
import Image from "next/image";
import Link from "next/link";

const TopNavigationBar = () => {
  return (
    <div className="mx-auto flex h-[5rem] max-w-screen-lg items-center justify-between border-b-[1px] border-orange-600 py-4">
      <Link href="/" className="h-8">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={50}
          height={50}
          className="h-full w-auto"
        />
      </Link>
      <SearchBar />
      {/* Right side */}
      <div className="flex items-center gap-6">
        <ListYourCreation />
        <LocaleButton />
      </div>
    </div>
  );
};

export default TopNavigationBar;
