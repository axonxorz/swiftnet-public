import styles from "@/app/styles/styles";
import Image from "next/image";
import React from "react";
import img1 from "@/assets/wifi/commandiq-smartphone-black_v2_transparent-shadow_03-22-1.webp";
import Link from "next/link";
const Sec2 = () => {
  return (
    <div className="bg-[#F1FAFF]">
      <div
        className={
          styles.width3 + "w-full  flex items-center justify-center py-10 "
        }
      >
        <div className="w-full container grid grid-cols-3  place-items-center">
          <div className="col-span-2 flex flex-col items-start justify-start space-y-8">
            <p className={`${styles.heading}`}>
              Your Home Wi-Fi Network Control Center
            </p>{" "}
            <p>
              The Wi-Fi App by Calix, also known as CommandIQ®, puts the power
              in your hands to manage and control every aspect of your connected
              home experience. This user-friendly mobile app combines intuitive
              design with robust capabilities to simplify your experience and
              optimize your home network.
            </p>{" "}
            <p>
              Join us at Swift-Net.ca and experience the difference of a truly
              unlimited, reliable, and high-speed internet service. Sign up
              today and enjoy the benefits of the Wi-Fi App by Calix.
            </p>
            <div className="w-full md:w-[200px]  my-2 ">
              <Link
                href={"/sign-up"}
                className="py-4 px-6 text-sm rounded-lg  bg-primary text-white"
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className="col-span-1 flex items-center justify-center overflow-hidden ">
            <Image
              alt=""
              src={img1}
              style={{
                scale: 1,
                marginLeft: "17%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec2;
