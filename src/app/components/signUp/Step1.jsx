import React from "react";
import logo1 from "@/assets/logo2.png";
import Image from "next/image";
import styles from "@/app/styles/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AutoCompleteInput from "../home/AutoCompleteInput";
import style from "../../styles/styles.module.css";

export default ({ setStep, plan }) => {
  const route = useRouter()

  return (
    <div className="w-full md:w-[900px] min-h-screen md:overflow-hidden flex items-center justify-center  ">
      <div className="w-full md:w-[70%] min-h-screen  py-2 flex flex-col  ">
        <div className="py-2  h-[60px]">
          <Link href={"/"}>
            <Image
              src={logo1}
              alt=""
              style={{
                width: "256.43px",
                height: "48px",
              }}
              unoptimized={true}
            />
          </Link>
        </div>

        <div className="w-full  flex  h-[650px] flex-col  justify-center items-start px-4  ">
          <div
            className={`${style.signupexp} relative w-[400px] overflow-hidden h-[150px] rounded-lg mb-3   flex flex-col items-start justify-center gap-2 p-4`}
          >
            <div className="absolute top-0 left-0 bg-gradient-to-r from-primary/90 from-10% via-primary/80 via-30% to-primary/70 to-90% w-full h-full"></div>
            <p className={`text-xs text-white z-30`}>Swift-Net.ca</p>
            <p className={`text-[20px] text-white z-30`}>
              Plans starting at $79.95 and speeds up to{" "}
              <span className="bg-white text-primary">{plan} Mbps!</span>
            </p>
          </div>
          <div className="w-full py-2">
          </div>
          <div className=" mt-1">
            <p className={`${styles.heading}`}>Let’s get started</p>
          </div>

          <div className="w-full mt-4">
            <AutoCompleteInput place={"signup"} setStep={setStep} />
          </div>

          <div className=" flex items-center justify-center mt-5 space-y-4 flex-col ">
            <p
              className={`${styles.paragraph} cursor-pointer`}
              onClick={() => route.push("/map")}
            >
              Check availability by map or browser location{" "}
              <span className="underline">here</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
