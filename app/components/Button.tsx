import * as React from "react";
import { twMerge } from "tailwind-merge";

const themeClassName =
  "rounded-full bg-primary font-semibold tracking-wider text-secondary px-8 py-4 hover:bg-primary-light transition-all duration-150 whitespace-nowrap";

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
  return <button data-testId="button" className={className} {...props} />;
};

export default Button;

type ButtonLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
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
  return <a data-testId="button" className={className} {...props} />;
};

type ButtonLinkIconProps = ButtonLinkProps;
export const ButtonIconLink: React.FC<ButtonLinkIconProps> = ({
  className: customClassName,
  ...props
}) => {
  const className = React.useMemo(
    () => twMerge("px-4", customClassName),
    [customClassName]
  );

  return <ButtonLink className={className} {...props} />;
};
