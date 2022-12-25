import React from "react";
import { twMerge } from "tailwind-merge";

const link = "whitespace-nowrap first-letter:uppercase font-light";
const after =
  "after:block after:w-0 after:h-px after:block after:bg-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full";

const Link: React.FC<React.LinkHTMLAttributes<HTMLAnchorElement>> = ({
  title,
  href,
  onClick,
  className: customClassName,
}) => {
  const className = React.useMemo(
    () => twMerge(link, after, customClassName),
    [customClassName]
  );
  return (
    <a className={className} href={href} onClick={onClick}>
      {title}
    </a>
  );
};

export default Link;
