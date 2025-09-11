import { cn } from "../lib/utils";

type InputTypeProps = {
  className: string;
};

export default function Input({ className, ...props }: InputTypeProps) {
  return (
    <input
      className={cn(className, "w-60 py-2 rounded-2xl border px-3")}
      {...props}
    />
  );
}
