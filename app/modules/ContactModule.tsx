import call from "../../public/img/icons/call.svg";
import github from "../../public/img/icons/github.svg";
import linkedIn from "../../public/img/icons/linkedIn.svg";
import instagram from "../../public/img/icons/instagram.svg";
import facebook from "../../public/img/icons/facebook.svg";
import telephone from "../../public/img/icons/telephone.svg";
import mail from "../../public/img/icons/mail.svg";
import Heading from "~/components/Heading";
import Button from "~/components/Button";
import Paragraph from "~/components/Paragraph";

const classNames = {
  headings: "uppercase text-sm text-tertiary font-semibold",
  sections: "space-y-4",
};

type ContactModuleProps = {};

const ContactModule: React.FC<ContactModuleProps> = ({}) => {
  return (
    <section data-test-id="contact_module" id="contact" className="space-y-10">
      <Heading className="flex items-center">
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
        <div className="flex space-x-2">
          <Button>Let's set up a call</Button>
          <Button>Let's text</Button>
        </div>
      </div>
      <div className={classNames.sections}>
        <h5 className={classNames.headings}>Email & phone number</h5>
        <div className="flex space-x-4">
          <Paragraph className="flex items-center">
            <img
              className="mr-2"
              height={20}
              width={20}
              src={mail}
              alt="e-mail icon"
            />
            <address className="underline">jbartos13@gmail.com</address>
          </Paragraph>
          <Paragraph className="flex items-center">
            <img
              className="mr-2"
              height={20}
              width={20}
              src={telephone}
              alt="e-mail icon"
            />
            <span className="underline">+48 696 993 916</span>
          </Paragraph>
        </div>
      </div>
      <div className={classNames.sections}>
        <h5 className={classNames.headings}>Social media</h5>
        <div className="flex space-x-2">
          <Button className="flex items-center">
            <img
              className="mr-2"
              height={20}
              width={20}
              src={github}
              alt="github icon"
            />
            Check my Github
          </Button>
          <Button className="flex items-center">
            <img
              className="mr-2"
              height={20}
              width={20}
              src={linkedIn}
              alt="github icon"
            />
            Find me on LinkedIn
          </Button>
          <Button className="flex items-center">
            <img
              className="mr-2"
              height={20}
              width={20}
              src={instagram}
              alt="github icon"
            />
            Don't forget about my IG
          </Button>
          <Button className="flex items-center">
            <img
              className="mr-2"
              height={20}
              width={20}
              src={facebook}
              alt="github icon"
            />
            Here is my FB
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactModule;
