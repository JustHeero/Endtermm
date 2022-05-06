import React, { useState } from "react";
import "./App.css";
import Profile from "./components/ProfilePage/Profile";
import Rendering from "./components/Rendering/Rendering";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Profile/Main";
import States from "./components/States/States";

import RightNavbar from "./components/RightNavbar/RightNavbar";
import styled, { ThemeProvider } from "styled-components";
import {
  lightTheme,
  darkTheme,
  GlobalStyles,
} from "./components/Dynamics/Modes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;
debugger;
const App = () => {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <button onClick={() => themeToggler()}>Change theme</button>
      </StyledApp>
      <BrowserRouter>
        <div>
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="main"
                element={[<Navbar />, <Main />, <RightNavbar />]}
              />
              <Route path="profile" element={<Profile />} />
              <Route path="rendering" element={<Rendering />} />
              <Route path="states" element={<States />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
