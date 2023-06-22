"use client";
import React, { useEffect } from "react";
import styles from "../styles/styles";
import Image from "next/image";
import logo1 from "@/assets/logo2.png";
import { useRouter } from "next/navigation";

const page = () => {
  const route = useRouter();

  useEffect(() => {
    setTimeout(() => {
      route.push("/");
    }, 3000);
  }, []);

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
      <p className={styles.paragraph}>
        we have received your request , our costumar service will reache you by
        email soon with the result and the nest step ... <br />{" "}
        <span className="text-primary font-bold">
          Thank you for choising us
        </span>
      </p>
    </div>
  );
};

export default page;
