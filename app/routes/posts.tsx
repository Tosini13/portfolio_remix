import { Outlet, useLoaderData } from "@remix-run/react";
import FooterModule from "~/modules/FooterModule";
import React from "react";
import { LoaderArgs } from "@remix-run/node";
import BlogMenuModule from "~/modules/BlogMenuModule";
import BlogHeaderModule from "~/modules/BlogHeaderModule";

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  return {
    pathname: url.pathname,
  };
}
type PostsPropsType = {};

const Posts: React.FC<PostsPropsType> = ({}) => {
  const { pathname } = useLoaderData();

  return (
    <>
      <BlogHeaderModule pathname={pathname} />
      <main className="mb-20 min-h-main h1:text-xl h2:text-lg mx-2">
        <div className="flex md:gap-x-10">
          <div className="min-w-[200px] sticky top-[132px] h-fit md:block hidden">
            <BlogMenuModule pathname={pathname} />
          </div>
          <div className="post">
            <Outlet />
          </div>
        </div>
      </main>
      <FooterModule />
    </>
  );
};

export default Posts;
