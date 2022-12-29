import Button, { ButtonLink } from "~/components/Button";
import wave from "../../public/img/icons/wave.svg";
import profilePhoto from "../../public/img/photos/jb_photo.png";
import logo from "../../public/img/logos/logo.svg";
import zutLogo from "../../public/img/logos/zut_logo.png";
import paCollegeLogo from "../../public/img/logos/paCollege_logo.png";
import doreaLogo from "../../public/img/logos/dorea_logo.png";
import mayerynLogo from "../../public/img/logos/mayeryn_logo.png";
import apptimiaLogo from "../../public/img/logos/apptimia_logo.png";
import brainlyLogo from "../../public/img/logos/brainly_logo.png";
import Paragraph from "~/components/Paragraph";
import { MEDIA_LINKS } from "~/utils/media";
import Slider from "~/components/Slider";

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
    <section
      data-test-id="home_module"
      id="home"
      className="max-w-[1100px] mx-auto space-y-12"
    >
      <div className="grid grid-cols-2">
        <div className="space-y-6 lg:mt-20">
          <h1 className="text-5xl font-medium">
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
          <Button className="bg-extra hover:bg-extra-light">
            Check my skills & experience
          </Button>
          <div className="flex items-center space-x-2">
            {MEDIA_LINKS.filter((link) =>
              ["github", "linkedIn", "insta", "fb"].includes(link.id)
            ).map((link) => (
              <ButtonLink className="px-3" key={link.id} href={link.href}>
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
        <div className="relative pr-8 h-fit">
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
          <div className="absolute top-0 left-0 w-full h-full shadow-[inset_0px_0px_50px_25px_white,inset_0px_-80px_100px_31px_white,inset_0px_-80px_150px_100px_rgb(255_255_255_/_40%)]" />
        </div>
      </div>
      {/* <div className="flex justify-between items-center overflow-hidden"> */}
      <Slider items={logos} />
      {/* </div> */}
    </section>
  );
};

// inset 0px 0px 50px 25px white, inset 0px -80px 100px 31px white, inset 0px -80px 150px 100px rgb(255 255 255 / 40%)

export default HomeModule;
