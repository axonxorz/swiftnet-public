import React from "react";
import Hero from "../components/home/Hero";
import ExpLimitless from "../components/lloyoydminster/ExpLimitless";
import Sec3 from "../components/lloyoydminster/Sec3";
import Sec4 from "../components/lloyoydminster/Sec4";
import Sec5 from "../components/lloyoydminster/Sec5";

export const metadata = {
  title: "Lloydminster Local Wi-Fi Internet Provider [SIGN UP]",
  description:
    "Finally truly unlimited, high-speed internet with Swift-Net.ca, your local Lloydminster Internet Provider. Don't settle for less, explore our affordable packages and experience the difference today!",
};

const page = () => {
  return (
    <>
      <Hero
        background={""}
        description="Swift-Net.ca is your local wireless internet service provider (WISP) in Lloydminster, AB/SK. As a company with roots in Lloydminster, we are not just another internet service provider; we are your neighbours, friends, and family. We are dedicated to bringing high-speed home Wi-Fi to our home market and rural communities across Alberta and Saskatchewan."
      />
      <div className="h-[30px] md:h-[50px]"></div>
      <ExpLimitless />
      <div className="h-[30px] md:h-[50px]"></div>
      <Sec3 />
      <div className="h-[30px] md:h-[50px]"></div>
      <Sec4 />
      <div className="h-[30px] md:h-[50px]"></div>
      <Sec5 />
    </>
  );
};

export default page;
