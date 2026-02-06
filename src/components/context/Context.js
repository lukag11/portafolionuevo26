import { children, createContext, use, useState } from "react";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isClose, setIsClose] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  // con esta funcion lo que hacemos es cerrar el navbar al presionar una opcion
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen: isOpen,
        toogleMenu: handleOpen,
        isMenuClose: isClose,
        toogleMenuLi: handleClose,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};
