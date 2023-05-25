import { ISkill, TechnologiesBox } from "../../small/technologies-box";
import "./style.scss";
import { Title } from "../../small/title";

import React from "react";
interface ISkills {
  skills: ISkill[];
}

export const Skills = ({ skills }: ISkills) => {
  return (
    <section className="skills content">
      <Title>Skills</Title>
      <div>
        {skills.map(({ techIcon, techName }) => {
          return (
            <TechnologiesBox
              techIcon={techIcon}
              techName={techName}
              key={techName}
            />
          );
        })}
      </div>
    </section>
  );
};
