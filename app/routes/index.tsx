import ContactModule from "~/modules/ContactModule";
import ExperienceModule from "~/modules/ExperienceModule";
import FooterModule from "~/modules/FooterModule";
import HeaderModule from "~/modules/HeaderModule";
import HomeModule from "~/modules/HomeModule";
import ProjectsModule from "~/modules/ProjectsModule";
import StoryModule from "~/modules/StoryModule";
import TestimonialsModule from "~/modules/TestimonialsModule";

export default function Index() {
  return (
    <div>
      <HeaderModule />
      <main className="space-y-[150px] max-w-[1024px] mx-auto mb-20">
        <HomeModule />
        <StoryModule />
        <TestimonialsModule />
        <ProjectsModule />
        <ExperienceModule />
        <ContactModule />
      </main>
      <FooterModule />
    </div>
  );
}
