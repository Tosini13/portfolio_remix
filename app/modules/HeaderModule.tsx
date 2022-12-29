import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "~/components/Button";
import HeaderDesktop from "~/components/HeaderDesktop";
import HeaderMobile from "~/components/HeaderMobile";
import Link from "~/components/Link";
import Logo from "~/components/Logo";

const headerThemeClassName =
  "transition-shadow duration-300 ease-out w-full sticky top-0 left-0 z-50 bg-primary md:bg-[rgba(255,255,255,0.96)]";

export type TLinkType = {
  title: string;
  href: string;
};

export const links: Array<TLinkType> = [
  {
    title: "home",
    href: "#home",
  },
  {
    title: "My story",
    href: "#story",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "My projects",
    href: "#projects",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

type HeaderModuleProps = {};

const HeaderModule: React.FC<HeaderModuleProps> = () => {
  const ref = React.useRef<HTMLHeadElement>(null);
  const [openMenu, setOpenMenu] = React.useState(false);
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
        isOnTop ? "shadow-none" : openMenu ? "md:shadow-md" : "shadow-md"
      ),
    [isOnTop, openMenu]
  );

  return (
    <header data-test-id="header_module" ref={ref} className={headerClassName}>
      <div className="hidden md:block">
        <HeaderDesktop links={links} />
      </div>
      <div className="block md:hidden">
        <HeaderMobile links={links} />
      </div>

      {/* <div className="max-w-[1200px] mx-auto  flex  items-center py-5 ">
        <Logo />
        <div className="ml-10 space-x-8 items-center">
          {links.map((link) => (
            <Link
              key={`${link.title}_${link.href}`}
              title={link.title}
              href={link.href}
            />
          ))}
        </div>
        <Button className="ml-auto">Let's meet</Button>
      </div> */}
    </header>
  );
};

export default HeaderModule;
