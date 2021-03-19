import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #fff;
  padding: 150px 0;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeroContent = styled.div`
  margin: 0 auto;
  padding: 8px 0;
  flex-direction: column;
`;

export const HeroH2 = styled.h2`
  color: #000;
  font-size: 0.9em;
  text-transform: uppercase;
  padding-bottom: 20px;
`;

export const HeroH1 = styled.h1`
  color: #000;
  font-size: 3.5em;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroBtnTitle = styled.h3`
  color: #000;
  position: absolute;
  bottom: 20px;
  font-size: 0.7em;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

export const HeroImages = styled.div`
  margin-top: 70px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 524px) {
    justify-content: center;
  }
`;

export const HeroBtnWrapper = styled.div`
  flex-basic: 1;
  border-radius: 10px;
  height: 200px;
  margin: 5px 55px;
  position: relative;
`;

export const HeroBtn = styled.div`
  width: 100px;
  height: 100px;
  background: #00d285;
  margin: 0 auto;
  text-align: center;
  line-height: 100px;
  border-radius: black;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    background: silver;
  }
`;

export const ArrowImg = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 35px;
`;

export const HeroImage = styled.div`
  flex-basic: 1;
  border-radius: 10px;
  height: 200px;
  margin: 5px;

  @media screen and (max-width: 524px) {
    justify-content: center;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  max-width: 200px;
  border-radius: 10px;

  @media screen and (max-width: 524px) {
    max-width: 100%;
  }
`;
