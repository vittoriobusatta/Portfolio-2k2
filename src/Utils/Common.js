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
  background-color: ${(props) => props.background};
`;
export const Content = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 992px) {
    align-items: flex-end;
  }
`;
export const Info = styled.div`
  height: fill-available;
  width: 100%;
  background-color: ${(props) => props.background};
  padding: 100px 30px 40px;
  @media screen and (min-width: 576px) {
    padding: 100px 40px 40px;
  }
  @media screen and (min-width: 768px) {
    padding: 100px 50px 40px;
  }
  @media screen and (min-width: 992px) {
    width: 45%;
    position: fixed;
    left: 0%;
    top: 50%;
    transform: translate(0%, -50%);
    height: auto;
  }
  @media screen and (min-width: 1224px) {
    padding: 140px 80px 40px;
  }
`;
export const Presentation = styled.div`
  height: fit-content;
  width: 100%;
  background-color: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 40px;
  padding: 0px 30px;
  padding-bottom: 40px;
  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: 576px) {
    padding: 0px 40px;
  }
  @media screen and (min-width: 768px) {
    padding: 0px 50px;
  }
  @media screen and (min-width: 992px) {
    margin-top: 15rem;
    width: 55%;
  }
`;
export const Title = styled.h1`
  position: relative;
  font-size: 8rem;
  font-family: ${Morgenwalsh};
  text-transform: uppercase;
  line-height: 65px;
  z-index: 2;
  margin-left: 5px;
  &::before {
    content: "";
    top: 0px;
    left: -7px;
    position: absolute;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    z-index: -1;
    @media screen and (min-width: 992px) {
      top: -4px;
      width: 45px;
      height: 45px;
    }
  }
`;
export const Details = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr) 1.5fr 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 20px;
  margin-top: 40px;
  max-width: 500px;
  @media screen and (min-width: 992px) {
    grid-column-gap: 100px;
    grid-row-gap: 30px;
    margin-top: 60px;
  }
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
    font-size: max(1.8rem, 15px);
    font-family: ${ManropeBold};
    text-transform: uppercase;
    margin-bottom: 14px;
    color: ${(props) => props.color};
  }
  &,
  p,
  a {
    font-size: max(1.6rem, 13px);
    font-family: ${ManropeMedium};
    line-height: 24px;
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
