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
  keywords: [
    "Swift-Net.ca",
    "rural Canadians",
    "high-speed connectivity",
    "unlimited internet service",
    "data caps",
    "overages",
    "throttling",
    "fixed monthly price",
    "wireless internet service",
    "exceptional browsing experience",
    "peace of mind",
    "freedom",
    "surf",
    "stream",
    "game",
    "data limits",
    "unrestricted internet access",
    "online activities",
    "connectivity",
    "unlimited data usage",
    "streaming",
    "browsing",
    "downloading",
    "consistent speeds",
    "peak hours",
    "data threshold",
    "no surprise charges",
    "fixed monthly pricing",
    "hidden fees",
    "affordable plans",
    "customer satisfaction",
    "home Wi-Fi internet service",
    "high-speed home Wi-Fi",
    "limitations",
    "restrictions",
    "Connect",
    "truly unlimited internet",
    "rural Alberta",
    "Saskatchewan",
    "High-Speed Internet",
    "fast and reliable",
    "streaming",
    "browsing",
    "gaming",
    "buffering",
    "delays",
    "Rural Focus",
    "dedicated",
    "serving",
    "communities",
    "Easy Sign-Up Process",
    "home address",
    "signup form",
    "Local Support",
    "friendly",
    "knowledgeable staff",
    "Alberta",
    "Saskatchewan",
    "internet service",
    "rural communities",
    "Affordable Pricing",
    "competitive pricing",
    "variety of plans",
    "budget",
    "Get Connected",
    "satisfied customers",
    "high-speed wireless internet service",
    "signup form",
  ],
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
