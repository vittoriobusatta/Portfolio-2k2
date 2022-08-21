import React from "react";
import styled from "styled-components";
import setTitle from "../Utils/setTitle";
import Marquee from "./Marquee";
import Projects from "./Projects";
import { ReactComponent as Vector } from "../Assets/Share/Vector.svg";

const Container = styled.main`
  height: auto;
  min-height: 800px;
  width: 100vw;
  padding-top: 80px;
`;
const Content = styled.section`
  display: flex;
  flex-direction: column;
`;
const Introduction = styled.div`
  height: auto;
  padding: 80px 20px;
`;

function Landing({ darkMode, data }) {
  setTitle("Vittorio Busatta — Creative Developer ");

  return (
    <Container>
      <Content colorTheme={darkMode}>
        <Introduction>
          <Vector />
        </Introduction>
        <Marquee darkMode={darkMode} />
        <Projects darkMode={darkMode} data={data} />
      </Content>
    </Container>
  );
}

export default Landing;
