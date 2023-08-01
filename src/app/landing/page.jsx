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
      <Hero />
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
