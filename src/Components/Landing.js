import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { ManropeMedium } from "../Utils/Common";
import setTitle from "../Utils/setTitle";

const Container = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Content = styled.div`
  overflow: hidden;
  height: 75px;
  font-size: 64px;
  font-family: ${ManropeMedium};
  cursor: pointer;

  & div {
    opacity: 0;
    transition: letter-spacing .8s cubic-bezier(.165, .84, .44, 1);
    color: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
    &:hover {
      letter-spacing: 2px;
    }
  }

`;

function Landing({ darkMode }) {

  setTitle("Vittorio Busatta — Creative Developer ");

  return (
    <Container>
      <Content colorTheme={darkMode}>
      </Content>
    </Container>
  );
}

export default Landing;
