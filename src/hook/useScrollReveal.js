import { useEffect } from "react";

export const useScrollReveal = (selector = ".reveal-on-scroll") => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si el elemento es visible en un 20% (0.2)
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            // Opcional: Si quieres que se apague al salir, deja esta línea.
            // Si quieres que se quede encendido para siempre, bórrala.
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 1, // Se activa cuando el 20% del elemento es visible
        rootMargin: "-25% 0px -25% 0px", // Reduce el área de detección para que sea más al centro
      },
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [selector]);
};
