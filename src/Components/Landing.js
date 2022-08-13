import React from "react";
import styled from "styled-components";
import {
  ManropeMedium,
  ManropeRegular,
  RecoletaRegular,
} from "../Utils/Common";
import setTitle from "../Utils/setTitle";
import Marquee from "./Marquee";

const Container = styled.section`
  height: 100vh;
  min-height: 800px;
  width: 100vw;
  padding-top: 80px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  height: 300px;
  padding: 24px;
  max-width: 450px;
  & a {
    font-size: 18px;
    font-family: ${ManropeMedium};
    color: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
  }
  & p {
    font-size: 12px;
    font-family: ${ManropeRegular};
    color: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
  }
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
`;
const Information = styled.div`
  padding: 15px 10px;
`;
const Thumnail = styled.div`
  height: 200px;
  width: 100%;
  background-color: ${(props) =>
    props.colorTheme === true ? "#FFEFD1" : "#1D1D1D"};
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  min-height: 700px;
  padding: 40px;
  & h1 {
    font-size: 64px;
    font-family: ${RecoletaRegular};
    text-align: center;
    color: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
  }
`;

const dataProjects = [
  {
    name: "Galleria",
    link: "https://galleria-ten.vercel.app/",
    date: "Aug 2022",
  },
  {
    name: "Sunnyside",
    link: "https://sunnyside-lovat.vercel.app/",
    date: "Jul 2022",
  },
  {
    name: "AB Distribution",
    link: "https://www.ab-distribution.re/",
    date: "May 2022",
  },
];

function Landing({ darkMode }) {
  setTitle("Vittorio Busatta — Creative Developer ");

  return (
    <Container>
      <Content colorTheme={darkMode}>
        {/* <Title colorTheme={darkMode}>
          <h1>Vittorio Busatta</h1>
        </Title> */}
        <Marquee darkMode={darkMode} />
        {dataProjects.map((project, index) => (
          <Item colorTheme={darkMode} key={index}>
            <Thumnail colorTheme={darkMode}></Thumnail>
            <Information>
              <Details>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
                <p>{project.date}</p>
              </Details>
            </Information>
          </Item>
        ))}
      </Content>
    </Container>
  );
}

export default Landing;
