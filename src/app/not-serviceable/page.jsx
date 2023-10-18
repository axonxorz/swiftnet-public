"use client";
import React from "react";
import styles from "../styles/styles";
import Link from "next/link";
import "@/app/styles/custom.css";

const page = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center space-y-6">
            <div className="">
            </div>
            <div className="px-10 text-center space-y-4">
                <p className="text-[30px] font-bold">
                    We regret to inform you that our services are not currently
                    available in your area.
                </p>
                <p className={styles.paragraph}>
                    Our growth is driven by interest. In order to know there's interest, we need to hear from you and your neighbors. Help us serve you better by spreading the word, and your community could be the next to get connected!
                </p>
            </div>

            <div className="px-10 text-center space-y-4">
                <Link href={"/"}>
                    <div className="w-[189px] h-[56px] gap-1 flex items-center justify-center bg-primary rounded-lg ">
                        <p className="text-[16px] text-white font-bold">Back to Homepage</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default page;
