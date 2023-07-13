import React, { useEffect, useRef } from "react";
import style from "@/app/styles/styles.module.css";
import Link from "next/link";

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
      }, 10); // Adjust scroll speed by changing this value
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
      <div className="w-full overflow-x-scroll no-scrollbar" ref={galleryRef}>
        <div className="flex gap-4" style={{ minWidth: "2000px" }}>
          <Link href={"/non-tech-savvy"}>
            <div
              className={`${style.gimg1} relative group cursor-pointer rounded-lg overflow-hidden w-[500px] h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[36px] text-white`}>Senior's</p>
            </div>
          </Link>

          <Link href={"/live-sport-broadcast"}>
            <div
              className={`${style.gimg2} cursor-pointer rounded-lg overflow-hidden w-[500px] h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[36px] text-white`}>Live Sports</p>
            </div>
          </Link>

          <Link href={"/business-class"}>
            <div
              className={`${style.gimg3} cursor-pointer rounded-lg overflow-hidden w-[500px] h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[36px] text-white`}>Work from home</p>
            </div>
          </Link>

          <Link href={"/online-learning"}>
            <div
              className={`${style.gimg4} cursor-pointer rounded-lg overflow-hidden w-[500px] h-[400px] p-4 flex items-end justify-start`}
            >
              <p className={`text-[36px] text-white`}>Online Learning</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
