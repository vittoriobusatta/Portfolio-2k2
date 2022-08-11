import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { ManropeMedium } from "../Utils/Common";
import setTitle from '../Utils/setTitle';

const Container = styled.section`
  z-index: 1000;
  width: 100%;
  height: fill-available;
  min-height: 100vh;
  background-color: ${(props) =>
    props.colorTheme === true ? "#1D1D1D" : "#FFEFD1"};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.5s ease-in-out;
  opacity: 1;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const bounce = keyframes`
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
`;

const Circle = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${(props) =>
    props.colorTheme === true ? "#FFEFD1" : "#1D1D1D"};
  border-radius: 50%;
  margin-bottom: 180px;
  animation: ${bounce} 1.5s ease infinite;
`;

const Svg = styled.svg`
  & path {
    fill: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
  }
`;

const Texte = styled.div`
  margin-top: 180px;
  & p {
    font-family: ${ManropeMedium};
    font-size: 12px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
    & span:nth-child(1) {
      margin-bottom: 2px;
    }
    & span:nth-child(3) {
      margin-top: 14px;
    }
  }
`;

function Loader({ darkMode }) {

  setTitle("Loader");

  let container = useRef(null);
  let P = useRef(null);
  let O = useRef(null);
  let R = useRef(null);
  let T = useRef(null);
  let F = useRef(null);
  let O2 = useRef(null);
  let L = useRef(null);
  let I = useRef(null);
  let O3 = useRef(null);
  let point = useRef(null);
  let circle = useRef(null);
  let firstSpan = useRef(null);
  let secondSpan = useRef(null);
  let thirdSpan = useRef(null);

  useEffect(() => {
    const Loader = () => {
      gsap.fromTo(
        container.current,
        { opacity: 1 },
        {
          // display: "none",
          duration: 3,
          ease: "power3.inOut",
          delay: 1,
        }
      );
      gsap.fromTo(
        circle.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          delay: 1,
          ease: "power2.out",
          y: 0,
        }
      );
      gsap.fromTo(
        P.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          delay: 1.5,
          ease: "power2.out",
          y: 0,
        }
      );
      gsap.fromTo(
        T.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          delay: 1.6,
          ease: "power2.out",
          y: 0,
        }
      );
      gsap.fromTo(
        L.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          delay: 1.7,
          ease: "power2.out",
          y: 0,
        }
      );
      gsap.fromTo(
        O.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          delay: 1.8,
          ease: "power2.out",
          y: 0,
        }
      );
      gsap.fromTo(
        I.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          delay: 2,
          ease: "power2.out",
          y: 0,
        }
      );
      gsap.fromTo(
        F.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          delay: 1.9,
          ease: "power2.out",
          y: 0,
        }
      );
      gsap.fromTo(
        R.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          delay: 2,
          ease: "power2.out",
          y: 0,
        }
      );
      gsap.fromTo(
        O2.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          delay: 2.2,
          ease: "power2.out",
          y: 0,
        }
      );
      gsap.fromTo(
        point.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          delay: 2.4,
          ease: "power3.out",
          y: 0,
        }
      );
      gsap.fromTo(
        O3.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          delay: 2.3,
          ease: "power2.out",
          y: 0,
        }
      );

      gsap.fromTo(
        firstSpan.current,
        {
          opacity: 0,
          y: 5,
        },
        {
          opacity: 1,
          delay: 2.2,
          ease: "power3.inOut",
          y: 0,
        }
      );
      gsap.fromTo(
        secondSpan.current,
        {
          opacity: 0,
          y: 5,
        },
        {
          opacity: 1,
          delay: 2.4,
          ease: "power3.inOut",
          y: 0,
        }
      );
      gsap.fromTo(
        thirdSpan.current,
        {
          opacity: 0,
          y: 5,
        },
        {
          opacity: 1,
          delay: 2.6,
          ease: "power3.inOut",
          y: 0,
        }
      );
    };
    window.addEventListener("load", Loader);
    return () => window.removeEventListener("load", Loader);
  }, []);

  return (
    <Container
      ref={container}
      colorTheme={darkMode}
    >
      <Content>
        <Circle ref={circle} colorTheme={darkMode} />
        <Svg
          colorTheme={darkMode}
          width="180"
          height="203"
          viewBox="0 0 180 203"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={P}
            d="M12.16 54.56C11.9467 53.8133 11.9467 53.2267 12.16 52.8C12.2133 52.64 13.0933 51.68 14.8 49.92C16.5067 48.1067 17.36 46.6133 17.36 45.44V11.6C17.36 10.3733 16.5067 8.88 14.8 7.12C13.1467 5.36 12.2667 4.34667 12.16 4.08C12.0533 3.92 12 3.70667 12 3.44C12 3.12 12.0267 2.85333 12.08 2.64L12.16 2.32C12.16 1.73333 12.5333 1.44 13.28 1.44C30.08 1.33333 38.5333 1.28 38.64 1.28C44.8267 1.28 49.92 3.17333 53.92 6.96C57.92 10.6933 59.92 15.28 59.92 20.72C59.92 26.2667 57.9733 30.9067 54.08 34.64C50.1867 38.32 45.04 40.16 38.64 40.16C35.6533 40.16 32.9067 39.7333 30.4 38.88V45.6C30.4 46.9333 31.2533 48.5067 32.96 50.32C34.72 52.1333 35.6 53.28 35.6 53.76V54.48C35.6 54.7467 35.4667 55.0133 35.2 55.28C34.9333 55.4933 34.64 55.6 34.32 55.6H13.28C13.0133 55.6 12.7467 55.4933 12.48 55.28C12.2667 55.0667 12.16 54.8267 12.16 54.56ZM36.4 5.2C34.4267 5.2 32.96 5.97333 32 7.52C31.0933 9.06667 30.56 10.9333 30.4 13.12V16.64C30.56 18.56 30.8267 20.5067 31.2 22.48C31.6267 24.4 32.2133 26.4533 32.96 28.64C33.76 30.8267 34.8533 32.6133 36.24 34C37.68 35.3867 39.3067 36.08 41.12 36.08C41.44 36.08 41.92 36.0267 42.56 35.92C47.0933 34.9067 48.24 29.4133 46 19.44C44.9333 15.1733 43.5733 11.7333 41.92 9.12C40.2667 6.50667 38.4267 5.2 36.4 5.2Z"
            fill="#1D1D1D"
          />
          <path
            ref={O}
            d="M119.4 22.48C121.427 30.6933 120.44 37.9733 116.44 44.32C114.2 48.2667 111.053 51.3333 107 53.52C103 55.7067 98.68 56.8 94.04 56.8C87.5333 56.8 81.9067 54.6933 77.16 50.48C72.4667 46.2667 69.32 40.88 67.72 34.32C65.8 26.2667 66.7867 18.96 70.68 12.4C73.0267 8.45333 76.2 5.41333 80.2 3.28C84.2 1.09333 88.52 0 93.16 0C99.5067 0 105.08 2.16 109.88 6.48C114.68 10.7467 117.853 16.08 119.4 22.48ZM100.2 52.24C103.4 51.4933 105.293 48.56 105.88 43.44C106.52 38.2667 105.933 32.2933 104.12 25.52C102.52 19.0133 100.333 13.84 97.56 10C94.84 6.16 92.04 4.24 89.16 4.24C88.6267 4.24 88.0933 4.32 87.56 4.48C84.4667 5.17333 82.5467 8.10667 81.8 13.28C81.1067 18.4533 81.6667 24.4533 83.48 31.28C85.1333 37.9467 87.2933 43.1467 89.96 46.88C92.6267 50.6133 95.48 52.48 98.52 52.48C99.1067 52.48 99.6667 52.4 100.2 52.24Z"
            fill="#1D1D1D"
          />
          <path
            ref={R}
            d="M176.96 49.68C177.547 49.68 177.84 49.92 177.84 50.4C177.68 51.84 176.773 53.28 175.12 54.72C173.52 56.1067 171.467 56.8 168.96 56.8C166.293 56.8 164.107 56.1333 162.4 54.8C160.693 53.4667 159.12 51.44 157.68 48.72C157.413 48.24 156.667 46.64 155.44 43.92C154.267 41.2 153.147 39.2 152.08 37.92C151.013 36.5867 149.68 35.6267 148.08 35.04C146.96 34.88 146.4 34.7467 146.4 34.64V45.6C146.4 46.9333 147.253 48.5067 148.96 50.32C150.72 52.1333 151.6 53.28 151.6 53.76V54.48C151.6 54.7467 151.467 55.0133 151.2 55.28C150.933 55.4933 150.64 55.6 150.32 55.6H129.28C129.013 55.6 128.747 55.4933 128.48 55.28C128.267 55.0667 128.16 54.8267 128.16 54.56C127.947 53.8133 127.947 53.2267 128.16 52.8C128.213 52.64 129.093 51.68 130.8 49.92C132.507 48.1067 133.36 46.6133 133.36 45.44V11.6C133.36 10.3733 132.507 8.88 130.8 7.12C129.147 5.36 128.267 4.34667 128.16 4.08C128.053 3.92 128 3.70667 128 3.44C128 3.12 128.027 2.85333 128.08 2.64L128.16 2.32C128.16 1.73333 128.533 1.44 129.28 1.44C145.387 1.33333 153.547 1.28 153.76 1.28C159.627 1.28 164.453 2.93333 168.24 6.24C172.027 9.54667 173.92 13.6267 173.92 18.48C173.92 22 172.933 25.1467 170.96 27.92C169.04 30.6933 166.32 32.7467 162.8 34.08C164.773 35.04 166.213 36.3467 167.12 38C167.653 38.9067 168.347 40.2133 169.2 41.92C170.053 43.5733 170.747 44.88 171.28 45.84C171.813 46.8 172.507 47.7067 173.36 48.56C174.213 49.36 175.12 49.76 176.08 49.76C176.453 49.76 176.747 49.7333 176.96 49.68ZM161.04 17.2C160.453 13.5733 159.227 10.5867 157.36 8.24C155.547 5.89333 153.573 4.72 151.44 4.72C150.96 4.72 150.613 4.74667 150.4 4.8C149.707 4.96 149.12 5.25333 148.64 5.68C148.16 6.10667 147.787 6.69333 147.52 7.44C147.253 8.13333 147.04 8.85333 146.88 9.6C146.773 10.2933 146.693 11.2 146.64 12.32C146.64 13.44 146.64 14.4533 146.64 15.36C146.693 16.2133 146.747 17.3333 146.8 18.72C146.853 20.0533 146.88 21.1467 146.88 22C146.933 25.2533 147.68 27.5733 149.12 28.96C150.613 30.2933 152.347 30.96 154.32 30.96C155.067 30.96 155.813 30.8533 156.56 30.64C158.747 30.0533 160.16 28.48 160.8 25.92C161.493 23.36 161.573 20.4533 161.04 17.2Z"
            fill="#1D1D1D"
          />
          <path
            ref={T}
            d="M18.64 86V85.92L19.92 73.52C19.9733 72.88 20.24 72.3467 20.72 71.92C21.1467 71.4933 21.68 71.28 22.32 71.28H64.64C65.28 71.28 65.84 71.4933 66.32 71.92C66.8 72.3467 67.0667 72.88 67.12 73.52L68.4 85.92V86C68.4 86.8 68.0533 87.2 67.36 87.2H65.84C65.2533 87.2 64.32 86.24 63.04 84.32C61.8133 82.4 60.4 80.48 58.8 78.56C57.2 76.5867 55.6267 75.6 54.08 75.6H52.48C51.84 75.6 51.28 75.84 50.8 76.32C50.3733 76.7467 50.16 77.28 50.16 77.92V115.6C50.16 116.933 50.9867 118.507 52.64 120.32C54.3467 122.133 55.2 123.28 55.2 123.76V124.48C55.2 125.227 54.8267 125.6 54.08 125.6H33.12C32.2667 125.6 31.84 125.253 31.84 124.56C31.7867 123.813 31.84 123.227 32 122.8C32.1067 122.427 32.6133 121.84 33.52 121.04C34.4267 120.187 35.2267 119.28 35.92 118.32C36.6667 117.307 37.0133 116.347 36.96 115.44V77.92C36.96 77.28 36.7467 76.7467 36.32 76.32C35.9467 75.84 35.44 75.6 34.8 75.6H32.88C31.7067 75.6 30.48 76.2133 29.2 77.44C27.92 78.6133 26.8267 79.9467 25.92 81.44C25.0667 82.88 24.2133 84.2133 23.36 85.44C22.4533 86.6133 21.76 87.2 21.28 87.2H19.68C18.9867 87.2 18.64 86.8 18.64 86Z"
            fill="#1D1D1D"
          />
          <path
            ref={F}
            d="M73.16 124.56C72.9467 123.813 72.9467 123.28 73.16 122.96C73.2667 122.693 74.1467 121.68 75.8 119.92C77.5067 118.16 78.36 116.667 78.36 115.44V81.6C78.36 80.3733 77.5067 78.88 75.8 77.12C74.1467 75.36 73.2667 74.3467 73.16 74.08C73.0533 73.92 73 73.7067 73 73.44C73 73.1733 73.0267 72.96 73.08 72.8L73.16 72.48C73.16 71.7867 73.5333 71.44 74.28 71.44L113 71.28C113.64 71.28 114.2 71.4933 114.68 71.92C115.16 72.3467 115.427 72.88 115.48 73.52L116.76 85.92V86C116.76 86.8 116.387 87.2 115.64 87.2H114.12C113.533 87.2 112.627 86.24 111.4 84.32C110.173 82.4 108.76 80.48 107.16 78.56C105.56 76.5867 104.013 75.6 102.52 75.6H97.64C95.88 75.6 94.3867 76.2133 93.16 77.44C91.9867 78.6133 91.4 80.0533 91.4 81.76V95.52C91.4 96.1067 91.6133 96.64 92.04 97.12C92.52 97.5467 93.08 97.76 93.72 97.76H95.4C96.9467 97.76 98.3333 97.2 99.56 96.08C100.84 94.9067 101.933 93.76 102.84 92.64C103.747 91.4667 104.493 90.88 105.08 90.88H106.76C107.027 90.88 107.267 91.0133 107.48 91.28C107.693 91.4933 107.8 91.7333 107.8 92V107.84C107.8 108.16 107.693 108.453 107.48 108.72C107.267 108.987 107.027 109.12 106.76 109.12H105.08C104.493 109.12 103.747 108.533 102.84 107.36C101.933 106.187 100.84 105.04 99.56 103.92C98.3333 102.747 96.9467 102.16 95.4 102.16H93.72C93.08 102.16 92.52 102.4 92.04 102.88C91.6133 103.307 91.4 103.813 91.4 104.4V115.6C91.4 116.933 92.2533 118.507 93.96 120.32C95.72 122.133 96.6 123.307 96.6 123.84V124.56C96.6 124.827 96.4667 125.067 96.2 125.28C95.9333 125.493 95.64 125.6 95.32 125.6H74.28C74.0133 125.6 73.7467 125.493 73.48 125.28C73.2667 125.067 73.16 124.827 73.16 124.56Z"
            fill="#1D1D1D"
          />
          <path
            ref={O2}
            d="M177.4 95.48C179.427 103.693 178.44 110.973 174.44 117.32C172.2 121.267 169.053 124.333 165 126.52C161 128.707 156.68 129.8 152.04 129.8C145.533 129.8 139.907 127.693 135.16 123.48C130.467 119.267 127.32 113.88 125.72 107.32C123.8 99.2667 124.787 91.96 128.68 85.4C131.027 81.4533 134.2 78.4133 138.2 76.28C142.2 74.0933 146.52 73 151.16 73C157.507 73 163.08 75.16 167.88 79.48C172.68 83.7467 175.853 89.08 177.4 95.48ZM158.2 125.24C161.4 124.493 163.293 121.56 163.88 116.44C164.52 111.267 163.933 105.293 162.12 98.52C160.52 92.0133 158.333 86.84 155.56 83C152.84 79.16 150.04 77.24 147.16 77.24C146.627 77.24 146.093 77.32 145.56 77.48C142.467 78.1733 140.547 81.1067 139.8 86.28C139.107 91.4533 139.667 97.4533 141.48 104.28C143.133 110.947 145.293 116.147 147.96 119.88C150.627 123.613 153.48 125.48 156.52 125.48C157.107 125.48 157.667 125.4 158.2 125.24Z"
            fill="#1D1D1D"
          />
          <path
            ref={L}
            d="M42.64 152.76C43.3867 152.76 43.76 153.187 43.76 154.04L42.48 166.44C42.4267 167.08 42.16 167.613 41.68 168.04C41.2 168.413 40.64 168.6 40 168.6H1.28C1.01333 168.6 0.746667 168.493 0.48 168.28C0.266667 168.067 0.16 167.827 0.16 167.56C-0.0533333 166.813 -0.0533333 166.227 0.16 165.8C0.213333 165.64 1.09333 164.68 2.8 162.92C4.50667 161.107 5.36 159.613 5.36 158.44V124.6C5.36 123.373 4.50667 121.88 2.8 120.12C1.14667 118.36 0.266667 117.347 0.16 117.08C0.0533333 116.92 0 116.707 0 116.44C0 116.12 0.0266667 115.853 0.08 115.64L0.16 115.32C0.16 114.733 0.533333 114.44 1.28 114.44L22.32 114.28C23.1733 114.28 23.6 114.68 23.6 115.48V116.12C23.6 116.653 22.72 117.853 20.96 119.72C19.2533 121.533 18.4 123.08 18.4 124.36V158.2C18.4 159.907 18.9867 161.373 20.16 162.6C21.3867 163.827 22.88 164.44 24.64 164.44H29.52C30.6933 164.44 31.8933 163.827 33.12 162.6C34.4 161.373 35.4667 160.04 36.32 158.6C37.2267 157.16 38.1333 155.827 39.04 154.6C39.9467 153.373 40.64 152.76 41.12 152.76H42.64Z"
            fill="#1D1D1D"
          />
          <path
            ref={I}
            d="M58.16 150.08C58.0533 149.92 58 149.707 58 149.44C58 149.12 58.0267 148.853 58.08 148.64L58.16 148.32C58.16 147.733 58.5333 147.44 59.28 147.44L80.32 147.28C81.1733 147.28 81.6 147.68 81.6 148.48V149.12C81.6 149.653 80.72 150.853 78.96 152.72C77.2533 154.533 76.4 156.08 76.4 157.36V191.6C76.4 192.933 77.2533 194.507 78.96 196.32C80.72 198.133 81.6 199.28 81.6 199.76V200.48C81.6 200.747 81.4667 201.013 81.2 201.28C80.9333 201.493 80.64 201.6 80.32 201.6H59.28C59.0133 201.6 58.7467 201.493 58.48 201.28C58.2667 201.067 58.16 200.827 58.16 200.56C57.9467 199.813 57.9467 199.227 58.16 198.8C58.2133 198.64 59.0933 197.68 60.8 195.92C62.5067 194.107 63.36 192.613 63.36 191.44V157.6C63.36 156.373 62.5067 154.88 60.8 153.12C59.1467 151.36 58.2667 150.347 58.16 150.08Z"
            fill="#1D1D1D"
          />
          <path
            ref={O3}
            d="M148.4 168.48C150.427 176.693 149.44 183.973 145.44 190.32C143.2 194.267 140.053 197.333 136 199.52C132 201.707 127.68 202.8 123.04 202.8C116.533 202.8 110.907 200.693 106.16 196.48C101.467 192.267 98.32 186.88 96.72 180.32C94.8 172.267 95.7867 164.96 99.68 158.4C102.027 154.453 105.2 151.413 109.2 149.28C113.2 147.093 117.52 146 122.16 146C128.507 146 134.08 148.16 138.88 152.48C143.68 156.747 146.853 162.08 148.4 168.48ZM129.2 198.24C132.4 197.493 134.293 194.56 134.88 189.44C135.52 184.267 134.933 178.293 133.12 171.52C131.52 165.013 129.333 159.84 126.56 156C123.84 152.16 121.04 150.24 118.16 150.24C117.627 150.24 117.093 150.32 116.56 150.48C113.467 151.173 111.547 154.107 110.8 159.28C110.107 164.453 110.667 170.453 112.48 177.28C114.133 183.947 116.293 189.147 118.96 192.88C121.627 196.613 124.48 198.48 127.52 198.48C128.107 198.48 128.667 198.4 129.2 198.24Z"
            fill="#1D1D1D"
          />
          <path
            ref={point}
            d="M165 186.76V201.56H179.8V186.76H165Z"
            fill="#1D1D1D"
          />
        </Svg>
        <Texte colorTheme={darkMode}>
          <p>
            <span ref={firstSpan}>vittorio busatta</span>
            <span ref={secondSpan}>Front-End Developer & Designer</span>
            <span ref={thirdSpan}>© 2003</span>
          </p>
        </Texte>
      </Content>
    </Container>
  );
}

export default Loader;
