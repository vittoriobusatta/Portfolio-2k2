import React, { useState } from "react";
import styled from "styled-components";
import { ManropeMedium, Morgenwalsh } from "../Utils/Common";

const Grid = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 400px;
  margin-top: 10vh;
`;

const Item = styled.li`
  width: 100%;
  position: relative;
`;

const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vw;
  width: 100%;
  border-radius: 50% 50% 0 0;
  border-radius: 100%;
  background-color: ${(props) => props.background};
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img {
      width: 16vw;
      min-width: 300px;
      height: auto;
      transition: transform 0.4s;
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
      /* width: 16vw; */
      height: auto;
      top: -4vw;
      transform-origin: right;
      z-index: 1;
      left: 4%;
      position: relative;
      transform: translateX(-8%) rotate(-10deg);
      /* transform: ${(props) =>
        props.onHover
          ? "translateX(-6%) rotate(-5deg)"
          : "translateX(-8%) rotate(-10deg)"}; */
    }
    & img:last-child {
      /* width: 16vw; */
      height: auto;
      transform-origin: left top;
      left: -4%;
      position: relative;
      transform: translateX(8%) translateY(-10%) rotate(10deg);
      /* transform: ${(props) =>
        props.onHover
          ? "translateX(6%) translateY(-2%) rotate(5deg)"
          : "translateX(8%) translateY(-10%) rotate(10deg)"}; */
    }
  }
`;
const Cards = styled.div`
  display: inline-flex;
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
        <Item colorTheme={darkMode} key={index}>
          <Mask background={project.background} />
          <Content>
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
