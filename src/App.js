import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";
import BodyApp from "./Layouts/BodyApp";

// Import kontektstu
import { AppContext, defaultObject } from "./AppContext";

const GlobalContainer = styled.div`
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  padding-bottom: 50px;
  background-color: ${(props) =>
    props.colorTheme === "dark" ? "#0d0906" : "transparent"};
  transition: 0.25s;
  color: ${(props) => (props.colorTheme === "dark" ? "#fff" : "black")};
`;

const App = () => {
  const [theme, setThemeValue] = useState(defaultObject.theme);

  const setTheme = () => {
    console.log("Zmiana motywu aplikacji na:" + theme);
    if (theme === "light") {
      setThemeValue("dark");
    } else setThemeValue("light");
  };

  return (
    <GlobalContainer colorTheme={theme}>
      <AppContext.Provider value={{ theme, setTheme }}>
        <Header />
        <BodyApp />
        <Footer />
      </AppContext.Provider>
    </GlobalContainer>
  );
};

export default App;
