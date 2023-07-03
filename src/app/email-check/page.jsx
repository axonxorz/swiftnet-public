"use client";
import React from "react";
import styles from "../styles/styles";
import Image from "next/image";
import logo1 from "@/assets/logo2.png";
import { useSearchParams } from "next/navigation";

const page = () => {
  const router = useSearchParams();
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
          <span className="text-primary font-bold ">Thank you </span>
          for choosing swift-net.ca! We emailed you the result. Please check
          your
          <span className="text-black font-bold ">{router.get("user")}</span>
           mailbox <br />{" "}
        </p>
      </div>
    </div>
  );
};

export default page;
