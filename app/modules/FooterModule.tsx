import LOGO_ICON from "../../public/img/logos/secondary.logo.svg";
import Link from "~/components/Link";
import Logo from "~/components/Logo";
import Paragraph from "~/components/Paragraph";
import { links } from "./HeaderModule";
import { MEDIA_LINKS } from "~/utils/media";
import { ButtonLink } from "~/components/Button";

type FooterModuleProps = {};

const FooterModule: React.FC<FooterModuleProps> = () => {
  return (
    <section data-test-id="footer_module" className="bg-primary text-xs">
      <div className="relative p-10 overflow-hidden">
        <img
          className="absolute grayscale top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 opacity-5"
          width={500}
          height={500}
          src={LOGO_ICON}
          alt="logo background"
        />
        <div className="relative max-w-[1200px] mx-auto flex justify-between items-center">
          <Logo secondary />
          <div className="flex justify-between items-center">
            <div className="flex space-x-6 items-center">
              <Paragraph className="text-tertiary font-medium">
                Shortcut
              </Paragraph>
              {links.map((link) => (
                <Link
                  key={`${link.title}_${link.href}`}
                  title={link.title}
                  href={link.href}
                  secondary
                />
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-1">
            {MEDIA_LINKS.map((link) => (
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
      </div>
      <div className="bg-[#151522] p-4 flex justify-center items-center divide-x divide-tertiary">
        <Paragraph className="text-xs text-tertiary px-4">
          Copyrights 2022
        </Paragraph>
        <Paragraph className="text-xs text-tertiary px-4">
          Low & Privacy
        </Paragraph>
        <Paragraph className="text-xs text-tertiary px-4">
          Crafted by J&K Bros. Company
        </Paragraph>
      </div>
    </section>
  );
};

export default FooterModule;
