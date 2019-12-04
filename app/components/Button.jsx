import React, { css } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export function Button({ to, children, isDark }) {
  return (
    <LinkStyled to={to} isdark={`${isDark}`}>
      {children}
    </LinkStyled>
  );
}

const LinkStyled = styled(Link)`
  z-index: 10;
  margin-right: 6px;
  padding: 6px;
  color: ${props => (props.isdark === "true" ? "#fefefe" : "#4e4e4e")};
`;
