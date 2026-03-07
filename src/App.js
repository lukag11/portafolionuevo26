import Aboutus from "./components/AboutUs/Aboutus";
import HardSkills from "./components/HardSkills/HardSkills";
import Header from "./components/Header/Header";
import Scoreboard from "./components/ScoreBoard/Score";

import GlobalStyled from "./styles/GlobalStyled";

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Scoreboard />
      <Aboutus />
      <HardSkills />
    </>
  );
}

export default App;
