import Loader from "./Components/Loader";
import "./Assets/Styles//Fonts.css";
import "./Assets/Styles/Reset.css";
import { createGlobalStyle } from "styled-components";

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

function App() {
  return (
    <>
      <GlobalStyle />
      <Loader />
    </>
  );
}

export default App;
