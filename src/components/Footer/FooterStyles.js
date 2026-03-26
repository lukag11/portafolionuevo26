import React from "react";
import styled, { keyframes } from "styled-components";
import { Section } from "../UI/Section/Section";

// --- Animaciones ---
export const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

// --- Estilos ---

export const SectionContainerContactWrapper = styled(Section)`
  flex-direction: column;
  padding: 60px 20px;
  font-family: "Rajdhani", sans-serif;
  box-sizing: border-box;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerContact = styled.div`
  text-align: center;
  padding-bottom: 80px;
  padding: 0 20px;
`;

export const PanelGameOver = styled.div`
  background: #000;
  border: 4px solid #222;
  padding: 50px;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  box-shadow: 0 0 100px rgba(255, 0, 85, 0.2);

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const InsertToProject = styled.div`
  font-family: "Orbitron";
  font-size: 1.5rem;
  color: var(--neon-pink);
  animation: ${blink} 1s infinite;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ApplicationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TxtLabel = styled.label`
  font-family: "Orbitron";
  font-size: 0.8rem;
  color: #929292;
  margin-bottom: 5px;
  display: block;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    letter-spacing: 0.1rem;
  }
`;

export const Input = styled.input`
  background: #111;
  border: 1px solid #444;
  color: var(--neon-cyan);
  font-family: "Rajdhani", monospace;
  font-size: 1.2rem;
  padding: 15px;
  width: 100%;
  outline: none;

  &:focus {
    border-color: var(--neon-cyan);
    box-shadow: 0 0 10px rgba(0, 243, 255, 0.3);
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TextArea = styled(Input).attrs({ as: "textarea" })`
  resize: vertical;
`;

export const ButtonStart = styled.button`
  background: var(--neon-pink);
  color: white;
  font-family: "Orbitron";
  font-size: 1.5rem;
  padding: 15px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  transition: 0.2s;

  clip-path: polygon(
    10px 0,
    100% 0,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    0 100%,
    0 10px
  );

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 30px var(--neon-pink);
  }
`;

export const FooterText = styled.div`
  margin-top: 30px;
  color: #555;
  font-size: 0.8rem;
`;
