import React from "react";
import { twMerge } from "tailwind-merge";
import LOGO_ICON from "../../public/img/logos/logo.svg";
import SECONDARY_LOGO from "../../public/img/logos/secondary.logo.svg";

const classNames = {
  title: {
    theme: "ml-1 font-semibold text-primary text-sm  whitespace-nowrap",
    secondary: "text-secondary",
  },
};

type LogoProps = {
  secondary?: boolean;
};

const Logo: React.FC<LogoProps> = ({ secondary }) => {
  const className = React.useMemo(
    () =>
      twMerge(
        classNames.title.theme,
        secondary ? classNames.title.secondary : ""
      ),
    [secondary]
  );
  return (
    <div data-testId="logo" className="flex items-center">
      <img src={secondary ? SECONDARY_LOGO : LOGO_ICON} alt="logo" />
      <span className={className}>Jakub Bartosik</span>
    </div>
  );
};

export default Logo;
