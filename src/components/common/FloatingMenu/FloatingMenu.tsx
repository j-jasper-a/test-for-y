import { ReactNode, HTMLAttributes } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const FloatingMenu = ({ className, children, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className={`${className + " "}absolute bottom-0 right-0 z-10 translate-y-[calc(100%+1rem)] rounded-[2rem]`}
    >
      {children}
    </div>
  );
};

export default FloatingMenu;
