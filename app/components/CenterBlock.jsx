import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const CenterBlock = ({ theme, setTheme }) => {
  const [isOpen, setOpen] = useState(true);
  const isDark = theme === "dark";

  return (
    <Block isDark={isDark} isOpen={isOpen}>
      <ToggleButton
        isDark={isDark}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        {isOpen ? "X" : "?"}
      </ToggleButton>
      <p>STAR MAP</p>
      <p>
        Hover over the stars to uncover constellations -- click on them to make
        the paths remain visible even when you aren't hovering over them. Click
        on the moon icon in the bottom righthand corner to change between 'dark'
        and 'light' modes.
      </p>
    </Block>
  );
};

function renderColor({ isDark }) {
  if (isDark) {
    return css`
      color: #fefefe;
    `;
  }
  return css`
    color: #4e4e4e;
  `;
}

const ToggleButton = styled.div`
  padding: 4px;
  display: inline-block;
  position: absolute;
  right: 6px;
  top: 6px;
  ${renderColor}
  &:hover {
    color: goldenrod;
  }
`;

const Block = styled.div`
  padding: 12px;
  position: fixed;
  top: 10px;
  right: 10px;
  font-family: arial;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${renderColor};
  border: 2px solid goldenrod;
  width: ${({ isOpen }) => (isOpen ? "180px" : "6px")};
  height: ${({ isOpen }) => (isOpen ? "auto" : "12px")};
  z-index: 10;
  transition: all 200ms ease-in-out;
  &:hover {
    background: ${({ isDark }) =>
      isDark ? "transparent" : "rgba(255,255,255, .65)"};
  }
  p {
    display: ${({ isOpen }) => (isOpen ? "inherit" : "none")};
  }
`;
