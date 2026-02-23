import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
 /* @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'); */
  

    *{
        margin: 0;
        padding: 0; 
        box-sizing: border-box;

        color: black;
        text-decoration: none;
        
    }

    html{
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
}



:root{
    // variables fijas de colores y demas cosas
--neon-blue: #00FFFF;
  --neon-pink: #FF00FF;
  --neon-yellow: #FFFF00;
  --neon-orange: #FFA500;
  --neon-green: #00FF00;
  --dark-bg: #1A1A2E;
  --text-light: #FFFFFF;
  --text-dark: #808080;

  // estilo para el scoreboard


    --primary-neon: #00f3ff;
  --secondary-neon: #ff0055;
  --bg-dark: #050510;
  --glass-bg: rgba(20, 20, 30, 0.6);
  --border-tech: 1px solid rgba(0, 243, 255, 0.3);

  // estilo para el about us

    --neon-cyan: #00f3ff;
  --neon-pink2: #ff0055;
  --bg-dark: #050510;
  --glass-panel: rgba(20, 25, 35, 0.7);



}
body{
    margin: 0;


  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
font-family: 'Press Start 2P', cursive;

    background-color: #e0f7fa; /* Un color de fondo azul claro */
    background-image: url(https://res.cloudinary.com/djyhwdmek/image/upload/v1762551404/ambient_srlots.png); 
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;


  
}







    `;

export default GlobalStyled;
