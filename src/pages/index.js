import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { homeObjOne } from "../components/InfoSection/Data";
import { heroObj } from "../components/HeroSection/Data";
import { teamObj } from "../components/TeamSection/Data";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import TeamSection from "../components/TeamSection";
import Services from "../components/Services";
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
      <InfoSection {...homeObjOne} />
      <Services />
      <TeamSection {...teamObj} />
      <Footer />
    </>
  );
};

export default Home;
