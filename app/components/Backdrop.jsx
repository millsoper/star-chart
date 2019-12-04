import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext.jsx";
import { StarMap } from "./StarMap.jsx";
import styled from "styled-components";

export function Backdrop() {
  const [theme, setTheme] = useContext(ThemeContext);
  const isDark = theme === "dark";
  return <StarMap isDark={isDark} />;
}