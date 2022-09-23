import React from 'react'
import styled from 'styled-components';
import { Container, Content, Details, Info, Presentation, Title } from '../../Utils/Common'
import setTitle from "../../Utils/setTitle";

export const Overview = styled(Presentation)`
  & img {
    width: 90%;
    height: 100%;
    &:nth-child(3) {
      width: auto;
    }
  }
`;

function Sunnyside({data}) {
  setTitle("Vittorio Busatta — Sunnyside");
  const projectData = data.filter(project => project.id === 4)
  return (
    <Container background={projectData[0].background}>
      <Content>
        <Info background={projectData[0].background}>
          <Title color={projectData[0].textColor}>{projectData[0].name}</Title>
          <Details color={projectData[0].textColor}>
            <li>
              <h2>Type</h2>
              <p>{projectData[0].type}</p>
            </li>
            <li>
              <h2>Date</h2>
              <p>{projectData[0].date}</p>
            </li>
            <li>
              <h2>Rôle</h2>
              <p>{projectData[0].role}</p>
            </li>
            <li>
              <h2>Technologies</h2>
              <p>{projectData[0].technologies}</p>
            </li>
            <li>
              <h2>Description</h2>
              <p>{projectData[0].description}</p>
            </li>
            <li>
              <a href={projectData[0].link} target="_blank" rel="noopener noreferrer">
                {projectData[0].link}
              </a>
            </li>
          </Details>
        </Info>
        <Overview background={projectData[0].background}>
          <img src={projectData[0].images.view.landing} alt={projectData[0].name} />
          <img src={projectData[0].images.view.desktop} alt={projectData[0].name} />
          <img src={projectData[0].images.view.mobile} alt={projectData[0].name} />
        </Overview>
      </Content>
    </Container>
  );
}

export default Sunnyside