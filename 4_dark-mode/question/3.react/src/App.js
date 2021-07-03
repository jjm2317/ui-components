import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import ToggleButton from "./components/ToggleButton";
import Article from "./components/Article";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Title class="title">Light / Dark Mode - Toggle Button</Title>
      <ToggleButton />
      <Article />
    </>
  );
}

export default App;
