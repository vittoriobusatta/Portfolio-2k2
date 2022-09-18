import React from 'react'
import styled from 'styled-components'
import { ManropeMedium } from '../Utils/Common';

const Container = styled.footer`
  height: auto;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  & p {
    font-size: 12px;
    font-family: ${ManropeMedium};
    color: #000;
  }
`;

function Footer() {
  return (
    <Container>
        <p>Designed & Build by Vittorio Busatta</p>
    </Container>
  )
}

export default Footer