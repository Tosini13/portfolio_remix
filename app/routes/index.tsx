import ExperienceModule from "~/modules/ExperienceModule";
import HeaderModule from "~/modules/HeaderModule";
import HomeModule from "~/modules/HomeModule";
import ProjectsModule from "~/modules/ProjectsModule";
import StoryModule from "~/modules/StoryModule";
import Testimonials from "~/modules/Testimonials";

export default function Index() {
  return (
    <div>
      <HeaderModule />
      <main className="space-y-[150px] max-w-[1200px] mx-auto">
        <HomeModule />
        <StoryModule />
        <Testimonials />
        <ProjectsModule />
        <ExperienceModule />
      </main>
    </div>
  );
}
