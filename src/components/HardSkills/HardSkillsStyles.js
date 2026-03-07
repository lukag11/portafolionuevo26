import styled, { keyframes } from "styled-components";
import { Section } from "../UI/Section/Section";

// Animacion para el titulo de hard skills

// Section hard skills contenedor principal
export const SectionhardSkillsWrapper = styled(Section)`
  padding: 60px 20px;
  font-family: "Rajdhani", sans-serif;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const TitleHardSkills = styled.h2`
  font-family: "Orbitron", sans-serif;
  font-size: 3rem;
  margin: 70px;
  text-transform: uppercase;
  text-decoration: underline;
  text-underline-offset: 5px;
  word-spacing: 20px;
  text-decoration-color: var(--secondary-neon);
  color: var(--text-light);

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const ContainerSkills = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  max-width: 1300px;
  margin: 0 auto 100px auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;

export const CardSkill = styled.div`
  background: linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%);
  border: 2px solid #444;
  border-radius: 6px;
  padding: 25px;
  text-align: center;
  position: relative;
  cursor: default;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  /* Borde superior  */
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 5px;
    background: var(--neon-pink);
    border-radius: 0 0 4px 4px;
  }

  &:hover {
    border-color: var(--neon-cyan);
    transform: translateY(8px);
    box-shadow:
      0 0 20px rgba(0, 243, 255, 0.4),
      inset 0 0 20px rgba(0, 243, 255, 0.1);

    .icon {
      transform: scale(1.2);
      color: var(--neon-cyan);
    }
    .name {
      color: #fff;
      text-shadow: 0 0 5px var(--neon-cyan);
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    &.active {
      /* ... MISMOS estilos de encendido ... */
      border-color: var(--neon-cyan);
      transform: translateY(8px);
      box-shadow:
        0 0 20px rgba(0, 243, 255, 0.4),
        inset 0 0 20px rgba(0, 243, 255, 0.1);

      .icon {
        transform: scale(1.2);
        color: var(--neon-cyan);
      }
      .name {
        color: #fff;
        text-shadow: 0 0 5px var(--neon-cyan);
      }
    }
  }
`;

export const IconSkill = styled.div`
  font-size: 2.5rem;
  color: #666;
  margin-bottom: 15px;
  transition: 0.2s;
`;

export const NameSkill = styled.div`
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  color: #888;
  text-transform: uppercase;
  transition: 0.2s;
`;
