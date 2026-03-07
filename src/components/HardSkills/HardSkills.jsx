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

const HardSkills = () => {
  useScrollReveal(".skill-card");

  const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "JavaScript", icon: "📜" },
    { name: "TypeScript", icon: "📘" },
    { name: "SQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "CSS/Sass", icon: "🎨" },
    { name: "Docker", icon: "🐳" },
  ];
  return (
    <SectionhardSkillsWrapper>
      <TitleHardSkills>Weapon Loadout</TitleHardSkills>
      <ContainerSkills>
        {skills.map((skill, index) => (
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
