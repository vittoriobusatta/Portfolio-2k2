import React from "react";
import styled from "styled-components";
import setTitle from "../Utils/setTitle";
import { ManropeMedium, Morgenwalsh } from "../Utils/Common";
import { Link, Outlet } from "react-router-dom";


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
  }
  & span {
    font-family: ${Morgenwalsh};
    font-size: max(2.4rem, 16px);
    margin-bottom: 1.5rem;
  }
  & p {
    font-family: ${ManropeMedium};
    font-size: max(1.6rem, 14px);
    margin-top: 1.5rem;
    max-width: 200px;
    line-height: 20px;
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

function Landing({ darkMode, data }) {
  setTitle("Vittorio Busatta — Creative Developer ");

  return (
    <Container>
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
                      src={project.images.card.first.image}
                      alt={project.images.card.first.alt}
                    />
                    <img
                      src={project.images.card.second.image}
                      alt={project.images.card.second.alt}
                    />
                  </Cards>
                  <Details>
                    <span>{project.id}/5</span>
                    <h1>{project.name}</h1>
                    <p>{project.intro}</p>
                  </Details>
                </Path>
              </Link>
              <Outlet />
            </Content>
          </Item>
        ))}
      </Grid>
    </Container>
  );
}

export default Landing;
