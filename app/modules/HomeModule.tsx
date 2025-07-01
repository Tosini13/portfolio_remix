import { ButtonIconLink, ButtonLink } from "~/components/Button";
import Paragraph from "~/components/Paragraph";
import Section from "~/components/Section";
import Slider from "~/components/Slider";
import { MEDIA_LINKS } from "~/utils/media";
import wave from "../../public/img/icons/wave.svg";
import apptimiaLogo from "../../public/img/logos/apptimia.logo.png";
import brainlyLogo from "../../public/img/logos/brainly.logo.png";
import devtechLogo from "../../public/img/logos/devtech.logo.webp";
import doreaLogo from "../../public/img/logos/dorea.logo.png";
import faoLogo from "../../public/img/logos/fao.logo.png";
import un7Logo from "../../public/img/logos/keydrop.logo.svg";
import mayerynLogo from "../../public/img/logos/mayeryn.logo.png";
import paCollegeLogo from "../../public/img/logos/paCollege.logo.png";
import zutLogo from "../../public/img/logos/zut.logo.png";
import profilePhoto from "../../public/img/photos/jb_tag.photo.png";

export type LogoType = {
  id: string;
  src: string;
  alt: string;
};

const logos: Array<LogoType> = [
  {
    id: "zut",
    src: zutLogo,
    alt: "zut logo",
  },
  {
    id: "paCollege",
    src: paCollegeLogo,
    alt: "paCollege logo",
  },
  {
    id: "dorea",
    src: doreaLogo,
    alt: "dorea logo",
  },
  {
    id: "mayeryn",
    src: mayerynLogo,
    alt: "mayeryn logo",
  },
  {
    id: "apptimia",
    src: apptimiaLogo,
    alt: "apptimia logo",
  },
  {
    id: "brainly",
    src: brainlyLogo,
    alt: "brainly logo",
  },
  {
    id: "un7",
    src: un7Logo,
    alt: "un7 logo",
  },
  {
    id: "devtech",
    src: devtechLogo,
    alt: "devtech logo",
  },
  
  {
    id: "fao",
    src: faoLogo,
    alt: "fao logo",
  },
];

type HomeModuleProps = {};

const HomeModule: React.FC<HomeModuleProps> = () => {
  return (
    <Section
      data-testId="home_module"
      id="home"
      className="max-w-[1024px] mx-auto space-y-20 -mt-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-6 lg:mt-20 order-2 mx-6 lg:mx-0">
          <h1 className="text-home-heading font-medium leading-[3rem]">
            Hi!{" "}
            <img
              className="inline"
              width={40}
              height={40}
              src={wave}
              alt="waving hand"
            />
            <br /> My name is{" "}
            <span title="Kuba is a short name of Jakub" className="text-extra">
              Kuba
            </span>{" "}
            and I’m <span className="text-extra">software developer</span>.
          </h1>
          <Paragraph>
            Do you need awwwwwwsome{" "}
            <span className="font-semibold">website</span>
            ?
            <br />
            Are you looking for professionalist{" "}
            <span className="font-semibold">developer</span>
            <br />
            and hyperfriendly <span className="font-semibold">co-worker</span>?
          </Paragraph>
          <ButtonLink
            href="#experience"
            className="block bg-extra hover:bg-extra-light w-full md:w-fit text-center"
          >
            Check my skills & experience
          </ButtonLink>
          <div className="flex flex-wrap items-center space-x-2 justify-center md:justify-start">
            {MEDIA_LINKS.filter((link) =>
              ["github", "linkedIn", "insta"].includes(link.id)
            ).map((link) => (
              <ButtonIconLink
                className="px-4"
                key={link.id}
                href={link.href}
                target="_blank"
              >
                <img
                  height={20}
                  width={20}
                  src={link.iconSrc}
                  alt={"media icon"}
                />
              </ButtonIconLink>
            ))}
          </div>
        </div>
        <div className="relative pr-8 h-fit order-1 md:order-3">
          <img width={"100%"} src={profilePhoto} alt="profile photo" />
        </div>
      </div>
      <Slider items={logos} />
    </Section>
  );
};

export default HomeModule;
