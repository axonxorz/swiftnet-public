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
              className={`${style.streambg}  relative group cursor-pointer rounded-lg overflow-hidden  col-span-1 md:h-[450px] h-[250px]   flex items-end justify-start`}
            >
              <div className="relative w-full p-3 z-50">
                <div className="w-full bottom-0 -z-20 right-0 bg-black/30 h-full absolute"></div>

                <p
                  className={`text-[25px] z-40   md:text-[42px] font-bold text-white `}
                >
                  Stream Movies & TV
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/gaming-experience"}>
            <div
              className={`${style.gamingbg} cursor-pointer rounded-lg overflow-hidden col-span-1 md:h-[450px] h-[250px]  flex items-end justify-start`}
            >
              <div className="relative w-full p-3 z-50">
                <div className="w-full bottom-0 -z-20 right-0 bg-black/30 h-full absolute"></div>

                <p
                  className={`text-[25px] z-40   md:text-[42px] font-bold text-white `}
                >
                  Online Gaming
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/business-class"}>
            <div
              className={`${style.workfromhomebg} cursor-pointer rounded-lg overflow-hidden col-span-1 md:h-[450px] h-[250px]  flex items-end justify-start`}
            >
              <div className="relative w-full p-3 z-50">
                <div className="w-full bottom-0 -z-20 right-0 bg-black/30 h-full absolute"></div>

                <p
                  className={`text-[25px] z-40   md:text-[42px] font-bold text-white `}
                >
                  Work from home
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/online-learning"}>
            <div
              className={`${style.onlineleaningbg} cursor-pointer rounded-lg overflow-hidden col-span-1 md:h-[450px] h-[250px]  flex items-end justify-start`}
            >
              <div className="relative w-full p-3 z-50">
                <div className="w-full bottom-0 -z-20 right-0 bg-black/30 h-full absolute"></div>

                <p
                  className={`text-[25px] z-40   md:text-[42px] font-bold text-white `}
                >
                  Online Learning
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/live-sport-broadcast"}>
            <div
              className={`${style.liveSportbg} cursor-pointer rounded-lg overflow-hidden col-span-1 md:h-[450px] h-[250px]  flex items-end justify-start`}
            >
              <div className="relative w-full p-3 z-50">
                <div className="w-full bottom-0 -z-20 right-0 bg-black/30 h-full absolute"></div>

                <p
                  className={`text-[25px] z-40   md:text-[42px] font-bold text-white `}
                >
                  Live Sports
                </p>
              </div>
            </div>
          </Link>

          <Link href={"/non-tech-savvy"}>
            <div
              className={`${style.seniorsbg} cursor-pointer rounded-lg overflow-hidden col-span-1 md:h-[450px] h-[250px]  flex items-end justify-start`}
            >
              <div className="relative w-full p-3 z-50">
                <div className="w-full bottom-0 -z-20 right-0 bg-black/30 h-full absolute"></div>

                <p
                  className={`text-[25px] z-40   md:text-[42px] font-bold text-white `}
                >
                  Seniors
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
