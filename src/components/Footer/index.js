import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaSignature,
} from "react-icons/fa";
import {
  Container,
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <Container>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>
                  {" "}
                  <IconContext.Provider
                    value={{ color: "#01bf71", size: "15px" }}
                  >
                    <FaSignature />
                  </IconContext.Provider>
                  About Us
                </FooterLinkTitle>
                <FooterLink to="/signin">Who we are?</FooterLink>
                <FooterLink to="/signin">Our team</FooterLink>
                <FooterLink to="/signin">Career</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>
                  {" "}
                  <IconContext.Provider
                    value={{ color: "#01bf71", size: "15px" }}
                  >
                    <FaSignature />
                  </IconContext.Provider>
                  Our Services
                </FooterLinkTitle>
                <FooterLink to="/signin">Business Strategy</FooterLink>
                <FooterLink to="/signin">Marketing Strategy</FooterLink>
                <FooterLink to="/signin">UX/UI</FooterLink>
                <FooterLink to="/signin">Product Design</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>
                  {" "}
                  <IconContext.Provider
                    value={{ color: "#01bf71", size: "15px" }}
                  >
                    <FaSignature />
                  </IconContext.Provider>
                  Portfolio
                </FooterLinkTitle>
                <FooterLink to="/signin">Case Studies</FooterLink>
                <FooterLink to="/signin">Dribbble</FooterLink>
                <FooterLink to="/signin">Behance.net</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>
                  {" "}
                  <IconContext.Provider
                    value={{ color: "#01bf71", size: "15px" }}
                  >
                    <FaSignature />
                  </IconContext.Provider>
                  Contact Us
                </FooterLinkTitle>
                <FooterLink to="/signin">Contact us</FooterLink>
                <FooterLink to="/signin">Headquaters</FooterLink>
                <FooterLink to="/signin">Offices</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                <IconContext.Provider
                  value={{ color: "#01bf71", size: "30px" }}
                >
                  <FaSignature />
                </IconContext.Provider>
                Skilly
              </SocialLogo>
              <SocialIcons>
                <IconContext.Provider
                  value={{ color: "#01bf71", size: "20px" }}
                >
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook />
                  </SocialIconLink>
                  <SocialIconLink
                    href="/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                    <FaTwitter />
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                    <FaYoutube />
                  </SocialIconLink>
                  <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                    <FaLinkedin />
                  </SocialIconLink>
                </IconContext.Provider>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </Container>
  );
};

export default Footer;
