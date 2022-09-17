import React from "react";
import styled from "styled-components";
import { ManropeMedium, Morgenwalsh } from "../Utils/Common";

const Grid = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Item = styled.li`
  height: 60vh;
  min-width: 100vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: #fff;
  background-color: ${(props) => props.background};
  padding: 5rem;
  @media screen and (min-width: 576px) {
    height: 80vh;
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
  background-color: ${(props) => props.background};
  background-color: #fff;

  height: 100%;
  width: 100%;
  & a {
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
  margin-top: 40px;
  & h1 {
    font-family: ${Morgenwalsh};
    font-size: 60px;
  }
  & span {
    font-family: ${Morgenwalsh};
    font-size: 24px;
    margin-bottom: 15px;
  }
  & p {
    font-family: ${ManropeMedium};
    font-size: 16px;
    margin-top: 15px;
    max-width: 300px;
    line-height: 20px;
    text-align: center;
  }
`;

function Projects({ data, darkMode }) {
  return (
    <Grid>
      {data.map((project, index) => (
        <Item background={project.background} colorTheme={darkMode} key={index}>
          {/* <Mask  /> */}
          <Content background={project.background}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Cards>
                <img src={project.images.card.first} alt={project.title} />
                <img src={project.images.card.second} alt={project.title} />
              </Cards>
              <Details>
                <span>{project.id}/5</span>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
              </Details>
            </a>
          </Content>
        </Item>
      ))}
    </Grid>
  );
}

export default Projects;
