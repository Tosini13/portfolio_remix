import logo from "../../public/img/logos/logo.svg";
import Paragraph from "./Paragraph";

export type TechnologyType = {
  id: string;
  name: string;
};

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  technologies: Array<TechnologyType>;
  desktopSrc: string;
  mobileSrc: string;
};

type ProjectProps = ProjectType;

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  desktopSrc,
  mobileSrc,
}) => {
  return (
    <div
      data-test-id="project"
      className="relative rounded-3xl border-2 border-[#E8E8E8] overflow-hidden
      before:content-['</>'] before:absolute before:text-tertiary before:font-bold before:text-9xl before:-bottom-10 before:-right-10 before:opacity-5
      "
    >
      <img
        className="absolute grayscale -top-20 -left-20 opacity-5"
        width={300}
        height={300}
        src={logo}
        alt="logo"
      />
      <div className="p-10 space-y-6">
        <div className="relative -m-4 mb-0 p-4 pb-10 overflow-y-hidden">
          <img
            className="rounded-2xl shadow-lg"
            src={desktopSrc}
            alt={`${title} desktop view`}
          />
          <img
            className="absolute top-10 right-10 rounded-xl shadow-lg h-full"
            src={mobileSrc}
            alt={`${title} mobile view`}
          />
          <div className="absolute top-0 left-0 w-full h-full shadow-[inset_0px_-10px_15px_0px_white,inset_0px_-10px_20px_8px_white]" />
        </div>
        <h3 className="text-3xl font-medium">{title}</h3>
        <div className="flex flex-wrap items-center">
          {technologies.map((technology) => (
            <div
              key={technology.id}
              className="ml-1 mt-1 rounded-full bg-tertiary text-secondary py-1.5 px-3 font-medium whitespace-nowrap"
            >
              {technology.name}
            </div>
          ))}
        </div>
        <Paragraph className="whitespace-nowrap w-full text-ellipsis overflow-hidden">
          {description}
        </Paragraph>
      </div>
    </div>
  );
};

export default Project;
