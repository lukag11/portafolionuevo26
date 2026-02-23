import React from "react";
import {
  SectionAboutusWrapper,
  ContainerAboutUs,
  ContainerGeneralAvatar,
  ContainerAvatar,
  AvatarImg,
  LabelItemPlayer,
  ContainerGeneralBio,
  ContainerPlayerTitle,
  PlayerTitle,
  PlayerLvlAge,
  StoryText,
  SubHeading,
  AttributesGrid,
  ContainerUserStat,
  StatLabel,
  ProgressBar,
  ProgressFill,
  ContainerCardFooter,
} from "./AboutusStyles";
import { SoftSkillsStat } from "../../data/softSkills";

const Aboutus = () => {
  return (
    <SectionAboutusWrapper>
      <ContainerAboutUs>
        {/* Contenedor lado izquiero avatar*/}
        <ContainerGeneralAvatar>
          <ContainerAvatar />

          <AvatarImg
            src="https://res.cloudinary.com/djyhwdmek/image/upload/v1771685082/player_photo_rmktqz.png"
            alt="Luca Giobanelli"
          />

          <LabelItemPlayer>
            &lt; PLAYER 01 &gt;
            <span>STATUS: READY</span>
          </LabelItemPlayer>
        </ContainerGeneralAvatar>

        {/* Contenedor derecho con historia y estadisticas */}
        <ContainerGeneralBio>
          <ContainerPlayerTitle>
            <PlayerTitle>PLAYER PROFILE</PlayerTitle>
            {/* Simulamos la edad  */}
            <PlayerLvlAge>LVL. 31</PlayerLvlAge>
          </ContainerPlayerTitle>

          <StoryText>
            <p>
              <SubHeading>&gt; ORIGIN_STORY:</SubHeading>
              Comencé mi formación desarrollando un sistema de gestión en Java
              como proyecto final de Analista en Sistemas, aplicando análisis y
              diseño de soluciones reales. Actualmente me especializo en
              desarrollo web fullstack, creando aplicaciones modernas que
              integran frontend, backend y bases de datos.
            </p>
            <p>
              <SubHeading>&gt; CURRENT_OBJECTIVE:</SubHeading>
              Estoy en búsqueda de mi primera experiencia en el ámbito
              profesional IT, con el compromiso de aportar responsabilidad,
              proactividad y una fuerte base en análisis y desarrollo. Mi meta
              es consolidarme como desarrollador fullstack, participando
              activamente en proyectos que representen desafíos técnicos reales.
            </p>
          </StoryText>

          {/* Renderizado dinámico de las Stats  - creamos arreglo de objetos nombre y valor en carpeta data */}
          <AttributesGrid>
            {SoftSkillsStat.map((stat, index) => (
              <ContainerUserStat key={index}>
                <StatLabel>{stat.name}</StatLabel>
                <ProgressBar>
                  <ProgressFill width={stat.value} />
                </ProgressBar>
              </ContainerUserStat>
            ))}
          </AttributesGrid>

          <ContainerCardFooter>
            ID: 884-21-X // INSERT COIN TO CONTINUE
          </ContainerCardFooter>
        </ContainerGeneralBio>
      </ContainerAboutUs>
    </SectionAboutusWrapper>
  );
};

export default Aboutus;
