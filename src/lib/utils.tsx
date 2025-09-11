import { ClassNameValue, twMerge } from "tailwind-merge";

export function cn(newClass: ClassNameValue, initialClass: ClassNameValue) {
  return twMerge(newClass, initialClass);
}
