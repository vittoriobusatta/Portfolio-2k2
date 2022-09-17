import React from 'react'
import { Container, Content, Details, Info, Title } from '../../Utils/Common'
import setTitle from "../../Utils/setTitle";

function Unkle({data}) {
  setTitle("Vittorio Busatta — Unkle");
  const projectData = data.filter(project => project.id === 3)
  return (
    <Container>
      <Content background={projectData[0].background}>
        <Info>
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
              <h2>Role</h2>
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
      </Content>
    </Container>
  );
}

export default Unkle