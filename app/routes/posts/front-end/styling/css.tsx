import React from "react";
import MD_CSS from "~/posts/front-end/style/css.md";

type CSSPropsType = {};

const CSS: React.FC<CSSPropsType> = ({}) => {
  return (
    <div data-test-id="css">
      <MD_CSS />
    </div>
  );
};

export default CSS;
