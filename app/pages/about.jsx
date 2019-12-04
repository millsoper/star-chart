import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../components/Button.jsx";

export const About = () => {
  return (
    <div>
      <Button to={"/home"}>home</Button>
      <p>home sweet about</p>
    </div>
  );
};
