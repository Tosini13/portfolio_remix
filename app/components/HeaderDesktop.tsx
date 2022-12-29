import { TLinkType } from "~/modules/HeaderModule";
import Button from "./Button";
import Link from "./Link";
import Logo from "./Logo";

type HeaderDesktopProps = {
  links: Array<TLinkType>;
};

const HeaderDesktop: React.FC<HeaderDesktopProps> = ({ links }) => {
  return (
    <div
      data-test-id="header_desktop"
      className="max-w-[1200px] mx-auto px-2 xl:px-0 flex items-center py-5"
    >
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
      <Button className="ml-auto">Let's meet</Button>
    </div>
  );
};

export default HeaderDesktop;
