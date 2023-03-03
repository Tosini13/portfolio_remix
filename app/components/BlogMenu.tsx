import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export type BlogLinkType = {
  id: string;
  name: string;
  link?: string;
  links?: Array<BlogLinkType>;
};

type BlogMenuButtonPropsType = {
  text: string;
  active: boolean;
  onClick: () => void;
};
type BlogMenuLinkPropsType = {
  text: string;
  link: string;
};

interface BlogMenuSubComponent {
  Button: React.FunctionComponent<BlogMenuButtonPropsType>;
  Link: React.FunctionComponent<BlogMenuLinkPropsType>;
}

type BlogMenuPropsType = {
  links: Array<BlogLinkType>;
  open: string | null;
  handleSwitchOpen: (id: string) => void;
};

const BlogMenu: React.FC<BlogMenuPropsType> & BlogMenuSubComponent = ({
  links,
  open,
  handleSwitchOpen,
}) => {
  return (
    <div data-test-id="blog_menu" className="w-full text-lg">
      {links.map((link) => (
        <Fragment key={link.id}>
          {link.link ? (
            <BlogMenu.Link text={link.name} link={link.link} />
          ) : (
            <BlogMenu.Button
              text={link.name}
              active={Boolean(open?.includes(link.id))}
              onClick={() => handleSwitchOpen(link.id)}
            />
          )}
          {link.links && open?.includes(link.id) && (
            <div className="ml-2" key={link.id}>
              <BlogMenu
                links={link.links}
                open={open}
                handleSwitchOpen={handleSwitchOpen}
              />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
};

const themeBlogMenuButtonClassName = `no-focus flex relative justify-between items-center border-b border-tertiary py-4 min-w-[150px] cursor-pointer w-full`;

const BlogMenuButton: React.FC<BlogMenuButtonPropsType> = ({
  text,
  active,
  onClick,
}) => {
  const className = React.useMemo(
    () => twMerge("text-white md:text-primary", themeBlogMenuButtonClassName),
    []
  );

  const arrowClassName = React.useMemo(
    () =>
      twMerge(
        "relative ml-auto h-[2px] min-h-[2px] min-w-[10px] w-[10px] before:transition-all before:duration-500 after:transition-all after:duration-500 before:absolute before:left-0 before:h-full before:w-full before:translate-x-[35%] before:-rotate-[40deg] before:bg-extra after:absolute after:right-0 after:h-full after:w-full after:-translate-x-[35%] after:rotate-[40deg] after:bg-extra",
        active
          ? "before:bg-white md:before:bg-primary before:rotate-[0deg] after:bg-white md:after:bg-primary after:rotate-[0deg]"
          : ""
      ),
    [active]
  );
  return (
    <button
      data-test-id="blog_menu_button"
      className={className}
      onClick={onClick}
    >
      {text}
      <div className={arrowClassName} />
    </button>
  );
};

const BlogMenuLink: React.FC<BlogMenuLinkPropsType> = ({ text, link }) => {
  const className = React.useMemo(
    () => twMerge("text-extra ", themeBlogMenuButtonClassName),
    []
  );
  return (
    <a href={link} data-test-id="blog_menu_link" className={className}>
      {text}
    </a>
  );
};

BlogMenu.Button = BlogMenuButton;
BlogMenu.Link = BlogMenuLink;

export default BlogMenu;
