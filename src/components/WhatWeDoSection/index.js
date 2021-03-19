import React from "react";
import { IconContext } from "react-icons";
import { FaSignature } from "react-icons/fa";
import {
  Container,
  InfoContainer,
  HeadWrapper,
  TopLine,
  Heading,
  TextWrapper,
  TextWrap,
  Text,
  BtnWrap,
  ImageWrap,
  Img,
  Cards,
  Card,
  CardSubtitle,
  CardTitle,
} from "./WhatWeDoElements";
import { Button } from "../ButtonElement";

const WhatWeDoSection = ({
  topLine,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  img2,
  primary,
}) => {
  return (
    <Container id="what-we-do">
      <InfoContainer>
        <HeadWrapper>
          <TopLine>
            {" "}
            <IconContext.Provider value={{ color: "#01bf71", size: "20px" }}>
              <FaSignature />
            </IconContext.Provider>
            {topLine}
          </TopLine>
          <Heading>{headLine}</Heading>
        </HeadWrapper>
        <TextWrapper>
          <TextWrap>
            <Text darkText={darkText}>{description}</Text>
            <Text darkText={darkText}>{description}</Text>
            <BtnWrap>
              <Button primary={primary ? 1 : 0}>{buttonLabel}</Button>
            </BtnWrap>
          </TextWrap>
          <ImageWrap>
            <Img src={img} />
            <Img src={img2} />
          </ImageWrap>
        </TextWrapper>
      </InfoContainer>
      <Cards>
        <Card>
          <CardSubtitle>01</CardSubtitle>
          <CardTitle>Business Strategy</CardTitle>
        </Card>
        <Card>
          <CardSubtitle>02</CardSubtitle>
          <CardTitle>Marketing Strategy</CardTitle>
        </Card>
        <Card>
          <CardSubtitle>03</CardSubtitle>
          <CardTitle>UX/UI</CardTitle>
        </Card>
        <Card>
          <CardSubtitle>04</CardSubtitle>
          <CardTitle>Product Design</CardTitle>
        </Card>
        <Card>
          <CardSubtitle>05</CardSubtitle>
          <CardTitle>Research</CardTitle>
        </Card>
        <Card>
          <CardSubtitle>06</CardSubtitle>
          <CardTitle>Service Design</CardTitle>
        </Card>
        <Card>
          <CardSubtitle>07</CardSubtitle>
          <CardTitle>Web Design</CardTitle>
        </Card>
        <Card>
          <CardSubtitle>VIEW ALL</CardSubtitle>
          <CardTitle>Our Services</CardTitle>
        </Card>
      </Cards>
    </Container>
  );
};

export default WhatWeDoSection;
