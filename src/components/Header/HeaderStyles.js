import styled from "styled-components";

export const HeaderStyled = styled.header`
  margin: 0 auto;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px 0 50px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;

  // CELULAR
  @media (max-width: 992px) {
    padding: 0 50px 0 10px;
  }
`;

export const LogoNavBar = styled.img`
  height: 90%;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 50%;
  /* padding-top: 50px; */
  padding: 20px 20px; // hacemos la caja un poco mas pequeña

  border-radius: 15px;
  box-sizing: border-box; // propiedad para calcular el alto y ancho final de un elemento

  // borde neon

  border: 2px solid var(--neon-pink);
  box-shadow:
    0 0 10px var(--neon-pink),
    0 0 20px var(--neon-blue),
    0 0 30px var(--neon-pink),
    inset 0 0 8px var(--neon-blue); /* Brillo interno */

  // CELULAR

  @media (max-width: 992px) {
    position: absolute;
    /* background-color: black; */
    /* color: white; */
    flex-direction: column;
    top: 100px;
    right: 0;
    width: 100%;
    height: calc(100vh - 100px);
    z-index: 5;
    transition: all 0.9s ease-in-out;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(200%)"};

    background-image:
      linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://res.cloudinary.com/djyhwdmek/image/upload/v1763510161/fondo3_ph87uz.jpg");
    opacity: 100%;
    filter: brightness(200%);
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const NavbarList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  // CELULAR

  @media (max-width: 992px) {
    margin: auto;
    flex-direction: column;
  }
`;

export const NavBarItem = styled.li`
  position: relative;
  font-size: 15px;
  cursor: pointer;
  font-weight: 500;
  list-style: none;

  &:nth-child(1) {
    color: var(--neon-pink);
  }
  &:nth-child(2) {
    color: var(--neon-blue);
  }
  &:nth-child(3) {
    color: var(--neon-yellow);
  }
  &:nth-child(4) {
    color: var(--neon-green);
  }

  &::after {
    content: "";
    height: 2px;
    width: 100%;
    // linea gradiente para animacion al poner puntero por encima del text navbar
    background: radial-gradient(circle at 30% 30%, #e0e0e0, #a0a0a0, #606060);
    position: absolute;
    bottom: -2px;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.8s ease;
  }
  &:hover::after {
    transform-origin: bottom right;
    transform: scaleY(1);
  }

  // CELULAR
  @media (max-width: 992px) {
    background-color: black;
    font-size: 20px;
    border-radius: 10px;
    padding: 7px;
    margin: 2px;

    &:nth-child(1) {
      border: 1px solid var(--neon-blue);
    }
    &:nth-child(2) {
      border: 1px solid var(--neon-pink);
    }
    &:nth-child(3) {
      border: 1px solid var(--neon-green);
    }
    &:nth-child(4) {
      border: 1px solid var(--neon-yellow);
    }

    &::after {
      content: "";
      background: none;
    }
  }
`;
