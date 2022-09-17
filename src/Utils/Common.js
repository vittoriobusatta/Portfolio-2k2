import styled from "styled-components";

export const ManropeRegular = "Manrope Regular";
export const ManropeMedium = "Manrope Medium";
export const ManropeBold = "Manrope Bold";
export const ManropeExtraBold = "Manrope ExtraBold";
export const RecoletaRegular = "Recoleta Regular";
export const Morgenwalsh = "Morgenwalsh";

/////////////////////////////////////////////////////////////////////////

export const Container = styled.main`
  height: auto;
  width: 100%;
  /* background-color: #ede9e5; */
`;
export const Content = styled.section`
  height: 200vh;
  width: 100%;
  background-color: ${(props) => props.background};
`;
export const Info = styled.div`
  height: 100%;
  width: 50%;
  position: fixed;
  padding: 12rem 7rem;
`;
export const Title = styled.h1`
  position: relative;
  font-size: 8rem;
  font-family: ${Morgenwalsh};
  text-transform: uppercase;
  max-width: 200px;
  line-height: 65px;
  z-index: 2;
  &::before {
    content: "";
    top: -4px;
    left: -6px;
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    z-index: -1;
  }
`;
export const Details = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr) 1.5fr 1fr;
  grid-column-gap: 100px;
  grid-row-gap: 30px;
  margin-top: 60px;
  & li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    &:nth-child(1) {
      grid-area: 1 / 1 / 2 / 2;
    }
    &:nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
    }
    &:nth-child(3) {
      grid-area: 2 / 1 / 3 / 2;
    }
    &:nth-child(4) {
      grid-area: 2 / 2 / 3 / 3;
    }
    &:nth-child(5) {
      grid-area: 3 / 1 / 4 / 3;
    }
    &:nth-child(6) {
      grid-area: 4 / 1 / 5 / 3;
    }
  }
  & h2 {
    font-size: 2rem;
    font-family: ${ManropeBold};
    text-transform: uppercase;
    margin-bottom: 14px;
    color: ${(props) => props.color};
  }
  & ,
  a {
    font-size: 1.8rem;
    font-family: ${ManropeMedium};
    line-height: 20px;
    letter-spacing: 0.5px;
    color: #222;
  }
  & a {
    text-decoration: underline;
    font-weight: 800;
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      color: ${(props) => props.color};
    }
  }
`;
