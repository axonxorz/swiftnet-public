"use client";
import React from "react";
import style from "../../styles/styles.module.css";
import styles from "@/app/styles/styles";
import AutoCompleteInput from "./AutoCompleteInput";
import { useRouter } from "next/navigation";
import { geocodeAddress } from "@/lib/gis";
import { useUserLocationStore } from "@/store";

const Hero = ({ description, hero }) => {
  const route = useRouter();
  const locationStore = useUserLocationStore()

  const addressResolved = (address) => {
    locationStore.setAddress(address);
    route.push("/map?resolved=address");
  }

  return (
    <div
      className={`${hero ? style.heroBg : style.heroBgLLoyoydminster} h-auto`}
    >
      <div
        className={`${styles.width}  pt-[24%] md:pt-[12%] pb-[15%] md:pb-[10%]`}
      >
        <div
          className={`${
            hero ? "" : "bg-primary/70 rounded-lg shadow-md"
          } w-full  p-5 md:p-10`}
        >
          <h1 className="font-semibold text-3xl md:text-6xl tracking-[-0.02em] text-white xl:w-3/5 leading-[44px] md:leading-[72px]">
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

          <div className="md:w-1/2">
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
