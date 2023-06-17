import React from "react";
import styles from "../styles/styles";

const IntroducingGigaSpire = () => {
  return (
    <>
      <div className="w-full flex  items-center justify-center p-4 ">
        <div className="flex flex-col md:flex-row w-full md:w-[70%]  items-center justify-center gap-4">
          <div className="w-[95%] md:w-1/2 space-y-6 md:space-y-12">
            <p className={styles.heading}>
              Introducing <br />
              <span className="text-primary">GigaSpire BLAST u4</span>
            </p>

            <div className="flex items-center my-4 justify-start ">
              <div className="w-[20px]">
                <div className="bg-primary h-[78px] w-[8px] "></div>
              </div>
              <div className="flex flex-col items-start justify-center gap-4">
                <p className="text-black text-[20px]">Managed Router</p>
                <p className="text-[#4B5563]">
                  Simple,easy to control and worry free WiFi
                </p>
              </div>
            </div>

            <div className="flex items-center my-4 justify-start ">
              <div className=" h-[78px] w-[8px] "></div>
              <div className="flex flex-col items-start justify-center gap-5">
                <p className="text-[#9CA3AF]">Command IQ</p>
                <p className="text-[#9CA3AF]">
                  Take control of your home network. View and manage
                  connectivity of all your devices from an easy to use App
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[609px] h-[400px] border-2 bg-[#D9D9D9]"></div>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </>
  );
};

export default IntroducingGigaSpire;
