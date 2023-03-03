import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";

export type BlogLinkType = {
  id: string;
  name: string;
  link?: string;
  links?: Array<BlogLinkType>;
};

interface RecursiveBlogMenuLinksSubComponents {
  Link: React.FunctionComponent<BlogMenuLinkPropsType>;
}

type RecursiveBlogMenuLinksPropsType = {
  links: Array<BlogLinkType>;
  open: string | null;
  handleSwitchOpen: (id: string) => void;
};

const RecursiveBlogMenuLinks: React.FC<RecursiveBlogMenuLinksPropsType> &
  RecursiveBlogMenuLinksSubComponents = ({ links, open, handleSwitchOpen }) => {
  return (
    <div data-test-id="recursive_blog_menu_links">
      {links.map((link) => (
        <Fragment key={link.id}>
          <RecursiveBlogMenuLinks.Link
            name={link.name}
            link={link.link}
            open={open?.includes(link.id)}
            onClick={link.link ? undefined : () => handleSwitchOpen(link.id)}
          />
          {link.links && open?.includes(link.id) && (
            <div className="ml-2" key={link.id}>
              <RecursiveBlogMenuLinks
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

type BlogMenuLinkPropsType = Pick<BlogLinkType, "link" | "name"> & {
  open?: boolean;
  onClick?: () => void;
};

const BlogMenuLink: React.FC<BlogMenuLinkPropsType> = ({
  name,
  link,
  open,
  onClick,
}) => {
  const className = React.useMemo(
    () =>
      twMerge(
        link ? "text-extra" : "text-primary",
        "flex relative justify-between items-center border-b border-tertiary py-4 min-w-[150px] cursor-pointer"
      ),
    [link]
  );
  const arrowClassName = React.useMemo(
    () =>
      twMerge(
        "relative ml-auto h-[2px] min-h-[2px] min-w-[10px] w-[10px] before:transition-all before:duration-500 after:transition-all after:duration-500 before:absolute before:left-0 before:h-full before:w-full before:translate-x-[35%] before:-rotate-[40deg] before:bg-extra after:absolute after:right-0 after:h-full after:w-full after:-translate-x-[35%] after:rotate-[40deg] after:bg-extra",
        open
          ? "before:bg-primary before:rotate-[0deg] after:bg-primary after:rotate-[0deg]"
          : ""
      ),
    [open]
  );

  return (
    <a
      data-test-id="blog_menu_link"
      href={link}
      className={className}
      onClick={onClick}
    >
      {name}
      {!link && <div className={arrowClassName} />}
    </a>
  );
};

/**
 * @description Sub Components:
 */
RecursiveBlogMenuLinks.Link = BlogMenuLink;

export default RecursiveBlogMenuLinks;
