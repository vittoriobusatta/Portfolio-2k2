import React from "react";
import styled from "styled-components";
import setTitle from "../Utils/setTitle";
import Projects from "./Projects";

const Container = styled.main`
  height: auto;
  min-height: 800px;
  width: 100vw;
  padding-top: 80px;
`;
const Content = styled.section`
`;

function Landing({ darkMode, data }) {
  setTitle("Vittorio Busatta — Creative Developer ");

  return (
    <Container>
      <Content colorTheme={darkMode}>
        <Projects data={data} darkMode={darkMode} />
      </Content>
    </Container>
  );
}

export default Landing;
