import React, { useEffect, useState } from "react";
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
    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
`;

function Landing({ darkMode, data }) {
  setTitle("Vittorio Busatta — Creative Developer ");

  return (
    <Container>
      <Content colorTheme={darkMode}>
        <Marquee darkMode={darkMode} />
        {data.map((project, index) => (
          <Item colorTheme={darkMode} key={index}>
            <Thumnail colorTheme={darkMode}>
              <img src={project.images.thumbnail.small} alt={project.title} />
            </Thumnail>
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
