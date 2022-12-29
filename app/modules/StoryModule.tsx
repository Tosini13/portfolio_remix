import Button from "~/components/Button";
import Heading from "~/components/Heading";
import profilePhoto from "../../public/img/photos/jb_sea_photo.png";
import depuytren from "../../public/img/icons/depuytren.svg";
import Paragraph from "~/components/Paragraph";

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
    <section
      data-test-id="story_module"
      id="story"
      className="max-w-[1100px] lg:mx-auto mx-6 flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-8 items-center justify-between"
    >
      <div className="block md:hidden self-start">{heading}</div>
      <div className="space-y-6 max-w-[600px] order-3">
        <div className="hidden md:block">{heading}</div>
        <Paragraph>
          I am Software Developer, focused on frontend as well as constantly
          improving backend skills. I have experience working with scrum teams,
          developing React web application with different technologies applied
          to projects. My soft skills like work time organization optimisation,
          well communication skills enhance problem solving and development
          velocity. In free time I test new technologies, along with my brother
          who is UX/UI designer, we develop our ideas to simplify day-to-day
          problems.
        </Paragraph>
        <div className="text-center md:text-left">
          <Button>Let's meet</Button>
        </div>
      </div>
      <div
        className="h-fit w-fit p-3 relative min-w-[250px] order-2 md:order-4
       before:block before:absolute before:top-0 before:left-0 before:h-16 before:w-16 before:border-solid before:border-4 before:border-b-0 before:border-r-0 before:border-extra
       after:block after:absolute after:bottom-0 after:right-0 after:h-16 after:w-16 after:border-solid after:border-4 after:border-t-0 after:border-l-0 after:border-extra
      "
      >
        <img className="grayscale" src={profilePhoto} alt="photo about me" />
      </div>
    </section>
  );
};

export default StoryModule;
