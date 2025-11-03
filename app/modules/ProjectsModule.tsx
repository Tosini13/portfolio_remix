import Heading from "~/components/Heading";
import Project, { ProjectType } from "~/components/Project";
import ProjectsEncourage from "~/components/ProjectsEncourage";
import Section from "~/components/Section";
import writing from "../../public/img/icons/writing.svg";

const PROJECTS_IMG_PATH = "/img/projects";

const projects: Array<ProjectType> = [
  {
    id: "6",
    title: "Risk monitor",
    description:
      "The risk monitor provides a comprehensive platform for monitoring and responding to global food security risks.",
    technologies: [
      {
        id: "4",
        name: "React",
      },
      {
        id: "7",
        name: "TypeScript",
      },
      {
        id: "7.4",
        name: "Next.js",
      },
      {
        id: "7.6",
        name: "Google Cloud Platform",
      },
      {
        id: "7.7",
        name: "Firebase",
      },
      {
        id: "7.5",
        name: "Leaflet",
      },
      {
        id: "1",
        name: "HTML5",
      },
      {
        id: "2",
        name: "CSS3",
      },
      {
        id: "3",
        name: "JavaScript",
      },
    ],
    desktopSrc: `${PROJECTS_IMG_PATH}/risk_monitor.desktop.webp`,
    mobileSrc: `${PROJECTS_IMG_PATH}/risk_monitor.mobile.webp`,
    url: "https://riskmonitor.fao.org/",
  },
  {
    id: "6",
    title: "Hand in Hand Initiative Dashboard",
    description:
      "The Hand-in-Hand (HIH) Initiative dashboard allows users to view the progress of member countries in the HIH process and the results of the now annual HIH Investment Fora based on ten M&E key indicators.",
    technologies: [
      {
        id: "4",
        name: "React",
      },
      {
        id: "7",
        name: "TypeScript",
      },
      {
        id: "7.2",
        name: "React Router",
      },
      {
        id: "7.3",
        name: "React Query",
      },
      {
        id: "7.4",
        name: "motion",
      },
      {
        id: "7.5",
        name: "Cesium",
      },
      {
        id: "7.1",
        name: "React Testing Library",
      },
      {
        id: "7.6",
        name: "Google Cloud Platform",
      },
      {
        id: "8",
        name: "Vitest",
      },
      {
        id: "8.1",
        name: "Vite",
      },
      {
        id: "8.1",
        name: "Mocha & Chai",
      },
      {
        id: "8.2",
        name: "Chakra UI",
      },
      {
        id: "1",
        name: "HTML5",
      },
      {
        id: "2",
        name: "CSS3",
      },
      {
        id: "3",
        name: "JavaScript",
      },
    ],
    desktopSrc: `${PROJECTS_IMG_PATH}/hand_in_hand_initiative_dashboard.desktop.webp`,
    mobileSrc: `${PROJECTS_IMG_PATH}/hand_in_hand_initiative_dashboard.mobile.webp`,
    url: "https://www.fao.org/hand-in-hand/hih-dashboard/en",
  },
  {
    id: "5",
    title: "Omnipeak",
    description:
      "OMNIPEAK is an AI-powered platform helping users strengthen their personal brand, expand their network strategically, and attract more high-value business opportunities.",
    technologies: [
      {
        id: "4",
        name: "React",
      },
      {
        id: "7",
        name: "TypeScript",
      },
      {
        id: "7.1",
        name: "React Testing Library",
      },
      {
        id: "8",
        name: "Vitest",
      },
      {
        id: "8.1",
        name: "Vite",
      },
      {
        id: "8.1",
        name: "Mocha & Chai",
      },
      {
        id: "8.2",
        name: "Chakra UI",
      },
      {
        id: "1",
        name: "HTML5",
      },
      {
        id: "2",
        name: "CSS3",
      },
      {
        id: "3",
        name: "JavaScript",
      },
    ],
    desktopSrc: `${PROJECTS_IMG_PATH}/omnipeak.desktop.webp`,
    mobileSrc: `${PROJECTS_IMG_PATH}/omnipeak.mobile.webp`,
    url: "https://www.omnipeak.ai/en",
  },
  {
    id: "4",
    title: "Key-drop.com - Counter-Strike 2 case opening platform",
    description:
      "Key-drop.com is a global case opening platform that provides a wide range of cases for Counter-Strike 2 players. It is a platform that allows players to open cases and get items.",
    technologies: [
      {
        id: "4",
        name: "React",
      },
      {
        id: "7",
        name: "TypeScript",
      },
      {
        id: "8",
        name: "Cypress",
      },
      {
        id: "8.1",
        name: "XState",
      },
      {
        id: "8.2",
        name: "WebSocket",
      },
      {
        id: "8.3",
        name: "Rest API",
      },
      {
        id: "8.4",
        name: "GSAP",
      },
      {
        id: "1",
        name: "HTML5",
      },
      {
        id: "2",
        name: "CSS3",
      },
      {
        id: "3",
        name: "JavaScript",
      },
    ],
    desktopSrc: `${PROJECTS_IMG_PATH}/key_drop.desktop.webp`,
    mobileSrc: `${PROJECTS_IMG_PATH}/key_drop.mobile.webp`,
    url: "https://keydrop.com/",
  },
  {
    id: "3",
    title: "Brainly e-learning platform",
    description:
      "Brainly is a global e-learning platform that provides a wide range of courses for students of all ages. It is a platform that allows students to learn at their own pace and in their own way.",
    technologies: [
      {
        id: "4",
        name: "React",
      },
      {
        id: "7",
        name: "TypeScript",
      },
      {
        id: "8",
        name: "NX",
      },
      {
        id: "9",
        name: "Brainiac",
      },
      {
        id: "1",
        name: "HTML5",
      },
      {
        id: "2",
        name: "CSS3",
      },
      {
        id: "3",
        name: "JavaScript",
      },
    ],
    desktopSrc: `${PROJECTS_IMG_PATH}/brainly.desktop.webp`,
    mobileSrc: `${PROJECTS_IMG_PATH}/brainly.mobile.webp`,
    url: "https://brainly.com/",
  },
  {
    id: "2",
    title: "Nutrition responsive website",
    description:
      "This project was made for Spanish market, what we did for nutricionista in Valencia. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet aliquam orci, quis fringilla nisl porttitor in. Cras nibh quam, fermentum nec accumsan vel, mollis ut neque. Aenean iaculis ornare eros, et gravida leo semper feugiat. Fusce pharetra lacus id eros tristique venenatis. Proin dolor diam, suscipit id consequat nec, lacinia sed nibh.",
    technologies: [
      {
        id: "1",
        name: "HTML5",
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
    url: "https://nutricionez.com/",
  },
  {
    id: "1",
    title: "Tournaments PWA",
    description:
      "Progressive Web Application to facilitate tournaments creation. The website was meant for coaches preparing many sophisticated tournaments for young football players and for supporters (their parents) to be able to follow games online.",
    technologies: [
      {
        id: "1",
        name: "HTML5",
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
    url: "https://champions-youth.web.app/tournament/4vJ7qWUJfOFTFJznyVvu",
  },
];

type ProjectsModuleProps = {};

const ProjectsModule: React.FC<ProjectsModuleProps> = () => {
  return (
    <Section data-testId="projects_module" id="projects" className="space-y-14">
      <Heading className="md:mx-auto after:w-full flex items-center">
        My projects{" "}
        <img width={40} height={40} src={writing} alt="writing hand" />{" "}
      </Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14 max-w-[1024px] mx-auto">
        {projects.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
      <ProjectsEncourage />
    </Section>
  );
};

export default ProjectsModule;
