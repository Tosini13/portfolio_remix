import React from "react";
import MD_Classes from "~/posts/front-end/javascript/classes.md";

type ClassesPropsType = {};

const Classes: React.FC<ClassesPropsType> = ({}) => {
  return (
    <div data-test-id="classes">
      <MD_Classes />
    </div>
  );
};

export default Classes;
