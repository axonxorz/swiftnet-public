import React from "react";
import styles from "@/app/styles/styles";
import Link from "next/link";

const Sec5 = () => {
  return (
    <>
      <div className="w-full  flex-col flex items-center justify-center space-y-4 ">
        <p className={`${styles.heading} w-[90%] md:w-[60%] text-center`}>
          Choose Swift-Net.ca for Dependable Internet Service in <br />
          <span className="text-primary">Lloydminster</span>
        </p>

        <p className="w-[90%] md:w-[60%] text-center text-lg mt-5">
          The Calix GigaSpire BLAST u4 and u6 are more than just Wi-Fi routers.
          They are powerful, smart home systems designed to deliver an
          exceptional Wi-Fi experience alongside appealing new services and
          applications. These systems are part of the Calix platform and
          expansive GigaSpire BLAST portfolio, enabling you to enjoy amazing
          subscriber experiences and expand your connectivity options.
        </p>
      </div>

      <div className={`${styles.width} my-10`}>
        <div className="w-full rounded-lg bg-primary flex flex-col gap-3 md:flex-row justify-center items-center py-6">
          <div className="w-full md:flex-auto px-3 md:px-10">
            <div className="w-[90%] md:w-[70%]">
              <p className="font-bold text-[24px] text-white">
                Join us at Swift-Net.ca
              </p>
              <p className="text-sm text-white mt-3">
                Experience the difference of a truly unlimited, reliable, and
                high-speed internet service. Sign up today and enjoy the
                benefits of the Wi-Fi App by Calix and the powerful performance
                of the Calix GigaSpire BLAST systems.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[200px] ml-4 bg-red flex items-center ">
            <Link
              href={"/contact-us"}
              className="py-4 px-6 text-sm rounded-lg bg-white text-primary"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sec5;
