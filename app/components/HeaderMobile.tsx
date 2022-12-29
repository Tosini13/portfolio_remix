import React from "react";
import type { TLinkType } from "~/modules/HeaderModule";
import HamburgerButton from "./HamburgerButton";
import Logo from "./Logo";

type HeaderMobileProps = {
  links: Array<TLinkType>;
};

const HeaderMobile: React.FC<HeaderMobileProps> = ({}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div
      data-test-id="header_mobile"
      className="flex justify-between items-center px-2 py-4"
    >
      <Logo secondary />
      <HamburgerButton open={open} onClick={() => setOpen((bool) => !bool)} />
      {/* <div className="ml-10 space-x-8 items-center hidden">
    {links.map((link) => (
      <Link
        key={`${link.title}_${link.href}`}
        title={link.title}
        href={link.href}
      />
    ))}
  </div> */}
    </div>
  );
};

export default HeaderMobile;
