import styles from "@/app/styles/styles";
import React from "react";

const Section5 = () => {
  return (
    <>
      <div
        className={
          styles.width + "py-4 flex items-center justify-center  flex-col"
        }
      >
        <p className="text-[16px] text-primary font-semibold">Testimonial</p>
        <p className="text-[36px] text-black font-bold text-center leading-10 mt-2">{`“What sets Swift-net.ca apart is not just their exceptional service but also their outstanding customer support. Their representatives have always been courteous, knowledgeable, and willing to go the extra mile to ensure that I was satisfied.”`}</p>
        <p className="text-[24px] mt-6">Heritage Optical</p>
        <p className=" text-[16px] text-[#6B7280]">Swift-net.ca clients</p>
      </div>
    </>
  );
};

export default Section5;
