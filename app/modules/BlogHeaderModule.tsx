import React from "react";
import BlogHeaderMobile from "~/components/BlogHeaderMobile";
import BlogMenu from "~/components/BlogMenu";
import HeaderDesktop from "~/components/HeaderDesktop";
import { blogLinks } from "./BlogMenuModule";
import { TLinkType } from "./HeaderModule";

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

export const mobileLinks: Array<TLinkType> = [
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

type BlogHeaderModulePropsType = {
  pathname: string;
};

const BlogHeaderModule: React.FC<BlogHeaderModulePropsType> = ({
  pathname,
}) => {
  const [open, setOpen] = React.useState<null | string>(pathname);

  const handleSwitchOpen = React.useCallback(
    (id: string) => {
      if (id === open) {
        return setOpen(id.substring(0, id.lastIndexOf("/")));
      }

      if (open?.includes(id)) {
        return setOpen(id.substring(0, id.lastIndexOf(`${id}/`)));
      }

      setOpen(id);
    },
    [open, setOpen]
  );
  return (
    <header
      data-test-id="blog_header_module"
      className="w-full sticky top-0 left-0 z-50 max-h-[84px] md:mb-[48px]"
    >
      <div className="hidden md:block">
        <HeaderDesktop links={links} />
      </div>
      <div className="block md:hidden">
        <BlogHeaderMobile
          links={blogLinks}
          handleSwitchOpen={handleSwitchOpen}
          open={open}
        />
      </div>
    </header>
  );
};

export default BlogHeaderModule;
