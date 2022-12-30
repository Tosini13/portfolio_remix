import Button, { ButtonLink } from "~/components/Button";
import wave from "../../public/img/icons/wave.svg";
import profilePhoto from "../../public/img/photos/jb_photo.png";
import logo from "../../public/img/logos/logo.svg";
import zutLogo from "../../public/img/logos/zut.logo.png";
import paCollegeLogo from "../../public/img/logos/paCollege_logo.png";
import doreaLogo from "../../public/img/logos/dorea.logo.png";
import mayerynLogo from "../../public/img/logos/mayeryn.logo.png";
import apptimiaLogo from "../../public/img/logos/apptimia.logo.png";
import brainlyLogo from "../../public/img/logos/brainly.logo.png";
import Paragraph from "~/components/Paragraph";
import { MEDIA_LINKS } from "~/utils/media";
import Slider from "~/components/Slider";
import Section from "~/components/Section";

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
];

type HomeModuleProps = {};

const HomeModule: React.FC<HomeModuleProps> = () => {
  return (
    <Section
      data-testId="home_module"
      id="home"
      className="max-w-[1024px] mx-auto space-y-12 -mt-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-6 lg:mt-20 order-2 mx-6 lg:mx-0">
          <h1 className="text-4xl font-medium leading-[3rem]">
            Hi.{" "}
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
            Do You need awwwwwwsome{" "}
            <span className="font-semibold">website</span>
            ?
            <br />
            Are You looking for professionalist{" "}
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
              <ButtonLink
                className="px-3"
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
              </ButtonLink>
            ))}
          </div>
        </div>
        <div className="relative pr-8 h-fit order-1 md:order-3">
          <img
            className="absolute opacity-30 -pr-8"
            width={"100%"}
            src={logo}
            alt="logo"
          />
          <img
            className="grayscale"
            width={"100%"}
            src={profilePhoto}
            alt="profile photo"
          />
          <div className="absolute top-1 left-0 w-full h-full shadow-[inset_0px_0px_50px_25px_white,inset_0px_-80px_100px_31px_white,inset_0px_-80px_150px_100px_rgb(255_255_255_/_40%)]" />
        </div>
      </div>
      <Slider items={logos} />
    </Section>
  );
};

// inset 0px 0px 50px 25px white, inset 0px -80px 100px 31px white, inset 0px -80px 150px 100px rgb(255 255 255 / 40%)

export default HomeModule;
