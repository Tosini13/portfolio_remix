import React from "react";
import { twMerge } from "tailwind-merge";
import type { TLinkType } from "~/modules/HeaderModule";
import HamburgerButton from "./HamburgerButton";
import Link from "./Link";
import Logo from "./Logo";
import logo from "../../public/img/logos/logo.svg";

const headerThemeClassName =
  "relative px-4 py-4 bg-primary transition-shadow duration-150 ease-out overflow-hidden";

type HeaderMobileProps = {
  links: Array<TLinkType>;
};

const HeaderMobile: React.FC<HeaderMobileProps> = ({ links }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState(false);
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
    () =>
      twMerge(
        headerThemeClassName,
        !isOnTop && !open ? "shadow-md" : "shadow-none",
        open ? "min-h-screen max-h-screen" : "min-h-0 max-h-[71px]"
      ),
    [isOnTop, open]
  );

  return (
    <div ref={ref} data-testId="header_mobile" className={headerClassName}>
      <img
        className="absolute invert -rotate-12 grayscale -top-20 -left-20 opacity-5"
        width={300}
        height={300}
        src={logo}
        alt="logo background"
      />
      <div className="relative flex justify-between items-center ">
        <Logo secondary />
        <HamburgerButton open={open} onClick={() => setOpen((bool) => !bool)} />
      </div>
      <div className="relative flex flex-col items-center space-y-8 mt-10">
        {links.map((link) => (
          <Link
            key={`${link.title}_${link.href}`}
            title={link.title}
            href={link.href}
            secondary
            className="text-xl"
            onClick={() => setOpen(() => false)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeaderMobile;
