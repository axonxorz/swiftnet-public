"use client";
import React from "react";
import style from "../../styles/styles.module.css";
import styles from "@/app/styles/styles";
import AutoCompleteInput from "./AutoCompleteInput";
import { useRouter } from "next/navigation";
import { useUserLocationStore } from "@/store";
import HeroPromo from "@/app/components/home/HeroPromo"
import HeroOutages from "@components/home/HeroOutages";

const Hero = ({ description, hero }) => {
  const route = useRouter();
  const locationStore = useUserLocationStore()

  const addressResolved = (address) => {
    locationStore.setAddress(address);
    route.push("/map?resolved=address");
  }

  return (
    <div
      className={`${hero ? style.heroBg : style.heroBgLloydminster} h-auto`}
    >
      <div
        className={`${styles.width}  pt-[5rem] md:pt-[5rem] pb-[15%] md:pb-[10%]`}
      >
        <div>
          <HeroOutages></HeroOutages>
        </div>
        <div
          className={`${
            hero ? "" : "bg-primary/70 rounded-lg shadow-md"
          } w-full  p-5 md:p-10`}
        >
          <HeroPromo></HeroPromo>
        </div>
        <div
          className={`w-full md:w-3/5 min-h-[444px] md:ml-[10%] rounded-md bg-primary/90  py-8 px-6 `}
        >
          <h1 className="font-semibold text-3xl md:text-6xl tracking-[-0.02em] text-white  leading-[44px] md:leading-[72px]">
            Alberta & Saskatchewan{" "}
            <span className="whitespace-nowrap">Wi-Fi</span> Broadband Internet
            Service by
            <span
              className={`${style.bgFilter} rounded-md text-primary p-1 ml-2 block md:inline-block w-[220px] md:w-auto`}
            >
              Swift-Net.ca
            </span>
          </h1>
          <p className={`${styles.paragraph} text-white md:w-[65%] mt-6 mb-12`}>
            {description}
          </p>

          <div className="xl:w-3/5">
            <AutoCompleteInput place={"home"} resolved={addressResolved}/>
          </div>

          <p className={`${styles.paragraph} mt-3 text-white cursor-pointer`}
             onClick={() => {route.push('/map')}}>
            Check availability by map or browser location <span className={'underline'}>here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
