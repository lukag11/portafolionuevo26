import Aboutus from "./components/AboutUs/Aboutus";
import Footer from "./components/Footer/Footer";
import HardSkills from "./components/HardSkills/HardSkills";
import Header from "./components/Header/Header";
import MyProjects from "./components/MyProjects/MyProjects";
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
      <MyProjects />
      <Footer />
    </>
  );
}

export default App;
