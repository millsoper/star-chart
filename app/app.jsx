import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "./ThemeContext.jsx";
import { Code } from "./pages/code.jsx";
import { About } from "./pages/about.jsx";
// This is a holdover from the routing :/ We'll clean it up later.
import { Home } from "./pages/home.jsx";
import { Backdrop } from "./components/Backdrop.jsx";
import { LightSwitch } from "./components/LightSwitch.jsx";

export default function App() {
  return (
    <Wrapper>
      <ThemeProvider>
        <Backdrop />
        <Home />
        <LightSwitch />
      </ThemeProvider>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
