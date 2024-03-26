import styles from "@/app/styles/styles";
import React from "react";
import img1 from "@/assets/wifi/image17.png";
import img2 from "@/assets/wifi/image18.png";
import img3 from "@/assets/wifi/image 19.png";

import Image from "next/image";
const Grids = () => {
  return (
    <div className="w-full md:w-[50%] m-auto px-4 md:px-0">
      <div className="w-full grid container grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 space-y-3 ">
          <div className="w-full flex items-center justify-center  bg-[#BFE0F3] h-[322px] overflow-hidden">
            <Image
              alt=""
              src={img1}
              style={{
                scale: "0.6",
              }}
            />
          </div>

          <p className={`text-[24px] font-bold`}>
            GigaSpire BLAST u4: Compact Yet Powerful
          </p>

          <p className={`${styles.paragraph} text-[#4B5563]`}>
            The GigaSpire BLAST u4 is an exceptional Wi-Fi experience in a
            compact integrated one-system solution. It's ideal for residential
            homes and apartments, delivering high-speed, reliable connectivity
            throughout your living space. With the GigaSpire BLAST u4, you can
            enjoy seamless internet access, whether you're working from your
            home office, streaming your favorite show in the living room, or
            browsing the web in your bedroom.
          </p>
        </div>

        <div className="col-span-1 space-y-3 ">
          <div className="w-full flex items-center justify-center  bg-[#BFE0F3] h-[322px] overflow-hidden">
            <Image
              alt=""
              src={img2}
              style={{
                scale: "0.6",
              }}
            />
          </div>

          <p className={`text-[24px] font-bold`}>
            GigaSpire BLAST u6: High Bandwidth for Gamers and Small Businesses
          </p>

          <p className={`${styles.paragraph} text-[#4B5563]`}>
            For those with high bandwidth demands, such as gamers and small
            businesses, the GigaSpire BLAST u6 is the perfect solution. This
            system delivers unrivaled performance, ensuring that you can game,
            stream, and work without any lag or interruptions. The GigaSpire
            BLAST u6 is an integrated one-system solution that delivers on the
            expectations of the most demanding internet users.
          </p>
        </div>

        <div className="col-span-1 space-y-3 ">
          <div className="w-full flex items-center justify-center  bg-[#BFE0F3] h-[322px] overflow-hidden">
            <Image
              alt=""
              src={img3}
              style={{
                scale: "0.6",
              }}
            />
          </div>

          <p className={`text-[24px] font-bold`}>
            GigaSpire BLAST u4hm: Extend Your Wi-Fi Experience Outdoors
          </p>

          <p className={`${styles.paragraph} text-[#4B5563]`}>
            With the GigaSpire BLAST u4hm, you can take your Wi-Fi experience to
            the backyard, pool, and patio. This system is designed to handle the
            elements, ensuring that you can enjoy seamless internet access, rain
            or shine. With the GigaSpire BLAST u4hm, there are no more
            boundaries or limits to your Wi-Fi experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Grids;
