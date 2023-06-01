import React from "react";
import About from "../components/aboutUs/About";
import Accordions from "../components/aboutUs/Accordions";
import CommonCards from "../components/CommonCards";
import SuperiorSwiftNet from "../components/aboutUs/SuperiorSwiftNet";
import ChooseSwiftNet from "../components/aboutUs/ChooseSwiftNet";

const page = () => {
  return (
    <>
      <About />
      <Accordions />
      <SuperiorSwiftNet />
      <ChooseSwiftNet />
    </>
  );
};

export default page;
