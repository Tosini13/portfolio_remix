import Button from "~/components/Button";
import Heading from "~/components/Heading";
import profilePhoto from "../../public/img/photos/jb_sea_photo.png";
import depuytren from "../../public/img/icons/depuytren.svg";
import Paragraph from "~/components/Paragraph";

type MyStoryModuleProps = {};

const MyStoryModule: React.FC<MyStoryModuleProps> = ({}) => {
  return (
    <div
      data-test-id="my_story_module"
      className="max-w-[1000px] mx-auto flex space-x-8 items-center justify-between"
    >
      <div className="space-y-6 max-w-[600px]">
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
        <Button>Let's meet</Button>
      </div>
      <div
        className="h-fit w-fit p-3 relative min-w-[250px]
       before:block before:absolute before:top-0 before:left-0 before:h-16 before:w-16 before:border-solid before:border-4 before:border-b-0 before:border-r-0 before:border-extra
       after:block after:absolute after:bottom-0 after:right-0 after:h-16 after:w-16 after:border-solid after:border-4 after:border-t-0 after:border-l-0 after:border-extra
      "
      >
        <img className="grayscale" src={profilePhoto} alt="photo about me" />
      </div>
    </div>
  );
};

export default MyStoryModule;
