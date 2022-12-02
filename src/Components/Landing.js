import React from "react";
import styled from "styled-components";
import setTitle from "../Utils/setTitle";
import { ManropeMedium, ManropeRegular, Morgenwalsh } from "../Utils/Common";
import { Link, Outlet } from "react-router-dom";
import { Header, Layout, Asterix } from "../Utils/Common";
import { useRef } from "react";

const Container = styled.main`
  height: auto;
  min-height: 800px;
  width: 100%;
  /* padding-top: 80px; */
`;

const Grid = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Item = styled.li`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #fff;
  background-color: ${(props) => props.background};
  padding: 10rem 3rem;
  @media screen and (min-width: 576px) {
    height: 80vh;
    padding: 5rem;
  }
  @media screen and (min-width: 992px) {
    height: 100vh;
  }
`;
const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50% 50%;
  max-width: 1000px;
  min-height: 400px;
  background-color: #fff;
  height: 100%;
  width: 100%;
`;
const Path = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    width: 40%;
    height: auto;
    /* min-width: 100px; */
    max-width: 270px;
    transition: transform 0.4s;
    @media screen and (min-width: 992px) {
      max-width: 350px;
    }
  }
  &:hover {
    & img:first-child {
      transform: translateX(-6%) rotate(-5deg);
    }
    & img:last-child {
      transform: translateX(6%) translateY(-2%) rotate(5deg);
    }
  }
  & img:first-child {
    top: -4vw;
    transform-origin: right;
    z-index: 1;
    left: 4%;
    position: relative;
    transform: translateX(-8%) rotate(-10deg);
  }
  & img:last-child {
    transform-origin: left top;
    left: -4%;
    position: relative;
    transform: translateX(8%) translateY(-10%) rotate(10deg);
  }
`;
const Cards = styled.div`
  display: inline-flex;
  justify-content: center;
`;
const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 2;
  color: #222;
  margin-top: 20px;
  & h1 {
    font-family: ${Morgenwalsh};
    font-size: 6rem;
    text-align: center;
    text-transform: uppercase;
  }
  & span {
    font-family: ${ManropeRegular};
    font-size: max(2rem, 12px);
    margin-bottom: 1.5rem;
  }
  & p {
    font-family: ${ManropeMedium};
    font-size: max(1.6rem, 14px);
    margin-top: 2rem;
    max-width: 200px;
    line-height: 16px;
    text-align: center;
    padding-bottom: 10px;

    @media screen and (min-width: 576px) {
      max-width: 300px;
    }
    @media screen and (max-width: 321px) {
      padding-bottom: 0px;
    }
  }
  @media screen and (min-width: 576px) {
    margin-top: 40px;
  }
`;

const Footer = styled.footer`
  height: auto;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
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

function Landing({ darkMode, data }) {
  setTitle("Vittorio Busatta — Creative Developer ");
  const asterix = useRef(null);
  window.onscroll = () => {
    scrollRotate();
  };
  function scrollRotate() {
    asterix.current.style.transform =
      "rotate(" + window.pageYOffset / 2 + "deg)";
  }
  return (
    <Container data-scroll-section>
      <Header id="navbar" colorTheme={darkMode} data-scroll data-scroll-sticky data-scroll-target>
        <Layout>
          <Link to="/">
            <svg
              width="40"
              height="30"
              viewBox="0 0 67 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.8994 1.25938V0.801422C39.8994 0.267141 39.6132 0 39.0407 0L30.5685 0.0572437C29.9579 0.0572437 29.6526 0.286222 29.6526 0.744179L29.5954 0.973154V1.48835C29.6335 1.67917 29.6908 1.8509 29.7671 2.00355C29.8434 2.19437 30.1106 2.59508 30.5685 3.20569C31.0647 3.8163 31.389 4.35058 31.5417 4.80853C31.6944 5.26649 31.6753 6.04883 31.4845 7.15556L30.2053 11.0419L33.7058 11.042L34.9191 7.44178C35.4152 6.29689 36.3693 5.09476 37.7813 3.83538C39.1934 2.576 39.8994 1.71733 39.8994 1.25938Z"
                fill="#000"
              />
              <path
                d="M30.9123 19.3313L26.1607 33.4308C25.8173 34.9191 25.8363 35.9686 26.218 36.5792C26.5233 37.1517 26.3897 37.6096 25.8173 37.9531C24.3671 38.6018 22.8024 38.9262 21.1232 38.9262C20.6271 38.9262 20.2455 38.9072 19.9783 38.869H20.0356C19.0052 38.8308 18.0511 38.5446 17.1733 38.0103C16.2956 37.476 15.5323 36.7509 14.8836 35.835C14.273 34.881 13.7959 34.1177 13.4524 33.5453C13.1471 32.9346 12.8037 32.1714 12.422 31.2555C11.9259 30.1106 11.0673 27.5727 9.84605 23.642C8.663 19.7112 7.57535 16.0666 6.58311 12.7083C5.59088 9.31177 5.09476 7.55627 5.09476 7.44178C4.71313 6.48771 4.08344 5.59088 3.20569 4.75129C2.3661 3.9117 1.62193 3.22477 0.973156 2.69049C0.324385 2.15621 0 1.67917 0 1.25938V0.801422C0 0.267141 0.267141 0 0.801422 0L16.7154 0.0572437C17.326 0.0572437 17.6313 0.286222 17.6313 0.744179C17.7458 1.27846 17.7076 1.69825 17.5168 2.00355C17.4405 2.19437 17.1543 2.576 16.6581 3.14845C16.2002 3.72089 15.8567 4.3315 15.6277 4.98027C15.4369 5.62904 15.456 6.33505 15.685 7.09831L15.7995 7.38454C18.3564 19.8257 20.2645 27.3819 21.5239 30.0533C21.8292 30.5876 22.249 30.8548 22.7833 30.8548C23.3939 30.8548 23.7946 30.5495 23.9854 29.9389L28.6224 15.851C29.9434 17.1817 30.7069 18.4356 30.9123 19.3313Z"
                fill="#000"
              />
              <path
                d="M59.5909 39.2896C59.6258 42.4839 58.4189 45.0206 55.9699 46.8996C53.5209 48.7786 50.2847 49.8121 46.2614 50H46.3139H28.6288C28.4538 50 28.2789 49.9248 28.104 49.7745C27.9641 49.6242 27.8941 49.4551 27.8941 49.2672C27.7541 48.7411 27.7541 48.3277 27.8941 48.027C27.9291 47.9143 28.5063 47.2378 29.6259 45.9977C30.7454 44.7199 31.3052 43.6677 31.3052 42.8409V18.9961C31.3052 18.1318 30.7454 17.0795 29.6259 15.8393C28.5413 14.5992 27.9641 13.8852 27.8941 13.6973C27.8241 13.5845 27.7891 13.4342 27.7891 13.2463C27.7891 13.0208 27.8066 12.8329 27.8416 12.6826L27.8941 12.4571C27.8941 12.0437 28.139 11.837 28.6288 11.837H44.792C48.2556 11.837 51.0894 12.7202 53.2935 14.4865C55.4976 16.2152 56.6171 18.376 56.6521 20.9691C56.6521 22.9233 56.0224 24.6896 54.7629 26.2679C53.5384 27.8087 51.8241 28.9361 49.62 29.6502C52.6637 30.1387 55.0777 31.2661 56.862 33.0324C58.6463 34.7987 59.5559 36.8844 59.5909 39.2896ZM48.3605 19.6162C47.311 15.6327 45.6142 13.6409 43.2702 13.6409C41.381 13.6409 40.2264 14.881 39.8066 17.3614V20.4054C39.8066 20.443 39.8241 20.4993 39.8591 20.5745V20.6309C40.5938 25.817 42.3431 28.41 45.1069 28.41C45.4568 28.41 45.8766 28.3349 46.3664 28.1845C47.5559 27.7712 48.3256 26.6813 48.6754 24.915C49.0253 23.1112 48.9203 21.3449 48.3605 19.6162ZM45.3168 47.5197C47.1011 47.5197 48.588 46.7493 49.7775 45.2085C50.967 43.6677 51.3693 41.7323 50.9845 39.4023C50.7046 37.8239 50.1623 36.565 49.3576 35.6255C48.588 34.686 47.346 33.878 45.6317 33.2015C45.5267 33.1639 45.1769 33.0324 44.5821 32.8069C44.0224 32.5814 43.6025 32.4123 43.3226 32.2996C43.0428 32.1493 42.6579 31.9426 42.1681 31.6795C41.7133 31.4165 41.2935 31.1158 40.9087 30.7776C40.5238 30.4394 40.174 30.0636 39.8591 29.6502V33.4834C39.9291 36.0389 40.104 38.2373 40.3839 40.0788C40.6638 41.9202 40.9786 43.3107 41.3285 44.2502C41.6783 45.1521 42.1331 45.8661 42.6929 46.3923C43.2527 46.9184 43.69 47.2378 44.0049 47.3506C44.3547 47.4257 44.792 47.4821 45.3168 47.5197Z"
                fill="#000"
              />
              <path
                d="M56.4494 25.442C61.9452 24.3454 66.7852 19.4742 66.7852 13.6315C66.7852 6.9813 61.419 1.59012 54.7987 1.59012C48.7594 1.59012 43.7644 5.29536 42.9333 11.1309H44.5235C50.884 11.1309 54.1171 13.5954 55.6543 15.9012C56.5884 17.3023 57.2445 18.2864 57.2445 22.2617C57.2445 23.8519 56.4494 25.442 56.4494 25.442Z"
                fill="#fff6e7"
              />
              <path
                d="M47.7037 23.8519C47.7037 23.8519 48.4988 24.6469 47.7037 20.6716C46.9087 16.6963 45.3185 14.3111 42.9333 14.3111C43.032 18.2911 44.4815 21.9644 47.7037 23.8519Z"
                fill="#fff6e7"
              />
            </svg>
          </Link>
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
              fill="#000"
            />
          </Asterix>
        </Layout>
      </Header>
      <Grid>
        {data.map((project, index) => (
          <Item
            background={project.primaryColor}
            colorTheme={darkMode}
            key={index}
          >
            <Content>
              <Link to={`${project.path}`}>
                <Path>
                  <Cards>
                    <img
                      data-scroll
                      src={project.images.card.first.image}
                      alt={project.images.card.first.alt}
                    />
                    <img
                      data-scroll
                      src={project.images.card.second.image}
                      alt={project.images.card.second.alt}
                    />
                  </Cards>
                  <Details>
                    <span>{project.id}/6</span>
                    <h1>{project.name}</h1>
                    {/* <p>{project.intro}</p> */}
                  </Details>
                </Path>
              </Link>
              <Outlet />
            </Content>
          </Item>
        ))}
      </Grid>
      <Footer>
        <p>Build & Design by Vittorio</p>
      </Footer>
    </Container>
  );
}

export default Landing;
