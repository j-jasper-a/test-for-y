import ActionBar from "./ActionBar/ActionBar";
import BrandBar from "./BrandBar/BrandBar";
import MobileMenuButton from "./MobileMenuButton/MobileMenuButton";
import SearchBar from "./SearchBar/SearchBar";

const TopNavigationBar = () => {
  return (
    <div className="sticky left-0 top-0 z-10 border-background-3 bg-background-1 sm:border-b-[1px]">
      <div className="mx-auto max-w-screen-lg px-4 py-4 sm:px-10 md:px-20">
        <div className="flex w-full items-center justify-between gap-4 sm:hidden">
          <SearchBar />
          <MobileMenuButton />
        </div>
        <div className="hidden flex-col items-center justify-between gap-8 sm:flex md:hidden">
          <div className="flex w-full items-center justify-between">
            <BrandBar />
            <ActionBar />
          </div>
          <SearchBar />
        </div>
        <div className="hidden w-full items-center justify-between md:flex">
          <BrandBar />
          <SearchBar />
          <ActionBar />
        </div>
      </div>
    </div>
  );
};

export default TopNavigationBar;
