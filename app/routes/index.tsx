import HeaderModule from "~/modules/HeaderModule";
import HomeModule from "~/modules/HomeModule";
import MyStoryModule from "~/modules/MyStoryModule";

export default function Index() {
  return (
    <div>
      <HeaderModule />
      <main className="space-y-20">
        <HomeModule />
        <MyStoryModule />
      </main>
    </div>
  );
}
