import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 150px 0;
  width: 80%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  margin: 0 auto;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: #fff;
`;

export const TextWrapper = styled.div`
  width: 70%;
  display: flex;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 80px;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const TextWrap = styled.div`
  width: 70%;

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

export const ImageWrap = styled.div`
  width: 48%;

  @media screen and (max-width: 820px) {
    width: 100%;
    margin-top: 10px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 820px) {
    justify-content: flex-start;
  }
`;

export const Path = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 550px) {
    display: none;
  }
`;

export const Problem = styled.h2`
  font-size: 1.5em;
  color: #000;
  text-transform: uppercase;
  padding-right: 20px;
`;

export const Line = styled.hr`
  width: 80%;
  border: none;
  border-bottom: 5px dotted #01bf71;
`;

export const Results = styled.h2`
  font-size: 1.5em;
  color: #000;
  text-transform: uppercase;
  padding-left: 20px;
`;

export const HeadWrapper = styled.div`
  max-width: 750px;
  padding-top: 0;
  padding-bottom: 60px;
`;
