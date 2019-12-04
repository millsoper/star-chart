import React, { useCallback, useState } from "react";
import { darkTheme, lightTheme } from "../utils.js";
import styled from "styled-components";

const ConstellationGroup = styled.g`
  font: 11px sans-serif;
  background: transparent;
  #star,
  circle,
  text {
    transition: fill 300ms ease-in-out;
    stroke: fill 300ms ease-in-out;
  }
  path {
    fill: 'transparent';
    stroke-dasharray: ${({ isHighlighted }) => isHighlighted ? 0 : 500};
    stroke-dashoffset: ${({ isHighlighted }) => isHighlighted ? 0 : 500};
    transition: stroke-dashoffset 500ms ease-in-out;
  }
  &:hover {
    #star,
    circle {
      fill: ${({ isDark }) =>
        isDark ? darkTheme.starColorHover : lightTheme.starColorHover};
    }
    text {
      fill: ${({ isDark }) =>
        isDark ? darkTheme.pathColor : lightTheme.pathColor};
    }
    circle {
      stroke: ${({ isDark }) =>
        isDark ? darkTheme.starColorHover : lightTheme.starColorHover};
    }
    path {
      stroke-dashoffset: 0;
      stroke: ${({ isDark }) =>
        isDark ? darkTheme.pathColor : lightTheme.pathColor};
    }
  }
  text {
    fill: ${({ isHighlighted }) => isHighlighted ? darkTheme.pathColor : 'transparent'};
  }
  @media (min-width: 500px) {
    font: 8px sans-serif;
  }
`;

export function Constellation({ children, isDark, transform }) {
  const [isHighlighted, toggleHighlight] = useState(false);
  const clickHandler = useCallback(() => {
    toggleHighlight(!isHighlighted);
  }, [isHighlighted, toggleHighlight]);
  return (
    <ConstellationGroup transform={transform} onClick={clickHandler} isDark={isDark} isHighlighted={isHighlighted}>
      {children}
    </ConstellationGroup>
  );
}
