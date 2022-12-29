import React from "react";
import { twMerge } from "tailwind-merge";
import type { TLinkType } from "~/modules/HeaderModule";
import HamburgerButton from "./HamburgerButton";
import Link from "./Link";
import Logo from "./Logo";

const headerThemeClassName =
  "relative flex justify-between items-center px-2 py-4 bg-primary transition-shadow duration-300 ease-out";

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
        isOnTop ? "shadow-none" : open ? "md:shadow-md" : "shadow-md"
      ),
    [isOnTop, open]
  );

  return (
    <div ref={ref} data-test-id="header_mobile" className={headerClassName}>
      <Logo secondary />
      <HamburgerButton open={open} onClick={() => setOpen((bool) => !bool)} />
      {open && (
        <div
          className="bottom-0 left-0 translate-y-full w-full h-screen absolute 
        flex flex-col items-center px-2 py-4 bg-primary space-y-8"
        >
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
      )}
    </div>
  );
};

export default HeaderMobile;
