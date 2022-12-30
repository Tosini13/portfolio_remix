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
    <div data-testId="experience" className="relative">
      <img
        className="absolute -top-10 -left-10 opacity-10 grayscale h-[80px]"
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
              className="ml-1 mt-1 rounded-full text-extra py-1.5 px-3 font-medium whitespace-nowrap"
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
