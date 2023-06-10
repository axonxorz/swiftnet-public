import React from "react";
import style from "../../styles/styles.module.css";
import styles from "@/app/styles/styles";
import AutoCompleteInput from "./AutoCompleteInput";

const Hero = () => {
  return (
    <div className={`${style.heroBg} h-auto`}>
      <div
        className={`${styles.width} pt-[24%] md:pt-[12%] pb-[15%] md:pb-[10%]`}
      >
        <h1 className="font-semibold text-4xl md:text-6xl tracking-[-0.02em] text-white md:w-3/5 leading-[44px] md:leading-[72px]">
          Alberta & Saskatchewan Wi-Fi Broadband Internet Service by
          <span
            className={`${style.bgFilter} rounded-md text-primary p-1 ml-2 block md:inline-block w-[220px] md:w-auto`}
          >
            Swift-Net.ca
          </span>
        </h1>
        <p className={`${styles.paragraph} text-white md:w-[65%] mt-6 mb-12`}>
          We believe that everyone should have access to truly unlimited
          internet service, without the concerns of data caps, overages, or
          throttling. <br /> <br /> Get connected now with Swift-Net.ca, the
          leading home Wi-Fi internet service provider in Alberta &
          Saskatchewan, providing high-speed wireless internet services in
          Lloydminster, Cold Lake, North Battleford, and more rural communities.
          Sign up today!
        </p>

        <AutoCompleteInput />


      </div>
    </div>
  );
};

export default Hero;
