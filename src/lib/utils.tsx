import { ClassNameValue, twMerge } from "tailwind-merge";

type cnProps = {
  newClass: ClassNameValue;
  initialClass: ClassNameValue;
};

export function cn({ newClass, initialClass }: cnProps) {
  return twMerge(newClass, initialClass);
}
