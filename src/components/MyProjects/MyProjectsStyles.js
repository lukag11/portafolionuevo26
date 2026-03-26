import React from "react";
import styled, { keyframes } from "styled-components";
import { Section } from "../UI/Section/Section";

// Animacion para el hover status del button launch , con un efecto de parpadeo
const statusHover = keyframes`
  100% { color: var( --neon-pink); }
`;

export const SectionMyProjectsWrapper = styled(Section)`
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

export const TitleSectionProjects = styled.h2`
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

export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto 100px auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardMission = styled.div`
  background: rgba(10, 10, 15, 0.8);
  border: 1px solid #333;
  position: relative;
  overflow: hidden;
  transition: 0.3s;

  /* Triángulo decorativo en esquina */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30px;
    height: 30px;
    background: linear-gradient(135deg, transparent 50%, var(--neon-pink) 75%);
  }

  &:hover {
    border-color: var(--text-light);
    transform: translateY(-5px);
    /* box-shadow: 0 5px 20px rgba(188, 19, 254, 0.2); */
    box-shadow: 0 5px 20px var(--neon-green);

    img {
      opacity: 1;
      transform: scale(1.05);
    }
  }
`;

export const ImgCard = styled.div`
  width: 100%;
  height: 180px;
  background: #000;
  overflow: hidden;
  border-bottom: 1px solid #333;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
    transition: 0.4s;
  }
`;

export const ContentCard = styled.div`
  padding: 25px;
`;

export const TitleCard = styled.h3`
  font-family: "Orbitron";
  color: var(--neon-blue);
  font-size: 1.5rem;
  margin: 0 0 10px 0;
`;

export const TechStack = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 15px 0;
`;

export const Badge = styled.span`
  font-size: 0.7rem;
  padding: 4px 8px;
  border: 1px solid #555;
  color: #fff;
  text-transform: uppercase;
  border-radius: 4px;
  border: 1px solid var(--secondary-neon);
`;

export const ButtonLaunch = styled.a`
  display: inline-block;
  padding: 6px 20px;
  background: transparent;
  border: 1px solid var(--primary-neon);
  border-radius: 5px;
  color: white;
  text-decoration: none;
  font-family: "Orbitron";
  font-size: 0.8rem;
  text-transform: uppercase;
  transition: 0.3s;
  cursor: pointer;
  animation: ${statusHover} 1.5s infinite alternate;
`;
