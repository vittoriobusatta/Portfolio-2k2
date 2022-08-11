import React from "react";
import styled from "styled-components";
import { PortfolioLogo } from "../Utils/Icons";

const Container = styled.section`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: fill-available;
  background: #FFEFD1;
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function Loader() {
  return (
    <Container>
      <Content>
        <PortfolioLogo />
        {/* {useWindowSize().width >= 992 ? <LogoTall /> : <LogoSmall />} */}
      </Content>
    </Container>
  );
}

export default Loader;
