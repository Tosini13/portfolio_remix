import Button from "~/components/Button";
import Link from "~/components/Link";
import Logo from "~/components/Logo";

type TLinkType = {
  title: string;
  href: string;
};

const links: Array<TLinkType> = [
  {
    title: "home",
    href: "#home",
  },
  {
    title: "My story",
    href: "#myStory",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
  {
    title: "My projects",
    href: "#myProjects",
  },
  {
    title: "Skills & Experience",
    href: "#skillsAndExperience",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

type HeaderModuleProps = {};

const HeaderModule: React.FC<HeaderModuleProps> = () => {
  return (
    <div data-test-id="header_module" className="flex w-full items-center py-5">
      <Logo />
      <div className="ml-10 flex space-x-8 items-center">
        {links.map((link) => (
          <Link
            key={`${link.title}_${link.href}`}
            title={link.title}
            href={link.href}
          />
        ))}
      </div>
      <Button className="ml-auto">Let's meet</Button>
    </div>
  );
};

export default HeaderModule;
