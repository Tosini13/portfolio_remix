import Experience, { ExperienceType } from "~/components/Experience";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import ok from "../../public/img/icons/ok.svg";

const LOGOS_IMG_PATH = "/img/logos";

const experience: Array<ExperienceType> = [
  {
    id: "1",
    title: "West-pomeranian Technology Univeristy",
    description: "",
    location: "Szczecin, Poland",
    startDate: new Date("10-01-2016"),
    endDate: new Date("09-30-2019"),
    technologies: [],
    iconSrc: `${LOGOS_IMG_PATH}/zut.logo.png`,
  },
  {
    id: "2",
    title: "P.A. College",
    description: "",
    location: "Larnaca, Cyprus",
    startDate: new Date("10-01-2018"),
    endDate: new Date("05-20-2019"),
    technologies: [],
    iconSrc: `${LOGOS_IMG_PATH}/paCollege.logo.png`,
  },
  {
    id: "3",
    title: "DOREA Educational Institute",
    description:
      "2 months Internship. I was Developing and taking care of website with WordPress. Improving skills in PHP (Ajax, Bootstrap). Improving knowledge about SEO.",
    location: "Larnaca, Cyprus",
    startDate: new Date("06-01-2019"),
    endDate: new Date("07-30-2019"),
    iconSrc: `${LOGOS_IMG_PATH}/dorea.logo.png`,
    technologies: [
      {
        id: "1",
        name: "Wordpress",
      },
      {
        id: "2",
        name: "HTML5",
      },
      {
        id: "3",
        name: "CSS3",
      },
      {
        id: "4",
        name: "JavaScript",
      },
    ],
  },
  {
    id: "4",
    title: "Mayeryn",
    description:
      "I worked with 4-person team to build Mayeryn website. I improved WordPress and PHP skills.",
    location: "Warsaw, Poland (Remotely)",
    startDate: new Date("06-01-2020"),
    endDate: new Date("07-30-2020"),
    iconSrc: `${LOGOS_IMG_PATH}/mayeryn.logo.png`,
    technologies: [
      {
        id: "1",
        name: "WordPress",
      },
      {
        id: "2",
        name: "HTML5",
      },
      {
        id: "3",
        name: "CSS3",
      },
      {
        id: "4",
        name: "JavaScript",
      },
      {
        id: "5",
        name: "PHP",
      },
    ],
  },
  {
    id: "5",
    title: "Apptimia",
    description:
      "I worked with 8-person team, where most members of the team where based in California, to create website for resources' management. Added new features to complex UI with React components, wrote E2E and unit tests, helped on back end with creating GraphQL queries.",
    location: "Szczecin, Poland",
    startDate: new Date("07-01-2020"),
    endDate: new Date("09-30-2021"),
    iconSrc: `${LOGOS_IMG_PATH}/apptimia.logo.png`,
    technologies: [
      {
        id: "1",
        name: "HTML5",
      },
      {
        id: "2",
        name: "CSS3",
      },
      {
        id: "3.2",
        name: "Next.js",
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
        name: "GraphQL",
      },
      {
        id: "5",
        name: "Jest",
      },
      {
        id: "5.1",
        name: "Cypress",
      },
    ],
  },
  {
    id: "6",
    title: "Brainly",
    description:
      "Built highly efficient React components and enhanced the CI/CD pipeline to support smooth bi-weekly production deployments, delivering reliable updates to over 500,000 daily active users.",
    location: "Barcelona, Spain",
    startDate: new Date("01-01-2022"),
    endDate: new Date("12-30-2022"),
    iconSrc: `${LOGOS_IMG_PATH}/brainly.logo.png`,
    technologies: [
      {
        id: "1",
        name: "HTML5",
      },
      {
        id: "2",
        name: "CSS3",
      },
      {
        id: "3.1",
        name: "JavaScript",
      },
      {
        id: "3",
        name: "TypeScript",
      },
      {
        id: "4",
        name: "React.js",
      },
      {
        id: "4.11",
        name: "Next.js",
      },
      {
        id: "4.12",
        name: "NX",
      },
      {
        id: "4.1",
        name: "Brainiac",
      },
      {
        id: "4.2",
        name: "GraphQL",
      },
      {
        id: "4.3",
        name: "jscodeshift",
      },
      {
        id: "5",
        name: "Jest",
      },
      {
        id: "5.1",
        name: "Cypress",
      },
      {
        id: "5.1",
        name: "Cucumber",
      },
      {
        id: "6",
        name: "Apollo",
      },
    ],
  },
  {
    id: "7",
    title: "UN7",
    description:
      "Played a key role in the growth of Key-drop.com, a leading case-opening platform for Counter-Strike players, contributing to record-breaking user engagement with over 90,000 daily active users. Designed and implemented scalable solutions to enhance the user experience (UX) in real-time, data-intensive environments.",
    location: "Remote, Europe",
    startDate: new Date("01-01-2023"),
    endDate: new Date("01-11-2023"),
    iconSrc: `${LOGOS_IMG_PATH}/keydrop.logo.svg`,
    technologies: [
      {
        id: "1",
        name: "HTML5",
      },
      {
        id: "2",
        name: "CSS3",
      },
      {
        id: "3.1",
        name: "JavaScript",
      },
      {
        id: "3",
        name: "TypeScript",
      },
      {
        id: "4",
        name: "React.js",
      },
      {
        id: "4.11",
        name: "Framer Motion",
      },
      {
        id: "4.12",
        name: "XState",
      },
      {
        id: "4.2",
        name: "WebSocket",
      },
      {
        id: "4.3",
        name: "Rest API",
      },
      {
        id: "6",
        name: "React Query",
      },
    ],
  },
  {
    id: "8",
    title: "DevTech",
    description:
      "Led the development and supervised the frontend for an AI-driven process management system. Leveraged modern technologies, including GitHub Copilot to expedite development, improve code efficiency, productivity and CodeRabbit for AI-driven review processes. Developed and maintained a comprehensive suite of unit tests, enhancing code reliability and maintainability.",
    location: "Remote, Europe",
    startDate: new Date("01-11-2023"),
    endDate: new Date("01-04-2024"),
    iconSrc: `${LOGOS_IMG_PATH}/devtech.logo.webp`,
    technologies: [
      {
        id: "1",
        name: "HTML5",
      },
      {
        id: "2",
        name: "CSS3",
      },
      {
        id: "3.1",
        name: "JavaScript",
      },
      {
        id: "3",
        name: "TypeScript",
      },
      {
        id: "4",
        name: "React.js",
      },
      {
        id: "4.11",
        name: "Vite",
      },
      {
        id: "4.12",
        name: "Vitest",
      },
      {
        id: "4.13",
        name: "gRPC",
      },
      {
        id: "4.2",
        name: "Tailwind CSS",
      },
      {
        id: "4.3",
        name: "React Query",
      },
      {
        id: "6",
        name: "Mocha & Chai",
      },
      {
        id: "7",
        name: "React Testing Library",
      },
    ],
  },
  {
    id: "9",
    title: "Food and Agriculture Organization of the UN",
    description:
      "Leading the development of a high-performance geographical data visualization platform for a large-scale global organization, collaborating closely with cross-functional teams including back-end developers, UI/UX designers, machine learning engineers, researchers, product managers, and clients.",
    location: "Remote, Europe",
    startDate: new Date("01-02-2024"),
    endDate: "present",
    iconSrc: `${LOGOS_IMG_PATH}/fao.logo.png`,
    technologies: [
      {
        id: "1",
        name: "HTML5",
      },
      {
        id: "2",
        name: "CSS3",
      },
      {
        id: "2.1",
        name: "Sass",
      },
      {
        id: "3.1",
        name: "JavaScript",
      },
      {
        id: "3",
        name: "TypeScript",
      },
      {
        id: "4",
        name: "React.js",
      },
      {
        id: "4.1",
        name: "Next.js",
      },
      {
        id: "4.12",
        name: "Styled Components",
      },
      {
        id: "4.12",
        name: "Tailwind CSS",
      },
      {
        id: "4.13",
        name: "React Query",
      },
      {
        id: "4.11",
        name: "TerriaJS",
      },
      {
        id: "4.13",
        name: "Firebase",
      },
      {
        id: "5.1",
        name: "Google Cloud Platform",
      },
      {
          id: "5.13",
          name: "Docker",
        },
        {
          id: "5.14",
          name: "Kubernetes",
        },
        {
          id: "5.16",
          name: "Bitbucket Pipelines",
        },
        {
          id: "5.17",
          name: "GitHub Actions",
        },
        {
          id: "5.18",
          name: "Jasmine",
        },
    ],
  },
];

const sortByIdDesc = (a: ExperienceType, b: ExperienceType) =>
  Number(a.id) < Number(b.id) ? 1 : -1;

type ExperienceModuleProps = {};

const ExperienceModule: React.FC<ExperienceModuleProps> = () => {
  return (
    <Section
      data-testId="experience_module"
      id="experience"
      className="relative"
    >
      <div className="relative space-y-10">
        <Heading className="md:mx-auto flex items-center mb-20">
          Experience <img width={40} height={40} src={ok} alt="ok hand" />{" "}
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 max-w-[1024px] mx-auto">
          {experience.sort(sortByIdDesc).map((exp) => (
            <div
              key={exp.id}
              className="bg-secondary shadow-[0px_0px_30px_0px_white]"
            >
              <Experience {...exp} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceModule;
