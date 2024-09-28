import * as React from "react";
import "./styles/input.css";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return (
      <div className="form-control">
        <input type={type} className={"input input-alt"} ref={ref} {...props} />
        <span className="input-border input-border-alt"></span>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
