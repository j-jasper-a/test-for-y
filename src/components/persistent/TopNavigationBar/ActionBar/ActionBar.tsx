import CartButton from "./CartButton/CartButton";
import ListYourCreation from "./ListYourCreation/ListYourCreation";
import LocaleButton from "./LocaleButton/LocaleButton";
import UserButton from "./UserButton/UserButton";

export default function ActionBar() {
  return (
    <div className="flex items-center gap-6">
      <ListYourCreation />
      <LocaleButton />
      <UserButton />
      <CartButton />
    </div>
  );
}
