import React, { use, useContext } from "react";
import { MenuContext } from "../context/Context";
import { ContainerMenuHamburger, MenuIcon } from "./MenuBarsStyles";

const MenuBars = () => {
  const mContexto = useContext(MenuContext);

  return (
    <>
      <ContainerMenuHamburger onClick={mContexto.toogleMenu}>
        <MenuIcon clicked={mContexto.isMenuOpen} />
      </ContainerMenuHamburger>
    </>
  );
};

export default MenuBars;
