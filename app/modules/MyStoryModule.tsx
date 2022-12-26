import Button from "~/components/Button";
import Heading from "~/components/Heading";
import profilePhoto from "../../public/img/photos/jb_sea_photo.png";
import depuytren from "../../public/img/icons/depuytren.svg";

type MyStoryModuleProps = {};

const MyStoryModule: React.FC<MyStoryModuleProps> = ({}) => {
  return (
    <div data-test-id="my_story_module" className="flex space-x-8">
      <div className="space-y-6 grow">
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
        <p>
          I am Software Developer, focused on frontend as well as constantly
          improving backend skills. I have experience working with scrum teams,
          developing React web application with different technologies applied
          to projects. My soft skills like work time organization optimisation,
          well communication skills enhance problem solving and development
          velocity. In free time I test new technologies, along with my brother
          who is UX/UI designer, we develop our ideas to simplify day-to-day
          problems.
        </p>
        <Button>Let's meet</Button>
      </div>
      <div className="p-6 relative after:block after:absolute after:bottom-0 after:right-0 after:h-6 after:w-6 after:border-solid after:border-4 after:border-t-0 after:border-l-0 after:border-extra">
        <img className="grayscale" src={profilePhoto} alt="photo about me" />
      </div>
    </div>
  );
};

export default MyStoryModule;
