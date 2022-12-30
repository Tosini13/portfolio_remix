import React from "react";
import { twMerge } from "tailwind-merge";
import { TLinkType } from "~/modules/HeaderModule";
import { PHONE_NUMBER } from "~/utils/media";
import { ButtonLink } from "./Button";
import Link from "./Link";
import Logo from "./Logo";

const headerThemeClassName =
  "bg-[rgba(255,255,255,0.96)] transition-shadow duration-300 ease-out";

type HeaderDesktopProps = {
  links: Array<TLinkType>;
};

const HeaderDesktop: React.FC<HeaderDesktopProps> = ({ links }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isOnTop, setIsOnTop] = React.useState(true);

  React.useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      if (position > 30) {
        setIsOnTop(false);
      } else {
        setIsOnTop(true);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClassName = React.useMemo(
    () => twMerge(headerThemeClassName, isOnTop ? "shadow-none" : "shadow-md"),
    [isOnTop]
  );

  return (
    <div data-test-id="header_desktop" ref={ref} className={headerClassName}>
      <div className="max-w-[1024px] mx-auto px-2 xl:px-0 flex items-center py-5 ">
        <Logo />
        <div className="flex ml-4 xl:ml-10 space-x-2 semi-md:space-x-4 lg:space-x-8 items-center mr-1">
          {links.map((link) => (
            <Link
              key={`${link.title}_${link.href}`}
              title={link.title}
              href={link.href}
            />
          ))}
        </div>
        <ButtonLink
          className="ml-auto"
          href={`https://wa.me/${PHONE_NUMBER}`}
          target={"_blank"}
          rel="noreferrer"
        >
          Let's meet
        </ButtonLink>
      </div>
    </div>
  );
};

export default HeaderDesktop;
