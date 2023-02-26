import LOGO_ICON from "../../public/img/logos/secondary.logo.svg";
import Link from "~/components/Link";
import Logo from "~/components/Logo";
import Paragraph from "~/components/Paragraph";
import { links } from "./HeaderModule";
import { EMAIL_ADDRESS, MEDIA_LINKS, PHONE_NUMBER } from "~/utils/media";
import { ButtonIconLink } from "~/components/Button";

const ICONS_IMG_PATH = "/img/icons";

type FooterModuleProps = {};

const FooterModule: React.FC<FooterModuleProps> = () => {
  return (
    <footer data-testId="footer_module" className="bg-primary text-xs">
      <div className="relative p-10 overflow-hidden">
        <img
          className="absolute grayscale top-1/2 left-0 -translate-y-1/2 -translate-x-1/3 opacity-5"
          width={500}
          height={500}
          src={LOGO_ICON}
          alt="logo background"
        />
        <div className="relative max-w-theme mx-auto flex flex-wrap justify-between items-center">
          <div className="md:mb-2 mx-auto sm:mx-0">
            <Logo secondary />
          </div>
          <div className="mb-2 md:flex justify-between items-center hidden">
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
          <div className="mb-2 sm:flex items-center space-x-1 flex-wrap hidden">
            {MEDIA_LINKS.map((link) => (
              <ButtonIconLink key={link.id} href={link.href} target="_blank">
                <img
                  height={20}
                  width={20}
                  src={link.iconSrc}
                  alt={"media icon"}
                />
              </ButtonIconLink>
            ))}
            <ButtonIconLink className="px-3" href={`mailto:${EMAIL_ADDRESS}`}>
              <img
                height={20}
                width={20}
                src={`${ICONS_IMG_PATH}/mail.secondary.icon.svg`}
                alt={"mail icon"}
              />
            </ButtonIconLink>
            <ButtonIconLink
              href={`https://wa.me/${PHONE_NUMBER}`}
              target={"_blank"}
              rel="noreferrer"
            >
              <img
                height={20}
                width={20}
                src={`${ICONS_IMG_PATH}/telephone.secondary.icon.svg`}
                alt={"phone icon"}
              />
            </ButtonIconLink>
          </div>
        </div>
      </div>
      <div className="bg-[#151522] p-4 flex justify-center items-center divide-x divide-tertiary text-xs text-tertiary text-center">
        <Paragraph className="px-4 leading-4">Copyrights 2022</Paragraph>
        <Paragraph className="px-4 leading-4">Low & Privacy</Paragraph>
        <Paragraph className="px-4 leading-4">
          Crafted by J&K Bros. Company
        </Paragraph>
      </div>
    </footer>
  );
};

export default FooterModule;
