import { ReactNode, HTMLAttributes } from "react";

type Props = {
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const FloatingMenu = ({ children, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className="absolute right-0 top-10 max-w-96 rounded-xl bg-background-2"
    >
      {children}
    </div>
  );
};

export default FloatingMenu;
