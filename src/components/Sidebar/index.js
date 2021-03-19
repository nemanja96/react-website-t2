import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="what-we-do"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            What We Do
          </SidebarLink>
          <SidebarLink
            to="how-we-work"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            How We Work
          </SidebarLink>
          <SidebarLink
            to="case-studies"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Case Studies
          </SidebarLink>
          <SidebarLink
            to="our-team"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Our Team
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
