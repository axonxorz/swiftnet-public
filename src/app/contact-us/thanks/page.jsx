"use client";
import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center space-y-6">
      <div className="">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.12"
            d="M32.0002 58.6667C46.7278 58.6667 58.6668 46.7276 58.6668 32C58.6668 17.2724 46.7278 5.33337 32.0002 5.33337C17.2726 5.33337 5.3335 17.2724 5.3335 32C5.3335 46.7276 17.2726 58.6667 32.0002 58.6667Z"
            fill="#05649C"
          />
          <path
            d="M58.6668 29.562V32.0153C58.6636 37.7658 56.8015 43.3611 53.3584 47.9668C49.9153 52.5726 45.0756 55.9419 39.5611 57.5724C34.0466 59.2028 28.1529 59.007 22.7588 57.0142C17.3646 55.0214 12.7592 51.3382 9.62939 46.5142C6.49954 41.6901 5.01294 35.9835 5.3913 30.2455C5.76966 24.5075 7.99271 19.0455 11.7289 14.6742C15.4651 10.3028 20.5143 7.25632 26.1233 5.98903C31.7324 4.72173 37.6009 5.30154 42.8535 7.64197M58.6668 10.6667L32.0002 37.36L24.0002 29.36"
            stroke="#05649C"
            strokeWidth="5.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="px-10 text-center space-y-4">
        <p className="text-[30px] font-bold">We have received your message </p>
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
