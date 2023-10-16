import React from "react";
import Hero from "../components/wifi-app-by-calix/Hero";
import GigaSpire from "../components/wifi-app-by-calix/GigaSpire";
import Grids from "../components/wifi-app-by-calix/Grids";
import JoinUs from "../components/wifi-app-by-calix/JoinUs";
import Sec2 from "../components/wifi-app-by-calix/Sec2";
import "@/app/styles/custom.css";

export const metadata = {
  title: "Wi-Fi App for Families & Gamers [SIGN UP] Swift-Net.ca",
  description:
    "Experience high-speed Wi-Fi and seamless streaming with Swift-Net.ca's smart home Wi-Fi app. Perfect for gaming, work, and outdoor connectivity. Dive into the future of internet access with our easy to use app!",
};

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
