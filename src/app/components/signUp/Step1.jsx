import React from "react";
import logo1 from "@/assets/logo2.png";
import Image from "next/image";
import styles from "@/app/styles/styles";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AutoCompleteInput from "../home/AutoCompleteInput";

const Step1 = ({ setStep }) => {
  const route = useRouter();
  return (
    <div className="w-full md:w-[900px] min-h-screen flex items-center justify-center mb-10 p-4 ">
      <div className="w-full md:w-[70%] min-h-screen  py-2 flex flex-col ">
        <div className="py-2  h-[100px]">
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

        <div className="w-full  flex flex-auto flex-col  justify-center items-start px-4 ">
          <div className="w-full py-2">
            <p className={`${styles.paragraph} uppercase text-primary`}>
              STEP 1
            </p>
          </div>
          <div className=" mt-1">
            <p className={`${styles.heading}`}>Let’s get started</p>
          </div>

          <div className="w-full mt-4">
            <AutoCompleteInput setStep={setStep} />
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

export default Step1;