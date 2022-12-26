import React from "react";
import { twMerge } from "tailwind-merge";

const themeClassName =
  "relative w-fit text-5xl font-medium pb-3 after:absolute after:bottom-0 after:left-0 after:w-2/3 after:border-b-4 after:border-extra";

const Heading: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className: customClassName,
  ...props
}) => {
  const className = React.useMemo(
    () => twMerge(themeClassName, customClassName),
    [customClassName]
  );

  return <h1 data-test-id="heading" className={className} {...props} />;
};

export default Heading;
