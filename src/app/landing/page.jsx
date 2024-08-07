"use client";
import React from "react";
import Hero from "../components/home/Hero";
import ServiceProvider from "../components/home/ServiceProvider";
import ExperienceConnectivity from "../components/home/ExperienceConnectivity";
import WhySwiftNet from "../components/home/WhySwiftNet";
import ReliableInternet from "../components/home/ReliableInternet";
import Advantages from "../components/home/Advantages";
import Gallery from "../components/home/Gallery";
import "@/app/styles/custom.css";

const page = () => {
  return (
    <>
      <Hero
        description={`Get connected now with Swift-Net.ca, the leading home Wi-Fi internet service provider in Alberta & Saskatchewan, providing high-speed wireless internet services in Lloydminster, Cold Lake, North Battleford, Macklin, Provost, Kindersley, Kerrobert, Lashburn, Marshall, and more rural communities. Sign up today!`}
        hero={true}
      />
      <ServiceProvider />
      <Gallery />
      <ExperienceConnectivity />
      <WhySwiftNet />
      <ReliableInternet />
      <Advantages />
    </>
  );
};

export default page;
