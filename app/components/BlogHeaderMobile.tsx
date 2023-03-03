import React from "react";
import { twMerge } from "tailwind-merge";
import HamburgerButton from "./HamburgerButton";
import Logo from "./Logo";
import logo from "../../public/img/logos/logo.svg";
import BlogMenu, { BlogLinkType } from "./BlogMenu";

type BlogHeaderMobilePropsType = {
  links: Array<BlogLinkType>;
  open: string | null;
  handleSwitchOpen: (id: string) => void;
};
const headerThemeClassName =
  "relative px-4 py-4 bg-primary transition-shadow duration-150 ease-out overflow-hidden";

const BlogHeaderMobile: React.FC<BlogHeaderMobilePropsType> = ({
  links,
  open: openButton,
  handleSwitchOpen,
}) => {
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
    <div ref={ref} data-testId="blog_header_mobile" className={headerClassName}>
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
        <BlogMenu
          open={openButton}
          links={links}
          handleSwitchOpen={handleSwitchOpen}
        />
      </div>
    </div>
  );
};

export default BlogHeaderMobile;
