import { cn } from "../lib/utils";

type InputTypeProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  type: "text" | "number" | "email" | "password";
};

export default function Input({ className, type, ...rest }: InputTypeProps) {
  return (
    <input
      {...rest}
      className={cn(className, "w-60 py-2 rounded-2xl border px-3")}
      type={type}
    />
  );
}
