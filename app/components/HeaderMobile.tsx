import React from "react";
import type { TLinkType } from "~/modules/HeaderModule";
import HamburgerButton from "./HamburgerButton";
import Link from "./Link";
import Logo from "./Logo";

type HeaderMobileProps = {
  links: Array<TLinkType>;
};

const HeaderMobile: React.FC<HeaderMobileProps> = ({ links }) => {
  const [open, setOpen] = React.useState(true);
  return (
    <div
      data-test-id="header_mobile"
      className="relative flex justify-between items-center px-2 py-4 bg-primary"
    >
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
