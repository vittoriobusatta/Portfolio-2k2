import Loader from "./Components/Loader";
import "./Assets/Styles//Fonts.css";
import "./Assets/Styles/Reset.css";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import { ManropeMedium } from "./Utils/Common";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar{
      display: none;
    }
 
    @media screen and (max-width: 1400px) {
      font-size: 58%;
    }
    @media screen and (max-width: 1224px) {
      font-size: 52%;
    }
    @media screen and (max-width: 992px) {
      font-size: 46%;
    }
    @media screen and (max-width: 768px) {
      font-size: 40%;
    }
    @media screen and (max-width: 576px) {
      font-size: 34%;
    }
    @media screen and (max-width: 321px) {
      font-size: 28%;
    }
    
  } 
  body {
    background-color: #f9f2e8;
    font-size: 1.6rem;
  }
  ::-moz-selection {
    background: #1AC8ED;
    text-shadow: none;
  }
  ::selection {
    background: #1AC8ED;
    text-shadow: none;
  }
`;

const ThemeButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
  background: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
  color: ${(props) => (props.colorTheme === true ? "#1D1D1D" : "#FFEFD1")};
  font-size: 14px;
  font-family: ${ManropeMedium};
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <GlobalStyle />
      <Loader darkMode={darkMode} />
      <ThemeButton colorTheme={darkMode} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light" : "Dark"}
      </ThemeButton>
    </>
  );
}

export default App;
