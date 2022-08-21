import React from "react";
import styled from "styled-components";
import { ManropeMedium, ManropeRegular } from "../Utils/Common";

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-row-gap: 60px;
  padding: 48px 24px;
  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 30px;
    padding: 48px;
  }
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & h4 {
    font-size: 16px;
    font-family: ${ManropeMedium};
    color: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
  }
  & p {
    font-size: 12px;
    font-family: ${ManropeRegular};
    color: ${(props) => (props.colorTheme === true ? "#FFEFD1" : "#1D1D1D")};
  }

  &:nth-child(1) {
    grid-area: 1 / 1 / 3 / 4;
  }
  &:nth-child(2) {
    grid-area: 2 / 1 / 3 / 2;
  }
  &:nth-child(3) {
    grid-area: 3 / 1 / 4 / 2;
  }
  &:nth-child(4) {
    grid-area: 4 / 1 / 5 / 2;
  }
  &:nth-child(5) {
    grid-area: 5 / 1 / 6 / 2;
  }

  @media screen and (min-width: 576px) {
    &:nth-child(1) {
      grid-area: 1 / 1 / 3 / 4;
    }
    &:nth-child(2) {
      grid-area: 3 / 2 / 5 / 5;
    }
    &:nth-child(3) {
      grid-area: 5 / 1 / 7 / 4;
    }
    &:nth-child(4) {
      grid-area: 7 / 2 / 9 / 5;
    }
    &:nth-child(5) {
      grid-area: 9 / 1 / 11 / 4;
    }
  }
`;
const ItemContent = styled.div`
  height: 100%;
  width: 100%;
  max-width: 420px;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
`;
const Information = styled.div`
  width: 100%;
  padding: 20px 5px 0 5px;
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

function Projects({data, darkMode}) {
  return (
    <Grid>
      {data.map((project, index) => (
        <Item colorTheme={darkMode} key={index}>
          <ItemContent>
            <Thumnail colorTheme={darkMode}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.images.thumbnail.small} alt={project.title} />
              </a>
            </Thumnail>
            <Information>
              <Details>
                <h4>{project.name}</h4>
                <p>{project.date}</p>
              </Details>
            </Information>
          </ItemContent>
        </Item>
      ))}
    </Grid>
  );
}

export default Projects;
