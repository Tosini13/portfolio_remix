import React from "react";
import { twMerge } from "tailwind-merge";

const link = "whitespace-nowrap first-letter:uppercase";
const after =
  "after:block after:w-0 after:h-px after:block after:bg-text-primary after:transition-all after:duration-300 after:ease-in-out hover:after:w-full";

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
    <a
      className={className}
      href={href}
      style={{ fontWeight: 400 }}
      onClick={onClick}
    >
      {title}
    </a>
  );
};

export default Link;

// .link::after{
//     content: '';
//     display: block;
//     width: 0px;
//     height: 1px;
//     background-color: black;
//     transition: width 0.3s ease-in-out;
// }

// .link:hover::after{
//     width: 100%;
// }

// @media (hover: none) {
//     .link::after{
//         width: 100%;
//     }

// }
