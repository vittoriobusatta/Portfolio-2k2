import "./Assets/Styles//Fonts.css";
import "./Assets/Styles/Reset.css";
import styled, { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";
import { ManropeMedium } from "./Utils/Common";
import faviconDark from "./Assets/Icons/faviconDark.png";
import faviconLight from "./Assets/Icons/faviconLight.png";
import Landing from "./Components/Landing";
import Loader from "./Components/Loader";
import Navbar from "./Navbar";


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
    background-color: ${(props) =>
      props.darkMode === true ? "#1D1D1D" : "#FFEFD1"};
    font-size: 1.6rem;
    transition: background-color 0.5s ease-in-out;
    min-height: 100vh;
    min-height: -webkit-fill-available;

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
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: none;
  padding: 10px 15px;
  border-radius: 30px;
  background: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
  color: ${(props) => (props.colorTheme === true ? "#1D1D1D" : "#FFEFD1")};
  font-size: 14px;
  font-family: ${ManropeMedium};
  z-index: 90;
  letter-spacing: 0;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  let link = document.querySelector("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
  }
  link.href = darkMode === true ? faviconLight : faviconDark;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  });



  useEffect (() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setDarkMode(theme === "true" ? true : false);
    }
  } , [])

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(darkMode));
  } , [darkMode]);

  return(
    <>
      {loading ? <Loader darkMode={darkMode} /> : null}
      <GlobalStyle darkMode={darkMode} />
      <Navbar darkMode={darkMode}/>
      <ThemeButton colorTheme={darkMode} onClick={toggleTheme}>
        {darkMode ? "Light" : "Dark"}
      </ThemeButton>
      <Landing darkMode={darkMode}/>
    </>
  );
}

export default App;
