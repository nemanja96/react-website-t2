import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { whatWeDoObj } from "../components/WhatWeDoSection/Data";
import { heroObj } from "../components/HeroSection/Data";
import { teamObj } from "../components/TeamSection/Data";
import { howWeWorkObj } from "../components/HowWeWorkSection/Data";
import HeroSection from "../components/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection";
import HowWeWorkSection from "../components/HowWeWorkSection";
import TeamSection from "../components/TeamSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection {...heroObj} />
      <WhatWeDoSection {...whatWeDoObj} />
      <HowWeWorkSection {...howWeWorkObj} />
      <CaseStudiesSection />
      <TeamSection {...teamObj} />
      <Footer />
    </>
  );
};

export default Home;
