import React from "react";
import styled from "styled-components";
import { LogoDark, LogoLight } from "./Utils/Icon";

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 2px
    ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
`;
const Content = styled.div`
  display: inline-flex;
  /* justify-content: space-between; */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 25px 30px;
`;
// const Button = styled.button`
//   position: relative;
//   height: 30px;
//   width: 40px;
//   background-color: ${(props) =>
//     props.colorTheme === true ? "#FFEFD1" : "#1D1D1D"};
//   border: none;
//   background-color: transparent;

//   &:hover > span:last-child {
//     width: 100%;
//   }

//   & span {
//     position: absolute;
//     height: 2px;
//     border-radius: 10px;
//     z-index: 999;
//     &:first-child {
//       top: 0;
//       left: 0;
//       width: 100%;
//       transform: translateY(10px);
//       background-color: ${(props) =>
//         props.colorTheme === true ? "#FFEFD1" : "#1D1D1D"};
//     }
//     &:last-child {
//       bottom: 0;
//       right: 0;
//       width: 70%;
//       transform: translateY(-8px);
//       background-color: ${(props) =>
//         props.colorTheme === true ? "#FFEFD1" : "#1D1D1D"};
//       transition: width 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
//     }
//   }
// `;

function Navbar({ darkMode }) {
  return (
    <Container colorTheme={darkMode}>
      <Content>
        {darkMode ? <LogoDark /> : <LogoLight />}
        {/* <Button colorTheme={darkMode}>
          <span></span>
          <span></span>
        </Button> */}
      </Content>
    </Container>
  );
}

export default Navbar;
