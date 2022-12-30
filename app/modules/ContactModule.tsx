import call from "../../public/img/icons/call.svg";
import telephone from "../../public/img/icons/telephone.svg";
import mail from "../../public/img/icons/mail.svg";
import Heading from "~/components/Heading";
import { ButtonLink } from "~/components/Button";
import Paragraph from "~/components/Paragraph";
import { EMAIL_ADDRESS, MEDIA_LINKS, PHONE_NUMBER } from "~/utils/media";
import Section from "~/components/Section";

const classNames = {
  headings: "uppercase text-sm text-tertiary font-semibold",
  sections: "space-y-4",
};

const MEDIA_BUTTONS_TEXT = new Map();
MEDIA_BUTTONS_TEXT.set("github", "Check my Github");
MEDIA_BUTTONS_TEXT.set("linkedIn", "Find me on LinkedIn");
MEDIA_BUTTONS_TEXT.set("insta", "Don't forget about my IG");

type ContactModuleProps = {};

const ContactModule: React.FC<ContactModuleProps> = ({}) => {
  return (
    <Section data-testId="contact_module" id="contact" className="space-y-10">
      <Heading className="md:mx-auto flex items-center">
        Contact{" "}
        <img
          className="ml-2"
          width={40}
          height={40}
          src={call}
          alt="call hand"
        />{" "}
      </Heading>
      <div className={classNames.sections}>
        <h5 className={classNames.headings}>Do you want to meet?</h5>
        <div className="flex flex-col md:flex-row items-start space-x-0 md:space-x-2 space-y-2 md:space-y-0">
          <ButtonLink href={"https://meet.google.com/"} target={"_blank"}>
            Let's set up a call
          </ButtonLink>
          <ButtonLink
            className="ml-auto"
            href={`https://wa.me/${PHONE_NUMBER}`}
            target={"_blank"}
            rel="noreferrer"
            secondary
          >
            Let's text
          </ButtonLink>
        </div>
      </div>
      <div className={classNames.sections}>
        <h5 className={classNames.headings}>Email & phone number</h5>
        <div className="flex flex-wrap">
          <a href={`mailto:${EMAIL_ADDRESS}`}>
            <Paragraph className="flex items-center whitespace-nowrap mr-4 mb-2">
              <img
                className="mr-2"
                height={20}
                width={20}
                src={mail}
                alt="e-mail icon"
              />
              <address className="underline">jbartos13@gmail.com</address>
            </Paragraph>
          </a>
          <a
            href={`https://wa.me/${PHONE_NUMBER}`}
            target={"_blank"}
            rel="noreferrer"
          >
            <Paragraph className="flex items-center whitespace-nowrap mr-4 mb-2">
              <img
                className="mr-2"
                height={20}
                width={20}
                src={telephone}
                alt="e-mail icon"
              />
              <span className="underline">+48 696 993 916</span>
            </Paragraph>
          </a>
        </div>
      </div>
      <div className={classNames.sections}>
        <h5 className={classNames.headings}>Social media</h5>
        <div className="flex flex-wrap">
          {MEDIA_LINKS.filter((link) =>
            ["github", "linkedIn", "insta"].includes(link.id)
          ).map((link) => (
            <ButtonLink
              className="flex items-center mr-2 mb-2"
              href={link.href}
              target="_blank"
            >
              <img
                className="mr-2"
                height={20}
                width={20}
                src={link.iconSrc}
                alt="github icon"
              />
              {MEDIA_BUTTONS_TEXT.get(link.id)}
            </ButtonLink>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ContactModule;
