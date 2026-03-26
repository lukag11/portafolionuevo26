import styled, { keyframes, css } from "styled-components";

// --- ANIMACIONES (Keyframes) ---

const rumble = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  20% { transform: translate(-2px, 2px) rotate(-5deg); }
  40% { transform: translate(2px, -2px) rotate(5deg); }
  60% { transform: translate(-3px, 0px) rotate(-2deg); }
  80% { transform: translate(3px, 2px) rotate(2deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

const takeoff = keyframes`
  0% { 
    transform: translate(0, 0) scale(1); 
    opacity: 1; 
  }
  100% { 
    transform: translate(150px, -200px) scale(0.5) rotate(45deg); 
    opacity: 0; 
  }
`;

const smokeBlast = keyframes`
  0% { transform: translateY(-50%) scale(0.5); opacity: 1; filter: blur(2px); }
  100% { transform: translateY(-20px) scale(4); opacity: 0; filter: blur(15px); }
`;

// --- COMPONENTES ESTILIZADOS ---

export const BtnContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 15px;
`;

export const BtnStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(180deg, #1a1a1a, #0a0a0a);
  border: 2px solid var(--neon-pink);
  color: var(--neon-pink);
  padding: 1px 10px;
  font-size: 1rem;
  font-family: "Orbitron", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  border-radius: 8px 10px;
  gap: 20px;
  z-index: 10;
  user-select: none;
  width: 100%;
  transition: all 0.2s ease-out;

  /* ESTADO: IGNICIÓN (Presionado) */
  ${(props) =>
    props.$status !== "INACTIVE" &&
    css`
      transform: translateY(6px) !important; /* El botón baja */
      background: linear-gradient(180deg, #1a1a1a, #0a0a0a);
      color: var(--neon-green);
    `}

  /* ESTADO: VOLANDO (Éxito) */
  ${(props) =>
    props.$status === "FLYING" &&
    css`
      background: linear-gradient(180deg, #1a1a1a, #0a0a0a);
      color: var(--neon-orange);
    `}
`;

export const BtnText = styled.span`
  // lo utilizamos para que el boton no cambie de apariencia
  min-width: 160px;
  text-align: center;
`;

export const SpaceRocket = styled.span`
  display: inline-block;
  font-size: 1.8rem;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
  position: relative;
  z-index: 20;

  /* Animación dependiendo del estado */
  ${(props) =>
    props.$status === "IGNITION" &&
    css`
      animation: ${rumble} 0.5s ease-in-out infinite;
    `}

  ${(props) =>
    props.$status === "FLYING" &&
    css`
      animation: ${takeoff} 1.2s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
    `}
`;

export const Smoke = styled.div`
  position: absolute;
  right: 20px;
  top: 50%;
  width: 30px;
  height: 30px;
  background: radial-gradient(
    circle,
    var(--primary-neon, #00f3ff) 0%,
    transparent 80%
  );
  border-radius: 50%;
  opacity: 0;
  pointer-events: none;
  z-index: 5;

  /* Se activa solo cuando está volando */
  ${(props) =>
    props.$status === "FLYING" &&
    css`
      animation: ${smokeBlast} 1s ease-out forwards;
    `}
`;
