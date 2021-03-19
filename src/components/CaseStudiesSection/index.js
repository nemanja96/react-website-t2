import React from "react";
import Icon1 from "../../images/01.jpg";
import Icon2 from "../../images/02.jpg";
import Icon3 from "../../images/03.jpg";
import { IconContext } from "react-icons";
import { FaSignature } from "react-icons/fa";
import {
  CaseStudiesContainer,
  CaseStudiesH1,
  CaseStudiesWrapper,
  CaseStudiesCard,
  CaseStudiesIcon,
  TopLine,
  CaseStudiesH2,
  CaseStudiesP,
  CaseStudiesUl,
  CaseStudiesLi,
  ButtonWrapper,
} from "./CaseStudiesElements";

import { Button } from "../ButtonElement";

const CaseStudies = () => {
  return (
    <CaseStudiesContainer id="case-studies">
      <TopLine>
        {" "}
        <IconContext.Provider value={{ color: "#01bf71", size: "20px" }}>
          <FaSignature />
        </IconContext.Provider>
        Case Studies
      </TopLine>
      <CaseStudiesH1>See how we solved our clients problems</CaseStudiesH1>
      <CaseStudiesWrapper>
        <CaseStudiesCard>
          <CaseStudiesIcon src={Icon1} />
          <CaseStudiesP>16 June 2020</CaseStudiesP>
          <CaseStudiesH2>
            Healthy.co, an online platform for patient management
          </CaseStudiesH2>
          <CaseStudiesUl>
            <CaseStudiesLi>Business Strategy</CaseStudiesLi>
            <CaseStudiesLi>Research</CaseStudiesLi>
            <CaseStudiesLi>UX/UI</CaseStudiesLi>
          </CaseStudiesUl>
        </CaseStudiesCard>
        <CaseStudiesCard>
          <CaseStudiesIcon src={Icon2} />
          <CaseStudiesP>12 June 2020</CaseStudiesP>
          <CaseStudiesH2>
            Mobile application AirFly for managing air connections
          </CaseStudiesH2>
          <CaseStudiesUl>
            <CaseStudiesLi>UX/UI</CaseStudiesLi>
            <CaseStudiesLi>Product Design</CaseStudiesLi>
          </CaseStudiesUl>
        </CaseStudiesCard>
        <CaseStudiesCard>
          <CaseStudiesIcon src={Icon3} />
          <CaseStudiesP>03 June 2020</CaseStudiesP>
          <CaseStudiesH2>
            New website and e-commerce platform for Bello
          </CaseStudiesH2>
          <CaseStudiesUl>
            <CaseStudiesLi>UX/UI</CaseStudiesLi>
            <CaseStudiesLi>Product Design</CaseStudiesLi>
            <CaseStudiesLi>Web Design</CaseStudiesLi>
          </CaseStudiesUl>
        </CaseStudiesCard>
      </CaseStudiesWrapper>
      <ButtonWrapper>
        <Button>All Case Studies</Button>
      </ButtonWrapper>
    </CaseStudiesContainer>
  );
};

export default CaseStudies;
