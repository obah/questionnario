import * as React from "react";
import { cn } from "../../../lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "w-[400px] rounded-lg border-2 border-solid border-[#2B3040] bg-[#222630] px-4 py-3 text-white outline-none transition-colors duration-100 focus:border-[#009b49]",
          className,
        )}
        type={type}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
