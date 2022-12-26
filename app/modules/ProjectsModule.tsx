import writing from "../../public/img/icons/writing.svg";
import Heading from "~/components/Heading";
import Project, { ProjectType } from "~/components/Project";

const PROJECTS_IMG_PATH = "/img/projects";

const projects: Array<ProjectType> = [
  {
    id: "2",
    title: "Nutrition responsive website",
    description:
      "This project was made for Spanish market, what we did for nutricionista in Valencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet aliquam orci, quis fringilla nisl porttitor in. Cras nibh quam, fermentum nec accumsan vel, mollis ut neque. Aenean iaculis ornare eros, et gravida leo semper feugiat. Fusce pharetra lacus id eros tristique venenatis. Proin dolor diam, suscipit id consequat nec, lacinia sed nibh.",
    technologies: [
      {
        id: "1",
        name: "HTML 5",
      },
      {
        id: "2",
        name: "CSS 3",
      },
      {
        id: "3",
        name: "TypeScript",
      },
      {
        id: "4",
        name: "React",
      },
      {
        id: "4",
        name: "Remix.js",
      },
    ],
    desktopSrc: `${PROJECTS_IMG_PATH}/nutricionez.desktop.png`,
    mobileSrc: `${PROJECTS_IMG_PATH}/nutricionez.mobile.png`,
  },
];

type ProjectsModuleProps = {};

const ProjectsModule: React.FC<ProjectsModuleProps> = () => {
  return (
    <div data-test-id="projects_module" id="projects">
      <Heading className="mx-auto after:w-full flex items-center mb-10">
        My projects{" "}
        <img width={40} height={40} src={writing} alt="writing hand" />{" "}
      </Heading>
      <div className="grid grid-cols-2 gap-x-10 gap-y-14">
        {Array(5)
          .fill(projects[0])
          .map((project) => (
            <Project key={project.id} {...project} />
          ))}
      </div>
    </div>
  );
};

export default ProjectsModule;
