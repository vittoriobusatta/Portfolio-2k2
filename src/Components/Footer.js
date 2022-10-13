import React from "react";
import styled from "styled-components";
import { ManropeMedium } from "../Utils/Common";

const Container = styled.footer`
  position: absolute;
  height: auto;
  width: 100%;
  right: 0;
  bottom: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 2rem;
  @media screen and (min-width: 992px) {
    width: 55%;
  }
  & p {
    font-size: 12px;
    font-family: ${ManropeMedium};
    color: #000;
    @media screen and (min-width: 992px) {
      width: 55%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

function Footer() {
  return (
    <Container>
      <p>Build & Design by Vittorio</p>
    </Container>
  );
}

export default Footer;
