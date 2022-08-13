import React from "react";
import styled from "styled-components";
import { ManropeMedium } from "../Utils/Common";
import { LogoDark, LogoLight } from "../Utils/Icon";

const Container = styled.header`
  position: fixed;
  top: 0;
  height: 82px;
  width: 100%;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 2px
    ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
  background-color: ${(props) =>
    props.colorTheme === true ? "#1D1D1D" : "#FFEFD1"};
  transition: background-color 0.5s ease-in-out;
`;
const Content = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 25px 30px;
`;

const ThemeButton = styled.button`
  bottom: 20px;
  right: 20px;
  border: none;
  padding: 10px 14px;
  border-radius: 30px;
  background: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
  color: ${(props) => (props.colorTheme === true ? "#1D1D1D" : "#FFEFD1")};
  font-size: 14px;
  font-family: ${ManropeMedium};
  z-index: 90;
  letter-spacing: 0;
`;

function Navbar({ darkMode, setDarkMode }) {
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container colorTheme={darkMode}>
      <Content>
        {darkMode ? <LogoDark /> : <LogoLight />}
        <ThemeButton colorTheme={darkMode} onClick={toggleTheme}>
        </ThemeButton>
      </Content>
    </Container>
  );
}

export default Navbar;
