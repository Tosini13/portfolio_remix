import { ButtonLink } from "./Button";
import Paragraph from "./Paragraph";
import logo from "../../public/img/logos/logo.svg";
import { PHONE_NUMBER } from "~/utils/media";

type ProjectsEncourageProps = {};

const ProjectsEncourage: React.FC<ProjectsEncourageProps> = ({}) => {
  return (
    <div
      data-testId="projects_encourage"
      className="relative bg-primary text-secondary py-10 rounded-2xl overflow-hidden"
    >
      <img
        className="absolute invert -rotate-12 grayscale -top-20 -left-20 opacity-10"
        width={250}
        height={250}
        src={logo}
        alt="logo background"
      />
      <img
        className="absolute invert -rotate-12 grayscale -bottom-20 -right-20 opacity-10"
        width={250}
        height={250}
        src={logo}
        alt="logo background"
      />
      <div className="relative flex flex-col md:flex-row justify-evenly items-center space-x-1 space-y-8 md:space-y-0">
        <h4 className="text-lg font-semibold">Do you like my projects?</h4>
        <Paragraph className="leading-7 text-sm">
          Let me help you improve/build your
          <br />
          website and make business growing.
        </Paragraph>

        <ButtonLink
          href={`https://wa.me/${PHONE_NUMBER}`}
          target={"_blank"}
          rel="noreferrer"
          secondary
        >
          Let's work together
        </ButtonLink>
      </div>
    </div>
  );
};

export default ProjectsEncourage;
