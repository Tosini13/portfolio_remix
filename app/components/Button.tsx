import * as React from "react";
import { twMerge } from "tailwind-merge";

const themeClassName =
  "rounded-full bg-primary font-semibold tracking-wider text-secondary px-8 py-3 hover:bg-primary-light transition-all duration-150 whitespace-nowrap";

const secondaryThemeClassName = " bg-extra hover:bg-extra-light";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  secondary?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  className: customClassName,
  secondary,
  ...props
}) => {
  const className = React.useMemo(
    () =>
      twMerge(
        themeClassName,
        secondary ? secondaryThemeClassName : "",
        customClassName
      ),
    [customClassName]
  );
  return <button data-test-id="button" className={className} {...props} />;
};

export default Button;

type ButtonLinkProps = React.LinkHTMLAttributes<HTMLAnchorElement> & {
  secondary?: boolean;
};
export const ButtonLink: React.FC<ButtonLinkProps> = ({
  className: customClassName,
  secondary,
  ...props
}) => {
  const className = React.useMemo(
    () =>
      twMerge(
        themeClassName,
        secondary ? secondaryThemeClassName : "",
        customClassName
      ),
    [customClassName]
  );
  return <a data-test-id="button" className={className} {...props} />;
};
