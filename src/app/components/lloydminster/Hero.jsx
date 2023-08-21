"use client";
import React from "react";
import style from "../../styles/styles.module.css";
import styles from "@/app/styles/styles";
import { useRouter } from "next/navigation";

const Hero = () => {
  const route = useRouter();

  const skipStep = () => {
    route.push("/sign-up");
  };

  return (
    <div className={`${style.heroBgLLoyoydminster} h-auto`}>
      <div
        className={`${styles.width}  pt-[24%] md:pt-[12%] pb-[15%] md:pb-[10%]`}
      >
        <div
          className={`${"bg-primary/70 rounded-lg shadow-md"} w-full lg:w-[80%]  p-5 md:p-10`}
        >
          <h1 className="font-semibold text-3xl md:text-6xl tracking-[-0.02em] text-white xl:w-3/5 leading-[44px] md:leading-[72px]">
            Welcome to Your Local Lloydminster Internet Provider
          </h1>
          <p className={`${styles.paragraph} text-white md:w-[65%] mt-6 mb-12`}>
            Welcome to Swift-Net.ca, the premier local Internet Provider in
            Lloydminster. We're not just a service provider; we're an integral
            part of this community, dedicated to ensuring our neighbors have the
            high-speed, reliable internet services they deserve. With a range of
            packages tailored to suit every need and budget, we're the
            definitive choice for keeping Lloydminster and other rural
            communities in Alberta and Saskatchewan online
          </p>

          <button
            onClick={skipStep}
            className="bg-white py-3 w-[150px] rounded-lg text-primary hover:bg-white/80 "
          >
            Sign Up Now{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
