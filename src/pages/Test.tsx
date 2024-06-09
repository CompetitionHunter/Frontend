import React from "react";
import Nav from "../components/layout/Nav";
// import styled from "styled-components";
import CharacterProfile from "../components/Modal/CharacterProfile";
import Setting from "../components/Modal/Setting";
import Bubbles from "../components/layout/Bubbles";

const Test = () => {
  return (
    <>
      <Nav>
        <CharacterProfile>open</CharacterProfile>
        <Setting>setting</Setting>
      </Nav>
      <Bubbles />
    </>
  );
};

export default Test;
