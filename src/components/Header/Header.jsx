import React, { useContext } from "react";
import {
  HeaderStyled,
  LogoNavBar,
  NavBar,
  NavBarItem,
  NavbarList,
} from "./HeaderStyles";
// import logolg from "../../assets/images/logo/logolgg.png";
import logolg from "../logo/logolgg.png";
import MenuBars from "../MenuBar/MenuBars";
import { MenuContext } from "../context/Context";

const Header = () => {
  const mContexto = useContext(MenuContext);
  return (
    <>
      <HeaderStyled>
        <LogoNavBar src={logolg} />
        {/* tenemos un contexto donde tenemos creado una funcion para poder abrir
        el menu al presionar */}
        <NavBar isOpen={mContexto.isMenuOpen}>
          <NavbarList>
            <NavBarItem onClick={mContexto.toogleMenuLi}>Sobre Mi</NavBarItem>
            <NavBarItem onClick={mContexto.toogleMenuLi}>Skills</NavBarItem>
            <NavBarItem onClick={mContexto.toogleMenuLi}>Proyectos</NavBarItem>
            <NavBarItem onClick={mContexto.toogleMenuLi}>Contacto</NavBarItem>
          </NavbarList>
        </NavBar>
        <MenuBars />
      </HeaderStyled>
    </>
  );
};

export default Header;
