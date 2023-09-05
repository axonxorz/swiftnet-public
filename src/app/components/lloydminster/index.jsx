"use client";

import React, { useState } from "react";
import Hero from "./Hero";
import Image from "next/image";
import img1 from "@/assets/landings/lloydminster2.webp";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section5 from "./Section5";
import Section4 from "./Section4";
import PopUp from "./PopUp";
import styles from "@/app/styles/styles";

const page = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Hero />

      {show ? <PopUp setShow={setShow} /> : <></>}

      <Section2 />

      <div className="h-[30px] md:h-[50px]"></div>

      <Section3 />

      <div className="h-[30px] md:h-[100px]"></div>
      <Section4 />

      <div className="h-[30px] md:h-[100px]"></div>

      <Section5 />

      <div className="h-[30px] md:h-[100px]"></div>

      <div className={styles.width}>
        <div className={" gap-6 py-6 flex items-start justify-between "}>
          <div className="w-full md:w-[35%]  space-y-4">
            <p className="font-bold text-[26px] md:text-[36px] ">
              Exciting Internet Deals in Lloydminster
            </p>
          </div>

          <div className="w-full md:w-[70%]  space-y-6">
            <p className="text-gray-600  ">
              We're always looking for ways to give our customers more value.
              That's why we regularly offer exciting internet deals in
              Lloydminster. From discounted packages to free installation
              offers, we're committed to providing you with high-quality
              internet services at a price you'll love. Check Out Our Deals
            </p>
            <button
              onClick={() => setShow(true)}
              className="hover:underline mt-4 w-[250px] text-center bg-primary rounded-lg py-3  text-white hover:font-bold cursor-pointer"
            >
              Check Out Our Deals
            </button>
          </div>
        </div>

        <Image
          src={img1}
          alt="lloydminster background page"
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="h-[30px] md:h-[50px]"></div>
    </>
  );
};

export default page;
