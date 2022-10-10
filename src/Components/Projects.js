import React, { useState } from "react";
import styled from "styled-components";
import setTitle from "../Utils/setTitle";

const Container = styled.section`
  margin-top: 82px;
  min-height: 100vh;
`;

const Content = styled.div`
  position: relative;
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  height: auto;
  width: auto;
  overflow-y: scroll;
  max-height: 750px;
  padding-right: 5rem;
  @media (max-width: 1100px) {
    max-height: 650px;
  }
  ::-webkit-scrollbar {
    cursor: pointer;
    border: none;
  }
`;
const Li = styled.li`
  margin-bottom: 5rem;
  padding-left: 2rem;
  @media (max-width: 850px) {
    margin-bottom: 8rem;
  }
`;

function Projects({ data }) {
  const [hover, setHover] = useState(false);

  setTitle("Vittorio Busatta — Projets ");
  return (
    <Container>
      {data.map((items, i) => (
        <>
            <Li key={i}>
              <p>{items.name}</p>
            </Li>
        </>
      ))}
      {data.map((items, index) => (
        <>
            {/* {console.log(items.images.card.first)} */}
        </>
      ))}
    </Container>
  );
}

export default Projects;
