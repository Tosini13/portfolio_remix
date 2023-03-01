import { Outlet } from "@remix-run/react";
import Section from "~/components/Section";
import FooterModule from "~/modules/FooterModule";
import HeaderModule from "~/modules/HeaderModule";

type PostsPropsType = {};

const Posts: React.FC<PostsPropsType> = ({}) => {
  return (
    <>
      <HeaderModule />
      <main className="max-w-[1024px] mb-20 min-h-main h1:text-xl h2:text-lg post mx-6 lg:mx-auto">
        <Outlet />
      </main>
      <FooterModule />
    </>
  );
};

export default Posts;
