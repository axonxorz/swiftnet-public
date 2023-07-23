import styles from "@/app/styles/styles";
import Image from "next/image";
import React from "react";
import img1 from "@/assets/wifi/Screenshot 2023-07-12 at 1.28 1.png";

const GigaSpire = () => {
  return (
    <div className="w-full py-[5%] flex-col flex items-center justify-center space-y-4 ">
      <p className={`${styles.heading} w-[90%] md:w-[60%] text-center`}>
        Calix GigaSpire BLAST u4 and u6: <br />
        <span className="text-primary">Powering Your Ultimate </span> Wi-Fi
        Experience
      </p>

      <p className="w-[90%] md:w-[60%] text-center text-lg">
        The Calix GigaSpire BLAST u4 and u6 are more than just Wi-Fi routers.
        They are powerful, smart home systems designed to deliver an exceptional
        Wi-Fi experience alongside appealing new services and applications.
        These systems are part of the Calix platform and expansive GigaSpire
        BLAST portfolio, enabling you to enjoy amazing subscriber experiences
        and expand your connectivity options.
      </p>

      <div className="w-full  md:min-h-[600px] flex justify-center items-center mt-4">
        <div className="w-full md:w-[60%]  md:min-h-[600px] relative flex items-center justify-center ">
          <Image
            alt=""
            src={img1}
            style={{
              width: "80%",
            }}
          />
          <div className="py-3  absolute top-3 left-5 md:left-0 flex items-center justify-center px-2 w-[200px] md:w-[244px] md:h-[78px] text-center bg-primary/70 text-white text-base md:text-xl">
            <p>GigaSpire BLAST u6</p>
          </div>

          <div className="py-3 absolute top-[42%] right-3 md:right-0 flex items-center justify-center px-2  w-[200px] md:w-[244px] md:h-[78px] text-center bg-primary/70 text-white text-base md:text-xl">
            <p>GigaSpire BLAST u4hm</p>
          </div>

          <div className="py-3 absolute bottom-0 left-6 md:left-[10%] flex items-center justify-center px-2   w-[200px] md:w-[244px] md:h-[78px] text-center bg-primary/70 text-white text-base md:text-xl">
            <p>GigaSpire BLAST u4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigaSpire;
