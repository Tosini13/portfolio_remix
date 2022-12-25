import logo from "../../public/img/logo/logo.svg";

type LogoProps = {};

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <div data-test-id="logo" className="flex items-center">
      <img src={logo} alt="logo" />
      <h1 className="ml-1 font-semibold">Jakub Bartosik</h1>
    </div>
  );
};

export default Logo;
