import { ButtonLink } from "~/components/Button";
import Heading from "~/components/Heading";
import profilePhoto from "../../public/img/photos/jb.sea.photo.png";
import depuytren from "../../public/img/icons/depuytren.svg";
import Paragraph from "~/components/Paragraph";
import Section from "~/components/Section";
import { PHONE_NUMBER } from "~/utils/media";

const heading = (
  <Heading className="flex items-center">
    My Story{" "}
    <img
      className="ml-2"
      width={40}
      height={40}
      src={depuytren}
      alt="Buzz Astral Hello"
    />{" "}
  </Heading>
);

type StoryModuleProps = {};

const StoryModule: React.FC<StoryModuleProps> = ({}) => {
  return (
    <Section
      data-testId="story_module"
      id="story"
      className="max-w-[1024px] lg:mx-auto flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-8 items-center justify-between"
    >
      <div className="block md:hidden self-start">{heading}</div>
      <div className="space-y-6 max-w-[600px] order-3">
        <div className="hidden md:block">{heading}</div>
        <Paragraph>
          I am a Software Developer, with skills focused on frontend as well as
          backend side. I have experience working with scrum teams and
          developing React web application with different technologies applied
          to projects. I am highly efficient with strong communication skills
          which enhances problem solving and development velocity. Along with my
          brother, who is a UX/UI designer, we develop and actualize our ideas
          to simplify day-to-day problems.
        </Paragraph>
        <div className="text-center md:text-left">
          <ButtonLink
            className="ml-auto"
            href={`https://wa.me/${PHONE_NUMBER}`}
            target={"_blank"}
            rel="noreferrer"
          >
            Let's meet
          </ButtonLink>
        </div>
      </div>
      <div className="h-fit w-fit p-3 relative min-w-[250px] order-2 md:order-4">
        <img src={profilePhoto} alt="photo about me" />
      </div>
    </Section>
  );
};

export default StoryModule;
