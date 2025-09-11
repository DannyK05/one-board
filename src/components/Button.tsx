import { ReactNode } from "react";
import { cn } from "../lib/utils";

type ButtonTypeProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  className: string;
};

export default function Button({
  className,
  children,
  ...rest
}: ButtonTypeProps) {
  return (
    <button
      {...rest}
      className={cn(
        className,
        "bg-[#A3D95D] shadow-md text-white py-4 w-60 font-semibold rounded-2xl"
      )}
    >
      {children}
    </button>
  );
}
