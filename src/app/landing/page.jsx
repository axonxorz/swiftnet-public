"use client";
import React from "react";
import Hero from "../components/home/Hero";
import ServiceProvider from "../components/home/ServiceProvider";
import ExperienceConnectivity from "../components/home/ExperienceConnectivity";
import WhySwiftNet from "../components/home/WhySwiftNet";
import ReliableInternet from "../components/home/ReliableInternet";
import Advantages from "../components/home/Advantages";

const page = () => {
  return (
    <>
      <Hero />
      <ServiceProvider />
      <ExperienceConnectivity />
      <WhySwiftNet />
      <ReliableInternet />
      <Advantages />
    </>
  );
};

export default page;
