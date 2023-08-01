import React from "react";
import styles from "../styles/styles";
import Image from "next/image";
import network from "../../assets/network.png";
import Link from "next/link";

const CommonLayers = (props) => {
  return (
    <div className={`pt-20 ${styles.width}`}>
      <div className="h-[60px]"></div>
      <div className="flex items-center justify-center px-4 ">
        <div className="w-full md:w-3/4 flex flex-col justify-center items-start  gap-4">
          <p className={styles.paragraph}>
            {" "}
            <Link href={"/"}>
              {" "}
              <span className="hover:underline cursor-pointer">Home</span>
            </Link>{" "}
            {" > "}
            <span className="text-primary font-semibold ">{props.heading}</span>
          </p>

          <p className="font-bold text-[38px] md:text-[48px] md:w-3/4">
            {props.heading}
          </p>
        </div>
      </div>
      <div className={`${props.imgUrl} h-[50vh] md:h-[60vh] my-6`}></div>

      <div className="flex items-center justify-center px-4 mb-3">
        <div className="w-full md:w-3/4 flex flex-col justify-center items-start  gap-4">
          <p>{props.description}</p>
          <Image
            src={props.img}
            alt="/"
            className="w-full h-[40vh] md:h-auto"
          />

          <div
            className={`md:mx-0 flex flex-col gap-10 items-center justify-center`}
          >
            {props.data.map((data) => (
              <div key={data.id}>
                <span className={` text-[20px] md:text-[24px] font-semibold`}>
                  {data.heading && data.heading}
                </span>
                <p className={`${styles.paragraph}`}>{data.description}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center w-full  my-10 bg-primary">
            <div className="w-[10px] min-h-[300px] bg-primary"></div>
            <div className="flex-1 min-h-[300px] py-4 bg-[#F1FAFF] relative flex flex-col items-start justify-center md:px-4">
              <div className="absolute bottom-0  right-0  ">
                <Image src={network} alt="/" />
              </div>

              <div className={`px-4 md:px-0 `}>
                <p className={`${styles.paragraph}  pr-10`}>
                  {props.paragraph1}{" "}
                </p>
                {props.paragraph2 && <br />}
                <p className={`${styles.paragraph}  mb-7 pr-10`}>
                  {props.paragraph2 && props.paragraph2}
                </p>

                <div className="  w-full flex ">
                  <Link href={"/sign-up"}>
                    <button className="bg-primary text-white  w-[130px] cursor-pointer  font-medium text-base border-[1px] border-solid border-white px-4 py-2 rounded-md">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonLayers;
