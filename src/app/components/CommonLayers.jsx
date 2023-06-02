import React from "react";
import style from "../styles/styles.module.css";
import styles from "../styles/styles";
import Image from "next/image";
import network from "../../assets/network.png";

const CommonLayers = (props) => {
  return (
    <div className="pt-20">
      <div className={`${props.imgUrl} h-[50vh] md:h-[70vh]`}></div>
      <div className={`${styles.width}`}>
        <div className="md:w-3/5 m-auto">
          <h2 className={`${styles.heading} mt-5 mb-3`}>{props.heading}</h2>
          <p className={`${styles.paragraph} mb-7`}>{props.description}</p>
        </div>

        <div className="relative w-full">
          <Image
            src={props.img}
            alt="/"
            className="w-full h-[40vh] md:h-auto"
          />

          <div
            className={`md:w-[820px] min-h-[700px] mx-4 md:mx-0 md:absolute md:bottom-0 right-0 mt-[-250px] pb-10 md:pb-6 ${style.filteredBg} p-6 flex flex-col gap-10 items-center justify-center`}
          >
            {props.data.map((data) => (
              <div key={data.id}>
                <span className={`${styles.paragraph} font-semibold`}>
                  {data.heading && data.heading}
                </span>
                <p className={`${styles.paragraph}`}>{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:flex mb-14 md:mb-24">
        <div
          className={`basis-1/2 bg-primary md:pt-[230px] relative md:top-[-120px] -z-20 px-4 md:px-0 md:pl-[7.5%] py-10 md:py-0`}
        >
          <p className={`${styles.paragraph} text-white pr-10`}>
            {props.paragraph1}{" "}
          </p>
          {props.paragraph2 && <br />}
          <p className={`${styles.paragraph} text-white mb-7 pr-10`}>
            {props.paragraph2 && props.paragraph2}
          </p>
          <button className=" text-white font-medium text-base border-[1px] border-solid border-white px-4 py-2 rounded-md">
            Get Started
          </button>
          <div className="absolute bottom-0 left-0">
            <Image src={network} alt="/" unoptimized={true} className="" />
          </div>
        </div>

        <div className="basis-1/2">
          <Image
            src={props.img2}
            alt="/"
            unoptimized={true}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CommonLayers;
