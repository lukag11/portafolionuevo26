import React from "react";
import {
  SectionhardSkillsWrapper,
  TitleHardSkills,
  IconSkill,
  NameSkill,
  ContainerSkills,
  CardSkill,
} from "./HardSkillsStyles";
import { useScrollReveal } from "../../hook/useScrollReveal";
import { HardSkillsStat } from "../../data/hardSkills";

const HardSkills = () => {
  useScrollReveal(".skill-card");

  return (
    <SectionhardSkillsWrapper>
      <TitleHardSkills>Weapon Loadout</TitleHardSkills>
      <ContainerSkills>
        {/* //Importamos las habilidades desde un archivo de datos y lo
        renderizamos, seria mapeado para que sea mas dinamico */}
        {HardSkillsStat.map((skill, index) => (
          <CardSkill key={index} className="skill-card">
            <IconSkill className="icon">{skill.icon}</IconSkill>
            <NameSkill className="name">{skill.name}</NameSkill>
          </CardSkill>
        ))}
      </ContainerSkills>
    </SectionhardSkillsWrapper>
  );
};

export default HardSkills;
