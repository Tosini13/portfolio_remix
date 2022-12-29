import React from "react";
import type { LogoType } from "~/modules/HomeModule";

let count = 1;

type SliderProps = {
  items: Array<LogoType>;
};

const Slider: React.FC<SliderProps> = ({ items }) => {
  return (
    <div data-test-id="slider" className="relative overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="w-[200%] h-20 overflow-hidden relative">
          <div className="w-[200%] flex items-center h-20 justify-around absolute left-0 animate-banner-scroll gap-1 animate">
            <SliderItems items={items} />
            <SliderItems items={items} />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full shadow-[0px_0px_30px_20px_white,_0px_0px_15px_10px_white,_0px_0px_4px_5px_white]" />
      <div className="absolute top-0 right-0 h-full shadow-[0px_0px_30px_20px_white,_0px_0px_15px_10px_white,_0px_0px_4px_5px_white]" />
    </div>
  );
};

export default Slider;

type SliderItemsProps = {
  items: Array<LogoType>;
};

const SliderItems: React.FC<SliderItemsProps> = ({ items }) => {
  return (
    <React.Fragment data-test-id="slider_items">
      {items.map((item) => {
        return (
          <div key={item.id} className="flex justify-center items-start">
            <img
              className="grayscale h-fit hover:grayscale-0 transition-all duration-300"
              src={item.src}
              alt={item.alt}
            />
          </div>
        );
      })}
    </React.Fragment>
  );
};
