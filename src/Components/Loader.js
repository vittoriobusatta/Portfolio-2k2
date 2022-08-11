import React from "react";
import styled, {keyframes} from "styled-components";
import { ManropeMedium } from "../Utils/Common";
import { PortfolioLogoLight, PortfolioLogoDark } from "../Utils/Icons";

const Container = styled.section`
  z-index: 1000;
  width: 100%;
  height: 100vh;
  min-height: fill-available;
  background-color: ${(props) => (props.colorTheme === true ? "#1D1D1D" : "#FFEFD1")};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.5s ease-in-out;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const bounce = keyframes`
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
`;


const Circle = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
  border-radius: 50%;
  margin-bottom: 180px;
  animation: ${bounce} 1.5s ease infinite;
`;


const Texte = styled.div`
  margin-top: 180px;
  & p {
    font-family: ${ManropeMedium};
    font-size: 12px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
    & span:nth-child(1) {
      margin-bottom: 2px;
    }
    & span:nth-child(3) {
      margin-top: 14px;
    }
  }
`;

function Loader({ darkMode }) {
  return (
    <Container colorTheme={darkMode}>
      <Content>
        <Circle colorTheme={darkMode} />
        {darkMode ? <PortfolioLogoDark /> : <PortfolioLogoLight />}
        <Texte colorTheme={darkMode}>
          <p>
            <span>vittorio busatta</span>
            <span>Front-End Developer & Designer</span>
            <span>© 2003</span>
          </p>
        </Texte>
      </Content>
    </Container>
  );
}

export default Loader;
