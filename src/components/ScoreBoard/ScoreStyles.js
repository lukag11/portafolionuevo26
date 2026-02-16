import styled, { keyframes, css } from "styled-components";

// Animacion que le hacemos a los parlantes SpeakerUnit para que tengan un efecto de movimiento de audio
const audioBass = keyframes`
  0% { transform: scale(0.95); box-shadow: 0 0 5px #ff0055; opacity: 0.9; }
  100% { transform: scale(1.05); box-shadow: 0 0 25px #ff0055; opacity: 1; }
`;

const fadeInUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

// TIPO SCAN ESCANEO PARA HUD CONTAINER
const scanlinehud = keyframes`
  0% { top: -0%; }
  100% { top: 95%; }
`;

const scanlinehudMobile = keyframes`
  0% { top: 20%; }
  100% { top: 80%; }
`;

// --- Componentes Estilizados ---

export const ScoreContainer = styled.div`
  //Fuente para los numeros
  @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@500;900&family=Rajdhani:wght@400;600;700&display=swap");

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  font-family: "Rajdhani", sans-serif;
  color: white;
  box-sizing: border-box;
`;

export const ContainerMachineDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 950px;
  border: 15px solid #1a1a1a;
`;

export const ContainerHud = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 100px; /* Parlante - Pantalla - Parlante */
  gap: 20px;
  width: 100%;
  max-width: 950px;
  height: 500px;
  padding: 40px;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: var(--border-tech);
  box-shadow: 0 0 50px rgba(0, 243, 255, 0.15);
  position: relative;
  border: 10px solid black;

  // Linea escaner para el hud container y contiene keyframes para la animacion del escaneo
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 160px;
    width: 65%;
    height: 6px;
    background: linear-gradient(
      0deg,
      transparent,
      var(--primary-neon),
      transparent
    );
    opacity: 0.7;
    animation: ${scanlinehud} 6s linear infinite;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    /* border: 1px solid green; */

    &::before {
      top: 0;
      left: 0px;
      width: 100%;
      animation: ${scanlinehudMobile} 6s linear infinite;
    }
  }
`;

// Barra de sonido con movimiento de audio
export const Soundbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://res.cloudinary.com/djyhwdmek/image/upload/v1770754120/fondo_parlante_wajyn7.webp");
  opacity: 70%;
  filter: brightness(120%);
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  min-height: 100px;

  @media (max-width: 768px) {
    flex-direction: row;
    margin: 30px;
    width: 100%;
    min-height: 60px;
    border-radius: 0px;
  }
`;

// Contenedor Tornillos de los parlantes
export const ContainerScrew = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #fff, #555);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
  z-index: 10;
  border: 1px solid #222;

  // Ranura  del tornillo
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 70%;
    height: 2px;
    background-color: #222;
  }

  /* Props creada para la posicion del tornillo ya sea superior izquierda o derecha dependiendo */
  ${(props) =>
    props.corner === "bottom-right" &&
    css`
      bottom: 3px;
      right: 3px;
    `}
  ${(props) =>
    props.corner === "top-left" &&
    css`
      top: 3px;
      left: 3px;
    `}

      ${(props) =>
    props.corner === "bottom-left" &&
    css`
      bottom: 3px;
      left: 3px;
    `}
  ${(props) =>
    props.corner === "top-right" &&
    css`
      top: 3px;
      right: 3px;
    `}
`;

// Parlantes de barra de sonido
export const SpeakerUnit = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid var(--primary-neon);
  box-shadow: 0 0 10px var(--secondary-neon);
  position: relative;
  animation: ${audioBass} 1s infinite alternate;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    height: 40%;
    background: var(--secondary-neon);
    border-radius: 50%;
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

// MENU DISPLAY PINBALL
export const ContainerMainDisplay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
  }
`;

// PUNTAJE HIGH SCORE
export const HighScore = styled.div`
  font-family: "Exo 2", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 80px;
  letter-spacing: 4px;
  color: var(--secondary-neon);
  margin-bottom: 25px;
  text-shadow: 0 0 10px var(--neon-pink);

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

// Puntaje Numero
export const ScoreNumber = styled.h1`
  font-family: "Orbitron", sans-serif;
  font-size: 5rem;
  font-weight: 900;
  margin: 0;
  padding: 10px;
  background: linear-gradient(180deg, #fc466b 30%, #aaddff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 15px rgba(0, 243, 255, 0.6));

  @media (max-width: 768px) {
    font-size: 2.5rem;
    border: 1px solid var(--text-light);
  }
`;

// Contenedor Nombre y Apellido + Rol
export const ContainerUserInfo = styled.div`
  margin-top: 25px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  width: 100%;
  animation: ${fadeInUp} 1s ease-out forwards;
  opacity: 0;
`;

// Texto Nombre y Apellido
export const Username = styled.h2`
  font-family: "Orbitron", sans-serif;
  font-size: 2.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: #fff;
  margin: 0;
  text-shadow: 0 0 15px var(--primary-neon);

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 1.4rem;
  }
`;

export const Userrole = styled.div`
  font-family: "Rajdhani", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--primary-neon);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-top: 8px;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Separator = styled.span`
  color: var(--secondary-neon);
  margin: 0 8px;
  font-weight: bold;
`;
