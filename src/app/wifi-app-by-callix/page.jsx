import React from "react";
import Hero from "../components/wifi-app-by-callix/Hero";
import GigaSpire from "../components/wifi-app-by-callix/GigaSpire";
import Grids from "../components/wifi-app-by-callix/Grids";
import JoinUs from "../components/wifi-app-by-callix/JoinUs";
import Sec2 from "../components/wifi-app-by-callix/Sec2";

const page = () => {
  return (
    <>
      <Hero />
      <Sec2 />
      <div className="h-[70px]"></div>

      <GigaSpire />
      <div className="h-[100px]"></div>
      <Grids />
      <div className="h-[100px]"></div>
      <JoinUs />
      <div className="h-[100px]"></div>
    </>
  );
};

export default page;
