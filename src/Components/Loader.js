import React from "react";
import styled, { keyframes } from "styled-components";
import LogoSmall from "../Assets/Icons/Logo-small.svg";
import LogoTall from "../Assets/Icons/Logo-tall.svg";
import { useWindowSize } from "../Utils/WindowsResize";

const Container = styled.section`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
  width: 100%;
  height: 100vh;
  background: #f9f2e8;
  pointer-events: none;
  overflow: hidden;
`;
const LoaderRotate = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;
const Circle = styled.section`
  bottom: 15%;
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  border: 4px solid #797636;
  border-left: 4px solid #edbc9b;
  border-radius: 100px;
  animation: ${LoaderRotate} 1s linear infinite;
  transition: 0.4s;
  transition-delay: 0.2s;
  z-index: 10;
  margin-top: 60px;
`;

function Loader() {

  function setLogoSize(windowSize) {
    return windowSize.width >= 992 ? LogoTall : LogoSmall
  }

  return (
    <Container>
      <img src={ setLogoSize(useWindowSize()) } alt="Logo" />
      <Circle />
    </Container>
  );
}

export default Loader;
