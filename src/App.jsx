import "./App.css";

import { GlobalColors } from "../globalColors";
import { lightTheme } from "./theme/theme";
import { darkTheme } from "./theme/theme";

import { NavBar } from "./components/NavBar";
import { Section } from "./components/Section";
import { ThemeProvider } from "styled-components";
import { useSavedTheme } from "./utils/utilTheme";

import logoPreta from "./assets/images/logo-preta.png";
import logoBranca from "./assets/images/logo-branca.png";
import bannerPreto from "./assets/images/banner-dark.png";
import bannerBranco from "./assets/images/banner-branco.png";
import nuvemImg from "./assets/images/nuvem.png";

import { Equipe } from "./pages/Equipe";
import { Footer } from "./components/footer";
import { Home } from "./pages/Home";
import { Nuvens } from "./components/Nuvens";

function App() {
  const [theme, setTheme] = useSavedTheme("theme", lightTheme);

  const thmeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div id="inicio" className="container">
        <GlobalColors />
        <NavBar
          img={theme === "light" ? logoPreta : logoBranca}
          thmeToggler={thmeToggler}
          tema={theme}
        />
        <Nuvens img={nuvemImg}>
          <Home img={theme === "light" ? bannerPreto : bannerBranco} />
        </Nuvens>
      </div>
      <Section />
      <Equipe tema={theme}/>
      <Footer logo={theme === "light" ? logoPreta : logoBranca} tema={theme}/>
    </ThemeProvider>
  );
}

export default App;
