"use client";
import React from "react";
import Hero from "../components/home/Hero";
import ServiceProvider from "../components/home/ServiceProvider";
import ExperienceConnectivity from "../components/home/ExperienceConnectivity";
import WhySwiftNet from "../components/home/WhySwiftNet";
import ReliableInternet from "../components/home/ReliableInternet";
import Advantages from "../components/home/Advantages";
import { useStore } from "@/store";
import { toast } from "react-hot-toast";

const page = () => {
  const setIpAddress = useStore((state) => state.setIpAddress);

  fetch("https://api.ipify.org/?format=json")
    .then((response) => response.json())
    .then((data) => {
      const ipAddress = data.ip;
      setIpAddress(ipAddress);
    })
    .catch((error) => {
      toast.error("Error:", error);
    });

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
