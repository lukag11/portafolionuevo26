import React from "react";
import {
  Badge,
  ContentCard,
  ImgCard,
  CardMission,
  TitleCard,
  ContainerProjects,
  SectionMyProjectsWrapper,
  TechStack,
  TitleSectionProjects,
} from "./MyProjectsStyles";
import { projects } from "../../data/projects";
import LaunchButton from "../UI/ButtonLaunch/LaunchButton";

const MyProjects = () => {
  return (
    <SectionMyProjectsWrapper>
      <TitleSectionProjects>Select Mission</TitleSectionProjects>
      <ContainerProjects>
        {projects.map((proj, i) => (
          <CardMission key={i}>
            <ImgCard>
              <img src={proj.img} alt={proj.title} />
            </ImgCard>
            <ContentCard>
              <TitleCard>{proj.title}</TitleCard>
              <p style={{ color: "#aaa", fontSize: "0.9rem" }}>{proj.desc}</p>
              <TechStack>
                {proj.tech.map((t, index) => (
                  <Badge key={index}>{t}</Badge>
                ))}
              </TechStack>
              <LaunchButton>Launch Mission</LaunchButton>
            </ContentCard>
          </CardMission>
        ))}
      </ContainerProjects>
    </SectionMyProjectsWrapper>
  );
};

export default MyProjects;
