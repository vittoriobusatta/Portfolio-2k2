import React from "react";
import styled, { keyframes } from "styled-components";
import { Morgenwalsh } from "../Utils/Common";

const Container = styled.section`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 80px;
  overflow-x: hidden;
`;

const marquee = keyframes`
from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const Content = styled.div`
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: ${marquee} 10s linear infinite;
  border: solid 2px ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};;
  padding: 15px 20px;
  height: 100%;
  & span {
    font-size: 45px;
    padding: 0 15px;
    color: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
    font-family: ${Morgenwalsh};
  }
`;

function Marquee({ darkMode }) {
  return (
    <Container>
      <Content colorTheme={darkMode}>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
        <span>Projets</span>
        <span>•</span>
      </Content>
    </Container>
  );
}

export default Marquee;
