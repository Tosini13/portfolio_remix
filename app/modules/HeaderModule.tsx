import Link from "~/components/Link";

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
];

type HeaderModuleProps = {};

const HeaderModule: React.FC<HeaderModuleProps> = () => {
  return (
    <div data-test-id="header_module" className="flex w-full">
      {links.map((link) => (
        <Link
          key={`${link.title}_${link.href}`}
          title={link.title}
          href={link.href}
          className="ml-6"
        />
      ))}
    </div>
  );
};

export default HeaderModule;
