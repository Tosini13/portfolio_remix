import React from "react";
import BlogMenu from "~/components/BlogMenu";
import RecursiveBlogMenuLinks, {
  BlogLinkType,
} from "~/components/RecursiveBlogMenuLinks";

export const blogLinks: Array<BlogLinkType> = [
  {
    id: "front-end",
    name: "frontend",
    links: [
      {
        id: "front-end/javascript",
        name: "JavaScript",
        links: [
          {
            id: "front-end/javascript/classes",
            name: "Classes",
            link: "/posts/front-end/javascript/classes",
          },
          {
            id: "front-end/javascript/functions",
            name: "Functions",
            link: "/posts/front-end/javascript/functions",
          },
        ],
      },
      {
        id: "front-end/react",
        name: "React",
        links: [
          {
            id: "front-end/react/react-redux",
            name: "React Redux",
            link: "/posts/front-end/react/react-redux",
          },
        ],
      },
      {
        id: "front-end/styling",
        name: "Styling",
        links: [
          {
            id: "front-end/styling/css",
            name: "Css",
            link: "/posts/front-end/styling/css",
          },
        ],
      },
    ],
  },
];

type BlogMenuModulePropsType = {
  pathname: string;
};

const BlogMenuModule: React.FC<BlogMenuModulePropsType> = ({ pathname }) => {
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
    <div data-test-id="blog_menu_module">
      <BlogMenu
        links={blogLinks}
        open={open}
        handleSwitchOpen={handleSwitchOpen}
      />
    </div>
  );
};

export default BlogMenuModule;
