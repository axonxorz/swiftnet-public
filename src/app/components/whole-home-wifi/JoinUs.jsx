import styles from "@/app/styles/styles";
import Link from "next/link";
import React from "react";

const JoinUs = () => {
  return (
    <div className={`${styles.width}`}>
      <div className="w-full rounded-lg bg-[#F1FAFF] flex flex-col gap-3 md:flex-row justify-center items-center py-6">
        <div className="w-full md:flex-auto px-3 md:px-10">
          <div className="w-[90%] md:w-[70%]">
            <p className="font-bold text-[24px]">Join us at Swift-Net.ca</p>
            <p className="text-[#4B5563] text-sm">
              Experience the difference of a reliable, 
              high-speed internet service. Sign up today and enjoy the benefits
              of the Wi-Fi App by Calix and the powerful performance of the
              Calix GigaSpire BLAST systems.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[200px] ml-4 bg-red">
          <Link
            href={"/sign-up"}
            className="py-2 px-6 text-sm rounded-lg bg-primary text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
