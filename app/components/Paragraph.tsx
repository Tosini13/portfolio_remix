import React from "react";
import { twMerge } from "tailwind-merge";

const themeClassName = "leading-8 font-light";

const Paragraph: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className: customClassName,
  ...props
}) => {
  const className = React.useMemo(
    () => twMerge(themeClassName, customClassName),
    [customClassName]
  );

  return <p data-testId="paragraph" {...props} className={className} />;
};

export default Paragraph;
