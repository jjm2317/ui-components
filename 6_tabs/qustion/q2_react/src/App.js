import Title from "./components/Title";
import Tabs from "./components/Tabs";

import GlobalStyle from "./styles/global";
import { useEffect, useState } from "react";
import styled from "styled-components";

const fetchTabsData = () => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve([
          {
            title: "HTML",
            content: `HTML(HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation(CSS) or functionality/ behavior(JavaScript).`,
          },
          {
            title: "CSS",
            content: `Cascading Style Sheets(CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.`,
          },
          {
            title: "JavaScript",
            content: `JavaScript(JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.`,
          },
        ]),
      1000
    );
  });
};

const App = () => {
  const [tabs, setTabs] = useState(null);

  useEffect(() => {
    const fetchTabs = async () => {
      const data = await fetchTabsData();
      console.log(data);
      setTabs(data);
    };
    fetchTabs();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Title>Tabs</Title>
      {tabs ? (
        <Tabs tabs={tabs} />
      ) : (
        <Spinner src="img/ball-triangle.svg" alt="Loading..." />
      )}
    </>
  );
};

const Spinner = styled.img`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate3D(-50%, 0, 0);
  width: 50px;
`;

export default App;
