import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LogoLight } from "../Utils/Icon";

const Container = styled.header`
  position: fixed;
  top: 0;
  height: 82px;
  width: 100%;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 0.3s;
`;
const Content = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 25px 20px;
  & a svg path:nth-child(4),
  & a svg path:nth-child(5) {
    fill: #fff6e7;
  }
  @media screen and (min-width: 1224px) {
    padding: 25px 70px;
  }
`;
const Asterix = styled.svg`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

function Navbar({ darkMode }) {
  const asterix = useRef(null);
  window.onscroll = () => {
    scrollRotate();
  };
  function scrollRotate() {
    asterix.current.style.transform =
      "rotate(" + window.pageYOffset / 2 + "deg)";
  }
  return (
    <Container id="navbar" colorTheme={darkMode}>
      <Content>
        <Asterix
          ref={asterix}
          width="32"
          height="36"
          viewBox="0 0 32 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.4531 21.0833C31.151 22 32 23.2222 32 24.75C32 25.5 31.7672 26.2361 31.3017 26.9583C30.6444 28.375 29.5764 29.0833 28.0976 29.0833C27.276 29.0833 26.386 28.8056 25.4275 28.25C24.5785 27.8056 23.7706 27.1806 23.0039 26.375C22.2644 25.5694 21.1964 24.3194 19.7997 22.625C17.9375 20.4583 16.7873 19.1111 16.3492 18.5833C16.7873 19.9722 17.294 21.375 17.8691 22.7917C18.6906 25.1806 19.2657 26.9583 19.5944 28.125C19.9504 29.2917 20.1284 30.3889 20.1284 31.4167C20.1284 33 19.7176 34.1667 18.896 34.9167C18.1018 35.6389 17.1433 36 16.0205 36C14.8977 36 13.9392 35.6389 13.1451 34.9167C12.3509 34.1667 11.9538 33 11.9538 31.4167C11.9538 30.3889 12.1181 29.2778 12.4467 28.0833C12.8027 26.8889 13.3778 25.2083 14.172 23.0417L15.733 18.5C14.8019 19.5278 13.6517 20.9028 12.2824 22.625C11.2965 23.8194 10.3107 24.9444 9.32477 26C8.3389 27.0556 7.44887 27.8333 6.65469 28.3333C5.83312 28.8333 4.94309 29.0833 3.9846 29.0833C2.58793 29.0833 1.46513 28.4028 0.616175 27.0417C0.205392 26.2639 0 25.5556 0 24.9167C0 23.4444 0.848952 22.1944 2.54685 21.1667C3.39581 20.6389 4.3543 20.25 5.42234 20C6.51776 19.75 8.16089 19.4306 10.3517 19.0417C12.8986 18.625 14.6102 18.3056 15.4865 18.0833C14.3637 17.8611 12.6521 17.5556 10.3517 17.1667C8.29782 16.8056 6.68207 16.4722 5.50449 16.1667C4.32691 15.8611 3.31365 15.4444 2.4647 14.9167C0.821566 13.9167 0 12.6667 0 11.1667C0 10.4444 0.205392 9.73611 0.616175 9.04167C1.38297 7.625 2.47839 6.91667 3.90244 6.91667C4.72401 6.91667 5.61404 7.19444 6.57253 7.75C7.47625 8.33333 8.36628 9.09722 9.24262 10.0417C10.1463 10.9583 11.2828 12.25 12.6521 13.9167C13.3094 14.7778 14.3089 16 15.6508 17.5833L13.9666 12.7083C13.2546 10.5417 12.7206 8.88889 12.3646 7.75C12.0359 6.61111 11.8716 5.56944 11.8716 4.625C11.8716 3.01389 12.2824 1.84722 13.104 1.125C13.9255 0.375 14.8977 0 16.0205 0C17.1433 0 18.0881 0.375 18.8549 1.125C19.6491 1.84722 20.0462 3.01389 20.0462 4.625C20.0462 5.56944 19.8819 6.58333 19.5533 7.66667C19.252 8.75 18.7454 10.2639 18.0334 12.2083C17.8143 12.8194 17.5404 13.5417 17.2118 14.375C16.9106 15.2083 16.5956 16.2222 16.267 17.4167L19.8819 13.2083C21.2238 11.5694 22.2644 10.3611 23.0039 9.58333C23.7706 8.77778 24.5511 8.13889 25.3453 7.66667C26.1943 7.16667 27.0843 6.91667 28.0154 6.91667C28.7548 6.91667 29.3984 7.125 29.9461 7.54167C30.5212 7.93056 30.973 8.40278 31.3017 8.95833C31.7672 9.70833 32 10.4444 32 11.1667C32 12.7222 31.151 13.9444 29.4531 14.8333C28.6316 15.3611 27.6731 15.75 26.5777 16C25.4822 16.25 23.8117 16.5833 21.5661 17C18.9097 17.4444 17.2529 17.75 16.5956 17.9167C17.4994 18.1389 19.1562 18.4583 21.5661 18.875C23.976 19.3194 25.6876 19.6667 26.7009 19.9167C27.7142 20.1667 28.6316 20.5556 29.4531 21.0833Z"
            fill="#222"
          />
        </Asterix>
        <Link to="/">
          <LogoLight />
        </Link>
        <button>Projets</button>
      </Content>
    </Container>
  );
}

export default Navbar;
