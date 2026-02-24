import styled, { keyframes, css } from "styled-components";

import { Section } from "../UI/Section/Section.js";

// --- Animaciones ---

const fillBar = keyframes`
  from { width: 0; }
  to { width: 100%; } /* La anchura final la controla el contenedor padre */
`;

// Animacion para el hover status del player , con un efecto de parpadeo
const statusHover = keyframes`
  100% { color: var(--neon-orange); }
`;

// Instanciamos el section para reutilizar su estilo base
export const SectionAboutusWrapper = styled(Section)`
  padding: 50px 20px;
  font-family: "Rajdhani", sans-serif;
  box-sizing: border-box;
`;

// Contenedor Creado con display grid para dividir en dos columnas si le pusieramos un 1fr mas se dividiria en 3 columnas y asi suces.
export const ContainerAboutUs = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  width: 100%;
  max-width: 1300px;
  background: var(--glass-panel);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(0, 243, 255, 0.3);
  position: relative;
  box-shadow: 0 0 40px rgba(0, 0, 0, 1.5);

  /* Forma futurista (Clip Path) */
  clip-path: polygon(
    40px 0,
    100% 0,
    100% calc(100% - 40px),
    calc(100% - 40px) 100%,
    0 100%,
    0 40px
  );

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    clip-path: none;
    border-radius: 15px;
  }
`;

// Contenedor general de Avatar
export const ContainerGeneralAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 40px 20px;
  border-right: 3px dashed var(--text-dark);

  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid var(--text-dark);
    padding: 30px;
  }
`;

export const ContainerAvatar = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
`;

export const AvatarImg = styled.img`
  width: 60%;
  height: 60%;
  border-radius: 70%;
  border: 2px dashed var(--neon-pink);
  padding: 2px;
  object-fit: cover;
`;

export const LabelItemPlayer = styled.div`
  margin-top: 25px;
  font-family: "Orbitron", sans-serif;
  color: var(--neon-cyan);
  font-size: 0.8rem;
  letter-spacing: 2px;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 243, 255, 0.5);

  span {
    display: block;
    margin-top: 5px;
    color: #666;
    font-size: 0.7rem;
    animation: ${statusHover} 1.5s infinite alternate;
  }
`;

// Columna de la derecha con la bio y estadisticas de player
export const ContainerGeneralBio = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContainerPlayerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 25px;
  border-bottom: 2px solid var(--neon-pink);
  padding-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const PlayerTitle = styled.h1`
  font-family: "Orbitron", sans-serif;
  font-size: 2.5rem;
  margin: 0;
  text-transform: uppercase;
  background: linear-gradient(90deg, #fff, #ccc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const PlayerLvlAge = styled.span`
  font-family: "Orbitron", sans-serif;
  color: var(--neon-pink);
  font-size: 1.2rem;
  font-weight: bold;
`;

export const StoryText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ddd;
  margin-bottom: 45px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.6;
    padding: 5px;
  }
`;

// subtitlo mi historia y mi objetivo
export const SubHeading = styled.span`
  color: var(--neon-cyan);
  font-weight: 700;
  font-family: "Orbitron", monospace;
  font-size: 0.9rem;
  margin-right: 8px;

  @media (max-width: 768px) {
    font-weight: 800;
    font-size: 0.8rem;
  }
`;

// Creamos dos columnas con display grid asi podemos mostrar las stat de forma ordenada
export const AttributesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Contenedor para las estadisticas individuales
export const ContainerUserStat = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatLabel = styled.span`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
  color: var(--text-light);
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #222;
  border-radius: 4px;
  overflow: hidden;
`;

// Recibe la prop 'width' para saber cuánto llenarse
export const ProgressFill = styled.div`
  height: 100%;
  width: ${(props) => props.width || "0%"};
  background: var(--neon-green);
  box-shadow: 0 0 10px var(--secondary-neon);
  animation: ${fillBar} 1.5 ease-out forwards;
  // forwards para mantener el estado final y no volver a empezar nuevamente la animacion.

  // lo utilizamos para que la barra se llene desde 0 hasta el valor que le pasamos por props(softskills) y asi se vea mas dinamico)
  // a su vez seteamos el width a 0 por defecto asi hace un efecto;
  width: 0;
  animation: ${(props) => keyframes`
    from { width: 0; }
    to { width: ${props.width}; }
  `}
    5.5s ease-out forwards;
`;

// Footer de la card con el id, con animacion de parpadeo.
export const ContainerCardFooter = styled.div`
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-family: "Orbitron", sans-serif;
  font-size: 0.7rem;
  letter-spacing: 2px;
  animation: ${statusHover} 1.5s infinite alternate;

  @media (max-width: 768px) {
    position: relative;
    margin-top: 20px;
    right: 0;
    text-align: right;
  }
`;
