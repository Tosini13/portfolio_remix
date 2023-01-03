import React from "react";

type PopupPropsType = React.HTMLAttributes<HTMLDivElement> & {
  text: string;
};

const Popup: React.FC<PopupPropsType> = ({ children, text, ...props }) => {
  return (
    <div data-test-id="popup" className="group relative" {...props}>
      <>
        {children}
        <div
          className="opacity-0 animate group-hover:animate-popup absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full"
          style={{
            animationFillMode: "forwards",
          }}
        >
          <div className="relative py-2 px-4 rounded-md bg-tertiary text-secondary after:absolute after:top-0 after:-translate-y-full after:left-1/2 after:-translate-x-1/2 after:border-8 after:border-transparent after:border-b-tertiary">
            {text}
          </div>
        </div>
      </>
    </div>
  );
};

export default Popup;
