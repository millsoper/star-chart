import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { CenterBlock } from "../components/CenterBlock.jsx";

export const Home = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
      <CenterBlock theme={theme} setTheme={setTheme}/>
  );
};
