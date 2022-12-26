import writing from "../../public/img/icons/writing.svg";
import Heading from "~/components/Heading";
import Project, { ProjectType } from "~/components/Project";

const PROJECTS_IMG_PATH = "/img/projects";

const projects: Array<ProjectType> = [
  {
    id: "1",
    title: "Tournaments PWA",
    description:
      "Progressive Web Application to facilitate tournaments creation. The website was meant for coaches preparing many sophisticated tournaments for young football players and for supporters (their parents) to be able to follow games online.",
    technologies: [
      {
        id: "1",
        name: "HTML 5",
      },
      {
        id: "2",
        name: "SASS",
      },
      {
        id: "2.1",
        name: "styled-components",
      },
      {
        id: "2.2",
        name: "Material UI",
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
        name: "Firebase",
      },
    ],
    desktopSrc: `${PROJECTS_IMG_PATH}/champions_youth.desktop.png`,
    mobileSrc: `${PROJECTS_IMG_PATH}/champions_youth.mobile.png`,
  },
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
        name: "Tailwind.css",
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
        {Array(2)
          .fill(projects)
          .flat()
          .map((project) => (
            <Project key={project.id} {...project} />
          ))}
      </div>
    </div>
  );
};

export default ProjectsModule;
