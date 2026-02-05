import React from "react";
import {
  HeaderStyled,
  LogoNavBar,
  NavBar,
  NavBarItem,
  NavbarList,
} from "./HeaderStyles";
import logolg from "../logo/logolgg.png";

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <NavBar>
          <NavbarList>
            <NavBarItem>Sobre Mi</NavBarItem>
            <NavBarItem>Skills</NavBarItem>
            <NavBarItem>Proyectos</NavBarItem>
            <NavBarItem>Contacto</NavBarItem>
          </NavbarList>
        </NavBar>
      </HeaderStyled>
    </>
  );
};

export default Header;
