import styled from "styled-components";

export const Container = styled.div`
  background: #ebfaf4;
  padding: 150px 0;
`;

export const InfoContainer = styled.div`
  width: 80%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: #fff;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const TextWrap = styled.div`
  width: 48%;

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;

export const TopLine = styled.p`
  color: #000;
  font-size: 0.9em;
  line-height: 16px;
  font-weight: 900;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 1.8em;
  line-height: 1.4;
  font-weight: 600;
  color: #000;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 1em;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImageWrap = styled.div`
  width: 48%;

  @media screen and (max-width: 820px) {
    width: 100%;
    margin-top: 100px;
  }
`;

export const Img = styled.img`
  width: 45%;
  height: 300px;
  margin: 0 2.5%;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 0px;

    &:nth-child(2) {
      display: none;
    }
  }
`;
