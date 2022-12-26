import Heading from "~/components/Heading";
import Paragraph from "~/components/Paragraph";
import MSG_ICON from "../../public/img/icons/msg.svg";

type TestimonialsProps = {};

const Testimonials: React.FC<TestimonialsProps> = () => {
  return (
    <section
      data-test-id="testimonials"
      id="testimonials"
      className="max-w-[1000px] mx-auto space-y-6"
    >
      <Heading className="mx-auto flex items-center after:w-full">
        Testimonials{" "}
        <img
          className="ml-2"
          width={40}
          height={40}
          src={MSG_ICON}
          alt="message icon"
        />{" "}
      </Heading>
      <Paragraph
        className={`relative before:content-['"'] before:absolute before:text-[250px] before:top-20 before:-left-5 before:opacity-10`}
      >
        I had the pleasure of working with Jakub for a year on our frontend
        engineering team at Brainly. During this time, he consistently
        demonstrated a strong skill set in migrating and creating React
        components, unit testing, and storybooks. Additionally, Jakub had a good
        understanding of E2E tests using Cypress and Cucumber and had experience
        with GraphQL and Apollo. What really impressed me about Jakub was his
        ability to effectively communicate and collaborate with the rest of the
        team. He has a positive attitude and is always willing to help out and
        contribute to the success of the team. I highly recommend Jakub for any
        mid-frontend engineering position. His technical abilities and
        team-oriented approach make him a valuable asset to any organization.
      </Paragraph>
      <Paragraph className="font-bold">
        Radosław Warish <br />{" "}
        <span className="text-tertiary">from Brainly</span>
      </Paragraph>
    </section>
  );
};

export default Testimonials;
