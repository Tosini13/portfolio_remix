import { twMerge } from "tailwind-merge";

type THamburgerButtonProps = {
  onClick: () => void;
  open?: boolean;
};

const HamburgerButton: React.FC<THamburgerButtonProps> = ({
  onClick,
  open = false,
}) => {
  const topStyle = twMerge(
    "w-2/3 m-auto border-b-2 border-secondary transition duration-300 ease-out",
    open ? "w-full translate-y-1.5  rotate-45" : ""
  );

  const centerStyle = twMerge(
    "w-full max-w-full border-b-2 border-secondary transition-all duration-300 ease-out",
    open ? "max-w-0" : ""
  );

  const bottomStyle = twMerge(
    "w-2/3 m-auto border-b-2 border-secondary transition duration-300 ease-out",
    open ? "w-full -translate-y-1.5  -rotate-45" : ""
  );

  return (
    <div
      data-testId="hamburger-button"
      onClick={onClick}
      className="w-[25px] cursor-pointer space-y-1 no-focus"
    >
      <div className={topStyle} />
      <div className={centerStyle} />
      <div className={bottomStyle} />
    </div>
  );
};

export default HamburgerButton;
