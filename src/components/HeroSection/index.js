import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FaSignature } from "react-icons/fa";
import {
  HeroContainer,
  HeroBtn,
  ArrowImg,
  HeroBtnWrapper,
  HeroBtnTitle,
  HeroContent,
  HeroH2,
  HeroH1,
  HeroImages,
  HeroImage,
  Img,
} from "./HeroElements";
const HeroSection = ({
  src1,
  alt1,
  src2,
  alt2,
  src3,
  alt3,
  src4,
  alt4,
  arrow,
}) => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroH2>
          {" "}
          <IconContext.Provider value={{ color: "#01bf71", size: "20px" }}>
            <FaSignature />
          </IconContext.Provider>
          User Experience Agency
        </HeroH2>
        <HeroH1>
          We know how
          <br />
          to effectively use
          <br />
          the user experience.
        </HeroH1>
      </HeroContent>
      <HeroImages>
        <HeroBtnWrapper>
          <HeroBtn>
            <ArrowImg src={arrow} />
          </HeroBtn>
          <HeroBtnTitle>Discover Skilly</HeroBtnTitle>
        </HeroBtnWrapper>
        <HeroImage>
          <Img src={src1} alt={alt1} />
        </HeroImage>
        <HeroImage>
          <Img src={src2} alt={alt2} />
        </HeroImage>
        <HeroImage>
          <Img src={src3} alt={alt3} />
        </HeroImage>
        <HeroImage>
          <Img src={src4} alt={alt4} />
        </HeroImage>
      </HeroImages>
    </HeroContainer>
  );
};

export default HeroSection;
