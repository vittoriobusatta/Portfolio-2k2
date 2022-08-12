import React from "react";
import styled from "styled-components";
import { ManropeMedium } from "../Utils/Common";

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
  color: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
  cursor: pointer;

  & div {
    transform: translateY(120%) skew(3deg, -6deg);
    transition: transform 0.4s;
  }

  & div {
    transform: translateY(0) skew(0, 0);
  }
`;

function Landing({ darkMode }) {
  return (
    <Container>
      <Content colorTheme={darkMode}>
        <div>Landing</div>
      </Content>
      <Content colorTheme={darkMode}>
        <div>Landing</div>
      </Content>
      <Content colorTheme={darkMode}>
        <div>Landing</div>
      </Content>
    </Container>
  );
}

export default Landing;
