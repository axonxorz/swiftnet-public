import React from "react";
import imgScr from "@/assets/image 3.png";
import Image from "next/image";
import styles from "@/app/styles/styles";

const ImageCmp = () => {
  return (
    <div
      className={`${styles.width} pb-3 mt-20 md:pb-10 flex items-center justify-center w-full`}
    >
      <div className="hidden md:flex">
        {" "}
        <Image
          src={imgScr}
          alt="image"
          style={{
            width: "1240px",
            height: "606px",
          }}
        />
      </div>

      <div className="md:hidden flex">
        {" "}
        <Image
          src={imgScr}
          alt="image"
          style={{
            width: "343px",
            height: "180px",
          }}
        />
      </div>
    </div>
  );
};

export default ImageCmp;
