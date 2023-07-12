import styles from "@/app/styles/styles";
import Image from "next/image";
import React from "react";
import Img1 from "@/assets/gallery/Rectangle 12.png";
import Img2 from "@/assets/gallery/Rectangle 14.png";
import Img3 from "@/assets/gallery/Rectangle 19.png";
import Img4 from "@/assets/gallery/Rectangle 20.png";
import style from "@/app/styles/styles.module.css";

const Gallery = () => {
  return (
    <div className="bg-[#F1FAFF] pb-20">
      <div className="w-full overflow-x-scroll no-scrollbar ">
        <div className="flex gap-4" style={{ minWidth: "2000px" }}>
          <div
            className={`${style.gimg1} rounded-lg overflow-hidden w-[500px] h-[400px] p-4 flex items-end justify-start`}
          >
            <p className={`text-[36px] text-white`}>Seniors</p>
          </div>

          <div
            className={`${style.gimg2}  rounded-lg overflow-hidden w-[500px] h-[400px] p-4 flex items-end justify-start`}
          >
            <p className={`text-[36px] text-white`}>Work from home</p>
          </div>

          <div
            className={`${style.gimg3}  rounded-lg overflow-hidden w-[500px] h-[400px] p-4 flex items-end justify-start`}
          >
            <p className={`text-[36px] text-white`}>Online Learning</p>
          </div>

          <div
            className={`${style.gimg4}  rounded-lg overflow-hidden w-[500px] h-[400px] p-4 flex items-end justify-start`}
          >
            <p className={`text-[36px] text-white`}>Live Sports</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
