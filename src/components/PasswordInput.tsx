import { useState } from "react";
import { cn } from "../lib/utils";

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
};

export default function PasswordInput({
  className,
  placeholder = "Password",
  ...rest
}: PasswordInputProps) {
  const [passwordVisibility, setpasswordVisibility] = useState(false);

  const togglePassword = () => {
    setpasswordVisibility(!passwordVisibility);
  };
  return (
    <div
      className={cn(
        className,
        "flex w-60 items-center space-x-2 border rounded-2xl px-1"
      )}
    >
      <input
        className="w-full py-2 px-3 rounded-2xl outline-none"
        type={passwordVisibility ? "text" : "password"}
        placeholder={placeholder}
        {...rest}
      />
      <span className="cursor-pointer" onClick={togglePassword}>
        x
      </span>
    </div>
  );
}
