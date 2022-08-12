import React from "react";
import styled, { keyframes } from "styled-components";
import { Github, LogoTall, Dribble } from "../Utils/Icons";

const Container = styled.section`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: fill-available;
  background: #f9f2e8;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Maintenance = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #797636;
  padding: 15px;

  & p {
    color: #f9f2e8;
    font-family: "Manrope Medium" ;
    font-size: 14px;
    text-align: center;
    line-height: 20px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Socials = styled.ul`
position: absolute;
bottom: 15px;
  display: inline-flex;
  padding-top: 100px;
  column-gap: 40px;
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
  return (
    <Container>
      <Maintenance>
        <p>Ce site fait actuellement l'objet d'une maintenance, je m'excuse pour le désagrément.</p>
      </Maintenance>
      <Content>
        {/* {useWindowSize().width >= 992 ? <LogoTall /> : <LogoSmall />} */}
        <LogoTall />
        <Circle />
      </Content>
      <Socials>
        <li>
          <a href="https://github.com/vittoriobusatta">
            <Github />
          </a>
        </li>
        <li>
          <a href="https://dribbble.com/FlytzWoo">
            <Dribble />
          </a>
        </li>
      </Socials>
    </Container>
  );
}

export default Loader;
