import React, { useEffect, useRef } from "react";
import style from "@/app/styles/styles.module.css";
import Link from "next/link";
import styles from "@/app/styles/styles";

const Gallery = () => {
  const galleryRef = useRef(null);
  let scrollInterval;

  useEffect(() => {
    const galleryContainer = galleryRef.current;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold value to control when the scroll starts (0.0 to 1.0)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAutoScroll();
        } else {
          stopAutoScroll();
        }
      });
    }, options);

    observer.observe(galleryContainer);

    function startAutoScroll() {
      scrollInterval = setInterval(() => {
        galleryContainer.scrollLeft += 1; // Adjust scroll speed by changing this value
      }, 50); // Adjust scroll speed by changing this value
    }

    function stopAutoScroll() {
      clearInterval(scrollInterval);
    }

    galleryContainer.addEventListener("mouseenter", stopAutoScroll);
    galleryContainer.addEventListener("mouseleave", startAutoScroll);

    return () => {
      observer.disconnect();
      clearInterval(scrollInterval);
      galleryContainer.removeEventListener("mouseenter", stopAutoScroll);
      galleryContainer.removeEventListener("mouseleave", startAutoScroll);
    };
  }, []);

  return (
    <div className="bg-[#F1FAFF] pb-20">
      <div
        className="w-full overflow-x-scroll no-scrollbar md:hidden"
        ref={galleryRef}
      >
        <div className="flex gap-4" style={{ minWidth: "2000px" }}>
          <Link href={"/stream-uninterrupted"}>
            <div
              className={`${style.streambg} relative group cursor-pointer rounded-lg overflow-hidden w-[500px] h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[42px] text-white`}>Streaming movies & TV</p>
            </div>
          </Link>

          <Link href={"/gaming-experience"}>
            <div
              className={`${style.gamingbg} cursor-pointer rounded-lg overflow-hidden w-[500px]    h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[42px] text-white`}>Online Gaming</p>
            </div>
          </Link>

          <Link href={"/business-class"}>
            <div
              className={`${style.workfromhomebg} cursor-pointer rounded-lg overflow-hidden w-[500px] h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[42px] text-white`}>Work from home</p>
            </div>
          </Link>

          <Link href={"/online-learning"}>
            <div
              className={`${style.onlineleaningbg} cursor-pointer rounded-lg overflow-hidden w-[500px]  h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[42px] text-white`}>Online Learning</p>
            </div>
          </Link>

          <Link href={"/live-sport-broadcast"}>
            <div
              className={`${style.liveSportbg} cursor-pointer rounded-lg overflow-hidden w-[500px] h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[42px] text-white`}>Live Sports</p>
            </div>
          </Link>

          <Link href={"/non-tech-savvy"}>
            <div
              className={`${style.seniorsbg} cursor-pointer rounded-lg overflow-hidden w-[500px]  h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[42px] text-white`}>Seniors</p>
            </div>
          </Link>
        </div>
      </div>

      {/* desktop v */}
      <div className="w-full  hidden md:grid" ref={galleryRef}>
        <div className={`${styles.width} gap-4 w-full grid grid-cols-2 `}>
          <Link href={"/stream-uninterrupted"}>
            <div
              className={`${style.streambg} relative group cursor-pointer rounded-lg overflow-hidden col-span-1 h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[42px] text-white`}>Streaming movies & TV</p>
            </div>
          </Link>

          <Link href={"/gaming-experience"}>
            <div
              className={`${style.gamingbg} cursor-pointer rounded-lg overflow-hidden col-span-1 h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[42px] text-white`}>Online Gaming</p>
            </div>
          </Link>

          <Link href={"/business-class"}>
            <div
              className={`${style.workfromhomebg} cursor-pointer rounded-lg overflow-hidden col-span-1 h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[42px] text-white`}>Work from home</p>
            </div>
          </Link>

          <Link href={"/online-learning"}>
            <div
              className={`${style.onlineleaningbg} cursor-pointer rounded-lg overflow-hidden col-span-1 h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[42px] text-white`}>Online Learning</p>
            </div>
          </Link>

          <Link href={"/live-sport-broadcast"}>
            <div
              className={`${style.liveSportbg} cursor-pointer rounded-lg overflow-hidden col-span-1 h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[42px] text-white`}>Live Sports</p>
            </div>
          </Link>

          <Link href={"/non-tech-savvy"}>
            <div
              className={`${style.seniorsbg} cursor-pointer rounded-lg overflow-hidden col-span-1 h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[42px] text-white`}>Seniors</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
