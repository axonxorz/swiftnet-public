import React from "react";
import style from "../../styles/styles.module.css";
import styles from "@/app/styles/styles";
import AutoCompleteInput from "./AutoCompleteInput";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={`${style.heroBg} h-auto`}>
      <div
        className={`${styles.width} pt-[24%] md:pt-[12%] pb-[15%] md:pb-[10%]`}
      >
        <h1 className="font-semibold text-3xl md:text-6xl tracking-[-0.02em] text-white md:w-3/5 leading-[44px] md:leading-[72px]">
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
          We believe that everyone should have access to truly unlimited
          internet service, without the concerns of data caps, overages, or
          throttling.
          <br /> <br />
          Get connected now with Swift-Net.ca, the leading home{" "}
          <span className="whitespace-nowrap">Wi-Fi</span> internet service
          provider in Alberta & Saskatchewan, providing high-speed wireless
          internet services in Lloydminster, Cold Lake, North Battleford, and
          more rural communities. Sign up today!
        </p>

        <div className="md:w-1/2">
          <AutoCompleteInput place={"home"} />
        </div>

        <Link href={"/map"}>
          <p className={`${styles.paragraph} mt-3 text-white`}>
            Check availability by map or browser location{" "}
            <span className="underline font-bold">here</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
