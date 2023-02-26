import { Outlet } from "@remix-run/react";
import FooterModule from "~/modules/FooterModule";
import HeaderModule from "~/modules/HeaderModule";

type PostsPropsType = {};

const Posts: React.FC<PostsPropsType> = ({}) => {
  return (
    <>
      <HeaderModule />
      <main className="space-y-16 max-w-[1024px] mx-auto mb-20 min-h-main h1:text-xl h2:text-lg">
        <Outlet />
      </main>
      <FooterModule />
    </>
  );
};

export default Posts;
