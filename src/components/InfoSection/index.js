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
  Subtitle,
  BtnWrap,
  ImageWrap,
  Img,
  Cards,
  Card,
  CardSubtitle,
  CardTitle,
} from "./InfoElements";
import { Button } from "../ButtonElement";

const InfoSection = ({
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
        <HeadWrapper>
          <TopLine>
            {" "}
            <IconContext.Provider value={{ color: "#01bf71", size: "20px" }}>
              <FaSignature />
            </IconContext.Provider>
            {topLine}
          </TopLine>
          <Heading lightText={lightText}>{headLine}</Heading>
        </HeadWrapper>
        <TextWrapper>
          <TextWrap>
            <Subtitle darkText={darkText}>{description}</Subtitle>
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

export default InfoSection;
