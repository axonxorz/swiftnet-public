import React from "react";
import About from "../components/aboutUs/About";
import Accordions from "../components/aboutUs/Accordions";
import CommonCards from "../components/CommonCards";
import SuperiorSwiftNet from "../components/aboutUs/SuperiorSwiftNet";
import ChooseSwiftNet from "../components/aboutUs/ChooseSwiftNet";

export const metadata = {
  title: "Swift Net : About Us",
  description:
    "Get connected with Swift-Net.ca, the leading home Wi-Fi internet service provider in Alberta & Saskatchewan, providing high-speed wireless internet service in Lloydminster, Cold Lake, North Battleford, and more rural communities. Sign up today! Experience the difference with Swift-Net.ca's reliable internet service, designed specifically for rural communities in Alberta and Saskatchewan. Sign up today and enjoy fast and dependable home wi-fi for you and your family!",
};

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
