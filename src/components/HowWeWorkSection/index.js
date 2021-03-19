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
  ImageWrap,
  BtnWrap,
  Path,
  Problem,
  Line,
  Results,
} from "./HowWeWorkElements";
import { Button } from "../ButtonElement";

const HowWeWorkSection = ({ topLine, headLine, buttonLabel, primary }) => {
  return (
    <Container id="how-we-work">
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
            <Heading>{headLine}</Heading>
          </TextWrap>
          <ImageWrap>
            <BtnWrap>
              <Button primary={primary ? 1 : 0}>{buttonLabel}</Button>
            </BtnWrap>
          </ImageWrap>
        </TextWrapper>
        <Path>
          <Problem>Problem</Problem>
          <Line />
          <Results>Results</Results>
        </Path>
      </InfoContainer>
    </Container>
  );
};

export default HowWeWorkSection;
