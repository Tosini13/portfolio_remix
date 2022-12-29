import React from "react";
import { twMerge } from "tailwind-merge";

const themeClassName =
  "mx-6 lg:mx-auto pt-section-mobile md:pt-section-desktop";

type SectionProps = React.HTMLAttributes<HTMLElement>;

const Section: React.FC<SectionProps> = ({
  className: customClassName,
  ...props
}) => {
  const className = React.useMemo(
    () => twMerge(themeClassName, customClassName),
    [customClassName]
  );

  return <section data-test-id="section" className={className} {...props} />;
};

export default Section;
