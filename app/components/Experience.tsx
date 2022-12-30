import Paragraph from "./Paragraph";
import { TechnologyType } from "./Project";
import LOCATION_ICON from "../../public/img/icons/location.svg";
import React from "react";

export type ExperienceType = {
  id: string;
  title: string;
  description: string;
  iconSrc: string;
  startDate: Date;
  endDate: Date | "present";
  location: string;
  technologies: Array<TechnologyType>;
};

type ExperienceProps = ExperienceType;

const Experience: React.FC<ExperienceProps> = ({
  title,
  description,
  iconSrc,
  startDate,
  endDate,
  location,
  technologies,
}) => {
  return (
    <div
      data-testId="experience"
      className="relative rounded-lg group hover:shadow-[0px_5px_30px_rgba(0,_0,_0,_0.08)] p-10 pb-4 transition-all duration-300"
    >
      <img
        className="absolute top-2 left-2 opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all duration-300 h-[80px]"
        src={iconSrc}
        height={200}
        alt={`${title} logo`}
      />
      <div className="space-y-2">
        <h3 className="text-xl font-medium">{title}</h3>
        <Paragraph className="flex items-center font-normal text-tertiary">
          {`${startDate.toLocaleString("default", {
            month: "long",
            year: "numeric",
          })} - ${
            endDate === "present"
              ? endDate
              : endDate.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })
          }`}{" "}
          <img
            className="ml-2"
            width={20}
            height={20}
            src={LOCATION_ICON}
            alt="location icon"
          />{" "}
          <span className="font-light">{location}</span>
        </Paragraph>
        <Paragraph>{description}</Paragraph>
        <div className="flex flex-wrap items-center">
          {technologies.map((technology) => (
            <div
              key={technology.id}
              className="ml-1 mt-1 rounded-full md:bg-secondary md:text-extra py-1.5 px-3 font-medium whitespace-nowrap
              group-hover:bg-extra group-hover:text-secondary transition-all duration-600 hover-none:bg-extra hover-none:text-secondary"
            >
              {technology.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
