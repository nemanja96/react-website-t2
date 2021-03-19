import React, { useState, useEffect } from "react";
import { FaBars, FaSignature } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import { IconContext } from "react-icons";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <IconContext.Provider value={{ color: "#01bf71", size: "30px" }}>
              <FaSignature />
            </IconContext.Provider>
            Skilly
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="what-we-do"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                What We Do
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="how-we-work"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                How We Work
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="case-studies"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Case Studies
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="our-team"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Our Team
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="signin">Send Request</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
