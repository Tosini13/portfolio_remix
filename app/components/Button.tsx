import * as React from "react";
import { twMerge } from "tailwind-merge";

const themeClassName =
  "rounded-full bg-primary text-secondary px-8 py-3 hover:bg-primary-light transition-all duration-150";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  className: customClassName,
  ...props
}) => {
  const className = React.useMemo(
    () => twMerge(themeClassName, customClassName),
    [customClassName]
  );
  return <button data-test-id="button" className={className} {...props} />;
};

export default Button;
