import Experience, { ExperienceType } from "~/components/Experience";
import Heading from "~/components/Heading";
import ok from "../../public/img/icons/ok.svg";
import steps from "../../public/img/photos/steps.svg";

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
    iconSrc: `${LOGOS_IMG_PATH}/zut_logo.png`,
  },
  {
    id: "2",
    title: "P.A. College",
    description: "",
    location: "Larnaca, Cyprus",
    startDate: new Date("10-01-2018"),
    endDate: new Date("05-20-2019"),
    technologies: [],
    iconSrc: `${LOGOS_IMG_PATH}/paCollege_logo.png`,
  },
  {
    id: "3",
    title: "DOREA Educational Institute",
    description:
      "2 months Internship. I was Developing and taking care of website with WordPress. Improving skills in PHP (Ajax, Bootstrap). Improving knowledge about SEO.",
    location: "Larnaca, Cyprus",
    startDate: new Date("06-01-2019"),
    endDate: new Date("07-30-2019"),
    iconSrc: `${LOGOS_IMG_PATH}/dorea_logo.png`,
    technologies: [
      {
        id: "1",
        name: "Wordpress",
      },
      {
        id: "2",
        name: "HTML",
      },
      {
        id: "3",
        name: "CSS",
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
    iconSrc: `${LOGOS_IMG_PATH}/mayeryn_logo.png`,
    technologies: [
      {
        id: "1",
        name: "Wordpress",
      },
      {
        id: "2",
        name: "HTML",
      },
      {
        id: "3",
        name: "CSS",
      },
      {
        id: "4",
        name: "JavaScript",
      },
    ],
  },
  {
    id: "5",
    title: "Apptimia",
    description:
      "I worked with 8-person team, where most members of the team where based in California, to create website for resources' management. Added new features to complex UI with React components, wrote E2E and unit tests, helped on back end with creating GraphQl queries.",
    location: "Szczecin, Poland",
    startDate: new Date("07-01-2020"),
    endDate: new Date("09-30-2021"),
    iconSrc: `${LOGOS_IMG_PATH}/apptimia_logo.png`,
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
    ],
  },
  {
    id: "6",
    title: "Brainly",
    description:
      "I worked with 7-person team to migrate brainly website for a few markets. Brainly has its own website for students, to give accessibility to improve knowledge or help with understanding subjects at school. Migrated and created React components, wrote e2e and unit tests, improved CI/CD (GitHub actions). I also took part in React Miami conference in April 2022, where I could get to know newest technologies.",
    location: "Barcelona, Spain",
    startDate: new Date("01-01-2022"),
    endDate: new Date("12-30-2022"),
    iconSrc: `${LOGOS_IMG_PATH}/brainly_logo.png`,
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
        id: "3.1",
        name: "JavaScript",
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
        id: "4.1",
        name: "Brainiac",
      },
      {
        id: "4.2",
        name: "GraphQl",
      },
      {
        id: "4.3",
        name: "JScodeShift",
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
    ],
  },
];

type ExperienceModuleProps = {};

const ExperienceModule: React.FC<ExperienceModuleProps> = () => {
  return (
    <section
      data-test-id="experience_module"
      id="experience"
      className="relative mx-6 lg:mx-0"
    >
      {/**
       * @todo add the img to background with repeat in whole height
       */}
      <img
        className="absolute top-0 left-1/2 -translate-x-1/2"
        src={steps}
        alt="steps"
      />
      <div className="relative space-y-10">
        <Heading className="mx-left md:mx-auto flex items-center mb-20">
          Experience <img width={40} height={40} src={ok} alt="ok hand" />{" "}
        </Heading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20 max-w-[1100px] mx-auto">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-secondary shadow-[0px_0px_30px_0px_white]"
            >
              <Experience {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceModule;
