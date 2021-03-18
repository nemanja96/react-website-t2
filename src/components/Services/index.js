import React from "react";
import Icon1 from "../../images/01.jpg";
import Icon2 from "../../images/02.jpg";
import Icon3 from "../../images/03.jpg";
import { IconContext } from "react-icons";
import { FaSignature } from "react-icons/fa";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  TopLine,
  ServicesH2,
  ServicesP,
  ServicesUl,
  ServicesLi,
  ButtonWrapper,
} from "./ServicesElements";

import { Button } from "../ButtonElement";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <TopLine>
        {" "}
        <IconContext.Provider value={{ color: "#01bf71", size: "20px" }}>
          <FaSignature />
        </IconContext.Provider>
        Case Studies
      </TopLine>
      <ServicesH1>See how we solved our clients problems</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesP>16 June 2020</ServicesP>
          <ServicesH2>
            Healthy.co, an online platform for patient management
          </ServicesH2>
          <ServicesUl>
            <ServicesLi>Business Strategy</ServicesLi>
            <ServicesLi>Research</ServicesLi>
            <ServicesLi>UX/UI</ServicesLi>
          </ServicesUl>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesP>12 June 2020</ServicesP>
          <ServicesH2>
            Mobile application AirFly for managing air connections
          </ServicesH2>
          <ServicesUl>
            <ServicesLi>UX/UI</ServicesLi>
            <ServicesLi>Product Design</ServicesLi>
          </ServicesUl>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesP>03 June 2020</ServicesP>
          <ServicesH2>New website and e-commerce platform for Bello</ServicesH2>
          <ServicesUl>
            <ServicesLi>UX/UI</ServicesLi>
            <ServicesLi>Product Design</ServicesLi>
            <ServicesLi>Web Design</ServicesLi>
          </ServicesUl>
        </ServicesCard>
      </ServicesWrapper>
      <ButtonWrapper>
        <Button>Free Consultation</Button>
        <Button>All Case Studies</Button>
      </ButtonWrapper>
    </ServicesContainer>
  );
};

export default Services;
