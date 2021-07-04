import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import ToggleButton from "./components/ToggleButton";
import Article from "./components/Article";
import GlobalStyle from "./components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);
  const onClick = () => {
    setDark(!dark);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle dark={dark} />
        <Title>Light / Dark Mode - Toggle Button</Title>
        <ToggleButton onClick={onClick} dark={dark} />
        <Article dark={dark} />
      </ThemeProvider>
    </>
  );
}

export default App;
