import React from "react";
import style from "@/app/styles/styles.module.css";
import Link from "next/link";
import styles from "@/app/styles/styles";

const Gallery = () => {
  return (
    <div className="bg-[#F1FAFF] pb-20">
      {/* desktop v */}
      <div className="w-full   grid">
        <div
          className={`${styles.width} gap-4 w-full grid grid-cols-2 md:grid-cols-3 `}
        >
          <Link href={"/stream-uninterrupted"}>
            <div
              className={`${style.streambg}  relative group cursor-pointer rounded-lg overflow-hidden  col-span-1 md:h-[450px] h-[250px]  p-4 flex items-end justify-start`}
            >
              <p
                className={`text-[25px]  bg-black/30  md:text-[42px] font-bold text-white `}
              >
                Stream Movies & TV
              </p>
            </div>
          </Link>

          <Link href={"/gaming-experience"}>
            <div
              className={`${style.gamingbg} cursor-pointer rounded-lg overflow-hidden col-span-1 md:h-[450px] h-[250px] p-4 flex items-end justify-start`}
            >
              <p
                className={`text-[25px] shadow-lg bg-black/30   md:text-[42px] font-bold text-white`}
              >
                Online Gaming
              </p>
            </div>
          </Link>

          <Link href={"/business-class"}>
            <div
              className={`${style.workfromhomebg} cursor-pointer rounded-lg overflow-hidden col-span-1 md:h-[450px] h-[250px] p-4 flex items-end justify-start`}
            >
              <p
                className={`text-[25px] md:text-[42px] font-bold bg-black/30  text-white`}
              >
                Work from home
              </p>
            </div>
          </Link>

          <Link href={"/online-learning"}>
            <div
              className={`${style.onlineleaningbg} cursor-pointer rounded-lg overflow-hidden col-span-1 md:h-[450px] h-[250px] p-4 flex items-end justify-start`}
            >
              <p
                className={`text-[25px] md:text-[42px] font-bold bg-black/30  text-white`}
              >
                Online Learning
              </p>
            </div>
          </Link>

          <Link href={"/live-sport-broadcast"}>
            <div
              className={`${style.liveSportbg} cursor-pointer rounded-lg overflow-hidden col-span-1 md:h-[450px] h-[250px] p-4 flex items-end justify-start`}
            >
              <p
                className={`text-[25px] md:text-[42px] font-bold bg-black/30  text-white`}
              >
                Live Sports
              </p>
            </div>
          </Link>

          <Link href={"/non-tech-savvy"}>
            <div
              className={`${style.seniorsbg} cursor-pointer rounded-lg overflow-hidden col-span-1 md:h-[450px] h-[250px] p-4 flex items-end justify-start`}
            >
              <p
                className={`text-[25px] md:text-[42px] font-bold bg-black/30  text-white`}
              >
                Seniors
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
