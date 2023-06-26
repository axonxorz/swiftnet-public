"use client";
import React, { useEffect } from "react";
import styles from "../styles/styles";
import Image from "next/image";
import logo1 from "@/assets/logo2.png";
import { useRouter } from "next/navigation";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-6">
      <Image
        src={logo1}
        alt=""
        style={{
          width: "256.43px",
          height: "48px",
        }}
        unoptimized={true}
      />
      <div className="px-10 text-center space-y-4">
        <p className={styles.paragraph}>
          Thank you for submitting your request. Our dedicated customer service
          team will promptly reach out to you via email with the outcome of your
          inquiry and provide guidance on the next steps. <br />{" "}
          <span className="text-primary font-bold ">
            Thank you for choising us
          </span>
        </p>
      </div>
    </div>
  );
};

export default page;
