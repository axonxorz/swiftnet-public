import React from "react";
import Plans from "./Plans";
import logo1 from "@/assets/logo2.png";
import Image from "next/image";

const PopUp = ({ setShow }) => {
  return (
    <div className="fixed w-full  md:h-screen bg-white/60 top-0 left-0 flex items-center justify-center  p-3 ">
      <div className="w-full md:w-[70%] p-4 bg-[#98C11D]   relative rounded-xl ">
        <div className="w-full">
          <div
            className="w-full flex items-center justify-end "
            onClick={() => setShow(false)}
          >
            <p className="font-bold text-xl md:text-2xl hover:scale-110 cursor-pointer text-white ">
              X
            </p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="font-bold text-[38px] md:text-[48px]  cursor-pointer text-primary ">
              Now Available In Lloydminster
            </p>
          </div>
        </div>

        <div className="flex-1  w-full flex flex-col md:flex-row items-center justify-around">
          <div className="hidden md:flex md:absolute  -left-[120px] md:-left-[190px]">
            <div className="flex items-center justify-center gap-5 transform -rotate-90">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7062 31.2394C20.6055 29.8474 23.3227 27.9499 25.7259 25.5467C28.1291 23.1436 30.0266 20.4263 31.4186 17.527C31.5384 17.2777 31.5982 17.153 31.6442 16.9952C31.8077 16.4345 31.6903 15.746 31.3502 15.2711C31.2546 15.1375 31.1402 15.0232 30.9116 14.7945C30.2124 14.0953 29.8628 13.7457 29.6342 13.3942C28.7722 12.0684 28.7722 10.3592 29.6342 9.03344C29.8628 8.68189 30.2124 8.33228 30.9116 7.63307L31.3014 7.24333C32.3642 6.18045 32.8957 5.64901 33.4664 5.36032C34.6016 4.78617 35.9421 4.78617 37.0772 5.36032C37.648 5.649 38.1794 6.18045 39.2423 7.24333L39.5576 7.5586C40.6168 8.61785 41.1464 9.14747 41.5509 9.86753C41.9998 10.6665 42.3225 11.9075 42.3198 12.824C42.3173 13.6499 42.1571 14.2143 41.8367 15.3432C40.1148 21.41 36.8658 27.1347 32.0899 31.9107C27.3139 36.6866 21.5892 39.9356 15.5224 41.6575C14.3935 41.9779 13.829 42.1382 13.0031 42.1406C12.0867 42.1433 10.8457 41.8206 10.0467 41.3718C9.32665 40.9673 8.79702 40.4377 7.73778 39.3784L7.42251 39.0631C6.35962 38.0003 5.82818 37.4688 5.53949 36.898C4.96535 35.7629 4.96535 34.4224 5.53949 33.2873C5.82818 32.7165 6.35962 32.1851 7.42251 31.1222L7.81225 30.7324C8.51146 30.0332 8.86106 29.6836 9.21262 29.4551C10.5384 28.5931 12.2476 28.5931 13.5733 29.4551C13.9249 29.6836 14.2745 30.0332 14.9737 30.7324C15.2023 30.9611 15.3167 31.0754 15.4503 31.1711C15.9251 31.5111 16.6137 31.6285 17.1744 31.465C17.3321 31.419 17.4568 31.3592 17.7062 31.2394Z"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-white text-[28px] md:text-[48px]">
                1-866-667-2375
              </p>
            </div>
          </div>

          <div className="w-[50px]  md:w-[100px]"></div>

          <div className="w-full overflow-y-auto h-[700px] ">
            <Plans />
          </div>
        </div>

        <div className="w-full flex items-center justify-between">
          <p className="font-bold text-[20px] w-[200px] md:w-[400px] text-center  cursor-pointer text-white ">
            GET CONNECTED CALL TODAY
          </p>

          <Image
            src={logo1}
            alt=""
            className="w-[150px] md:w-[200px]"
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  );
};

export default PopUp;
