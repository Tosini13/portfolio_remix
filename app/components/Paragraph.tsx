const Paragraph: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => {
  return (
    <p data-test-id="paragraph" {...props} className="leading-8 font-light" />
  );
};

export default Paragraph;
