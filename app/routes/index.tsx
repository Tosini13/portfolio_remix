import HeaderModule from "~/modules/HeaderModule";
import HomeModule from "~/modules/HomeModule";
import MyStoryModule from "~/modules/MyStoryModule";
import Testimonials from "~/modules/Testimonials";

export default function Index() {
  return (
    <div>
      <HeaderModule />
      <main className="space-y-[150px] max-w-[1200px] mx-auto">
        <HomeModule />
        <MyStoryModule />
        <Testimonials />
      </main>
    </div>
  );
}
