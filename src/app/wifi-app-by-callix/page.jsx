import React from "react";
import ImageCmp from "../components/wifi-app-by-callix/Image";
import Sec2 from "../components/wifi-app-by-callix/Section2";
import IntroducingGigaSpire from "../components/wifi-app-by-callix/Introducing-GigaSpire";
const page = () => {
  return (
    <>
      <div className="h-[20px] w-full"></div>
      <ImageCmp />
      <Sec2 />
      <IntroducingGigaSpire />
      <div className="h-[100px] w-full"></div>
    </>
  );
};

export default page;
