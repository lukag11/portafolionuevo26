import React, { useState, useEffect } from "react";
// Importamos todos los estilos desde el archivo JS que creamos arriba
import {
  ScoreContainer,
  ContainerHud,
  Soundbar,
  ContainerScrew,
  SpeakerUnit,
  HighScore,
  ContainerMainDisplay,
  ScoreNumber,
  ContainerUserInfo,
  Username,
  Userrole,
  Separator,
  ContainerMachineDisplay,
} from "./ScoreStyles";

const Scoreboard = () => {
  const [score, setScore] = useState(0);

  // Lógica del contador
  const targetScore = 19199407;
  const animationDuration = 2500;

  useEffect(() => {
    let startTime = null;
    let animationFrameId;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / animationDuration, 1);

      // Easing: Ease Out Quart
      const easeProgress = 1 - Math.pow(1 - progress, 4);

      const currentScore = Math.floor(easeProgress * targetScore);
      setScore(currentScore);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const formattedScore = new Intl.NumberFormat("en-US").format(score);

  return (
    <ScoreContainer>
      <ContainerMachineDisplay>
        <ContainerHud>
          {/* L-Speaker */}
          <Soundbar>
            <ContainerScrew corner="top-left" />
            <ContainerScrew corner="bottom-right" />
            <ContainerScrew corner="top-right" />
            <ContainerScrew corner="bottom-left" />
            <SpeakerUnit />
            <SpeakerUnit />
            <SpeakerUnit />
          </Soundbar>

          {/* Pantalla Central */}
          <ContainerMainDisplay>
            <HighScore>HIGH SCORE</HighScore>

            <ScoreNumber>{formattedScore}</ScoreNumber>

            <ContainerUserInfo>
              <Username>Luca Giobanelli</Username>
              <Userrole>
                Analista de Sistemas <Separator>&&</Separator> Desarrollador Web
                Fullstack
              </Userrole>
            </ContainerUserInfo>
          </ContainerMainDisplay>

          {/* R-Speaker */}
          <Soundbar>
            <ContainerScrew corner="top-left" />
            <ContainerScrew corner="bottom-right" />
            <ContainerScrew corner="top-right" />
            <ContainerScrew corner="bottom-left" />
            <SpeakerUnit />
            <SpeakerUnit />
            <SpeakerUnit />
          </Soundbar>
        </ContainerHud>
      </ContainerMachineDisplay>
    </ScoreContainer>
  );
};

export default Scoreboard;
