import ActionBar from "./ActionBar/ActionBar";
import BrandBar from "./BrandBar/BrandBar";
import SearchBar from "./SearchBar/SearchBar";

const TopNavigationBar = () => {
  return (
    <div className="sticky left-0 top-0 border-b-[1px] border-background-3 bg-background-1">
      <div className="mx-auto max-w-screen-lg px-4 py-4 sm:px-10 md:px-20">
        {/* Phones */}
        <div className="flex w-full items-center justify-between sm:hidden">
          <SearchBar />
        </div>
        {/* Tablets */}
        <div className="hidden flex-col items-center gap-8 sm:flex md:hidden">
          <div className="flex w-full items-center justify-between">
            <BrandBar />
            <ActionBar />
          </div>
          <SearchBar />
        </div>
        {/* Desktop/Laptop */}
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
