import React from "react";
import HeaderDesktop from "~/components/HeaderDesktop";
import HeaderMobile from "~/components/HeaderMobile";

export type TLinkType = {
  title: string;
  href: string;
};

/**
 * @todo
 * /posts/react/react-redux
 */

export const links: Array<TLinkType> = [
  {
    title: "home",
    href: "/#home",
  },
  {
    title: "My story",
    href: "/#story",
  },
  {
    title: "Testimonials",
    href: "/#testimonials",
  },
  {
    title: "My projects",
    href: "/#projects",
  },
  {
    title: "Experience",
    href: "/#experience",
  },
  {
    title: "Contact",
    href: "/#contact",
  },
];

type HeaderModuleProps = {};

const HeaderModule: React.FC<HeaderModuleProps> = () => {
  return (
    <header
      data-test-id="header_module"
      className="w-full sticky top-0 left-0 z-50 max-h-[84px] md:mb-[48px]"
    >
      <div className="hidden md:block">
        <HeaderDesktop links={links} />
      </div>
      <div className="block md:hidden">
        <HeaderMobile links={links} />
      </div>
    </header>
  );
};

export default HeaderModule;
