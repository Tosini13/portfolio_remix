import Button from "~/components/Button";
import wave from "../../public/img/icons/wave.svg";
import profilePhoto from "../../public/img/photos/jb_photo.png";
import zutLogo from "../../public/img/logos/zut_logo.png";
import paCollegeLogo from "../../public/img/logos/paCollege_logo.png";
import doreaLogo from "../../public/img/logos/dorea_logo.png";
import mayerynLogo from "../../public/img/logos/mayeryn_logo.png";
import apptimiaLogo from "../../public/img/logos/apptimia_logo.png";
import brainlyLogo from "../../public/img/logos/brainly_logo.png";

const imgClassName = "grayscale hover:grayscale-0 transition-all duration-300";

type HomeModuleProps = {};

const HomeModule: React.FC<HomeModuleProps> = () => {
  return (
    <div data-test-id="home_module">
      <div className="grid grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-5xl font-medium">
            Hi.{" "}
            <img
              className="inline"
              width={40}
              height={40}
              src={wave}
              alt="waving hand"
            />
            <br /> My name is <span className="text-extra">Kuba</span> and I’m{" "}
            <span className="text-extra">software developer</span>.
          </h1>
          <p className="leading-8 font-light">
            Do You need awwwwwwsome{" "}
            <span className="font-semibold">website</span>
            ?
            <br />
            Are You looking for professionalist{" "}
            <span className="font-semibold">developer</span>
            <br />
            and hyperfriendly <span className="font-semibold">co-worker</span>?
          </p>
          <Button>Check my skills & experience</Button>
        </div>
        <div className="relative">
          <img
            className="grayscale"
            width={"100%"}
            src={profilePhoto}
            alt="profile photo"
          />
          <div className="absolute top-0 left-0 w-full h-full shadow-[inset_0px_0px_50px_25px_white,inset_0px_-80px_100px_31px_white,inset_0px_-80px_150px_100px_rgb(255_255_255_/_40%)]" />
        </div>
      </div>
      <div className="flex justify-between">
        <img className={imgClassName} src={zutLogo} alt="zut logo" />
        <img
          className={imgClassName}
          src={paCollegeLogo}
          alt="PA College logo"
        />
        <img className={imgClassName} src={doreaLogo} alt="ZUT logo" />
        <img className={imgClassName} src={mayerynLogo} alt="Mayeryn logo" />
        <img className={imgClassName} src={apptimiaLogo} alt="Apptimia logo" />
        <img className={imgClassName} src={brainlyLogo} alt="Brainly logo" />
      </div>
    </div>
  );
};

// inset 0px 0px 50px 25px white, inset 0px -80px 100px 31px white, inset 0px -80px 150px 100px rgb(255 255 255 / 40%)

export default HomeModule;
