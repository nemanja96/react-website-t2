import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ServicesContainer = styled.div`
  padding: 150px 0;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background: #fff;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: flex-start;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 820px) {
    margin-bottom: 50px;
    width: 45%;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 70px;
    width: 100%;
  }
`;

export const ServicesIcon = styled.img`
  height: 300px;
  width: 100%;
  margin-bottom: 10px;
  border-radius: 10px;
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

export const ServicesH1 = styled.h1`
  margin-bottom: 64px;
  font-size: 1.8em;
  line-height: 1.4;
  font-weight: 600;
  color: #000;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.1rem;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
`;

export const ServicesP = styled.p`
  font-size: 0.8em;
  color: #555;
  font-weight: bold;
  margin-top: 20px;
`;

export const ServicesUl = styled.ul`
  margin-top: 20px;
  font-size: 0.8em;
  padding-left: 17px;
`;

export const ServicesLi = styled.li`
  font-size: 1.1em;
  color: #555;
  font-weight: bold;
  line-height: 25px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Button = styled(LinkR)`
  background: #fff;
`;
