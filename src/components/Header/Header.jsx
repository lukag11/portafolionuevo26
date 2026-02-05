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
        <LogoNavBar src={logolg} />
        {/* tenemos un contexto donde tenemos creado una funcion para poder abrir
        el menu al presionar */}
        <NavBar>
          <NavbarList>
            <NavBarItem>Sobre Mi</NavBarItem>
            <NavBarItem>Skills</NavBarItem>
            <NavBarItem>Proyectos</NavBarItem>
            <NavBarItem>Contacto</NavBarItem>
          </NavbarList>
        </NavBar>
        {/* <MenuBars /> */}
      </HeaderStyled>
    </>
  );
};

export default Header;
