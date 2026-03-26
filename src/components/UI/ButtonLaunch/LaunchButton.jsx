import React, { useState } from "react";
import {
  BtnContainer,
  BtnStyled,
  BtnText,
  SpaceRocket,
  Smoke,
} from "./LaunchButtonStyles";

const LaunchButton = ({ onClick }) => {
  // Estados posibles: 'IDLE' (Reposo), 'IGNITION' (Temblor), 'FLYING' (Despegue)
  const [status, setStatus] = useState("INACTIVE");

  const handleLaunch = (e) => {
    e.preventDefault(); // Evita que el formulario recargue la página

    // Si ya está animándose, no hacemos nada
    if (status !== "INACTIVE") return;

    // 1. Inicia la secuencia: Presiona el botón y tiembla
    setStatus("IGNITION");

    // Opcional: Ejecutar la función real de enviar formulario (ej: emailjs)
    if (onClick) {
      onClick();
    }

    // 2. Después de 600ms, el cohete sale volando y el botón se pone Cyan
    setTimeout(() => {
      setStatus("FLYING");
    }, 600);

    // 3. Después de 3 segundos, todo vuelve a la normalidad
    setTimeout(() => {
      setStatus("INACTIVE");
    }, 3000);
  };

  return (
    <BtnContainer>
      {/* Humo decorativo (solo visible en FLYING) */}
      <Smoke $status={status} />

      {/* Botón Principal */}
      <BtnStyled onClick={handleLaunch} $status={status} type="submit">
        <BtnText>
          {status === "INACTIVE" && "LAUNCH MISSION"}
          {status === "IGNITION" && "IGNITION..."}
          {status === "FLYING" && "LIFTOFF!"}
        </BtnText>

        <SpaceRocket $status={status}>🚀</SpaceRocket>
      </BtnStyled>
    </BtnContainer>
  );
};

export default LaunchButton;
