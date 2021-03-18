import React from "react";
import { IconContext } from "react-icons";
import { FaSignature } from "react-icons/fa";
import {
  Container,
  InfoContainer,
  TextWrapper,
  TextWrap,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImageWrap,
  Img,
} from "./TeamElements";
import { Button } from "../ButtonElement";

const TeamSection = ({
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  img2,
  alt,
  primary,
  dark,
  dark2,
  src,
}) => {
  return (
    <Container>
      <InfoContainer>
        <TextWrapper>
          <TextWrap>
            <TopLine>
              {" "}
              <IconContext.Provider value={{ color: "#01bf71", size: "20px" }}>
                <FaSignature />
              </IconContext.Provider>
              {topLine}
            </TopLine>
            <Heading lightText={lightText}>{headLine}</Heading>
            <Subtitle darkText={darkText}>{description}</Subtitle>
            <BtnWrap>
              <Button
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={dark2 ? 1 : 0}
              >
                {buttonLabel}
              </Button>
            </BtnWrap>
          </TextWrap>
          <ImageWrap>
            <Img src={img} />
            <Img src={img2} />
          </ImageWrap>
        </TextWrapper>
      </InfoContainer>
    </Container>
  );
};

export default TeamSection;
