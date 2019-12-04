import React, { useCallback, useContext } from "react";
import { ThemeContext } from "../ThemeContext.jsx";
import styled from "styled-components";

export function LightSwitch() {
  const [theme, setTheme] = useContext(ThemeContext);
  const changeTheme = useCallback(() => {
    setTheme(theme === 'dark' ? "light" : "dark");
  }, [theme, setTheme]);
  return (
    <LightIcon
      onClick={changeTheme}
      isDark={theme === 'dark'}
      width="14px"
      height="14px"
      viewBox="0 0 71 69"
      version="1.1"
    >
      <title>moon</title>
      <desc>Moon icon</desc>
      <defs>
        <circle
          id="dark-circle"
          cx="35.0101443"
          cy="34.907213"
          r="31.5"
        ></circle>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="moon">
          <mask id="mask" fill="white">
            <use href="#dark-circle"></use>
          </mask>
          <use
            id="bright-circle"
            stroke="#979797"
            stroke-width="2"
            fill="#E4E4E4"
            href="#dark-circle"
          ></use>
          <circle
            isDark={theme === 'dark'}
            id="bright-circle"
            stroke="#979797"
            fill="#686868"
            mask="url(#mask)"
            cx="26.6555339"
            cy="25.3021363"
            r="31.5"
          ></circle>
        </g>
      </g>
    </LightIcon>
  );
}

const MovingMask = styled.circle`
  transition: transform 200ms ease-in-out;
  transform: ${({isDark}) => isDark ? 'translate(-50px, -50px)' : 'translate(0,0)'};
`;

const LightIcon = styled.svg`
  z-index: 20;
  position: fixed;
  right: 20px;
  bottom: 20px;
  height: 20px;
  width: 20px;
  stroke: ${({isDark}) => (isDark ? '#fefefe' : '#4e4e4e')};
  stroke-width: ${({ isDark }) => (isDark ? "3px" : "2px")};
  stroke-dasharray: ${({ isDark }) => (isDark ? "1px" : "0px")};
`;
