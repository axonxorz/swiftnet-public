import React from "react";
import styles from "../styles/styles";
import Image from "next/image";

const CommonCards = (props) => {
  return (
    <div className={`${styles.width} `}>
      <div className="md:flex gap-16 justify-between mt-5 md:mt-10 mb-6">
        <h4 className="text-xl md:text-3xl font-semibold basis-[30%] mb-2 md:mb-0">
          {props.heading}
        </h4>
        <p className={`${styles.paragraph} basis-[70%]`}>{props.intro}</p>
      </div>
      <div className=" md:flex flex-wrap gap-5">
        {props.data.map((data) => (
          <div className="basis-[32%] flex flex-col gap-1 mt-6 md:mt-0">
            <Image src={data.icon} alt="" className="w-[40px] md:w-[50px]" />
            <span className={`${styles.paragraph} font-semibold`}>
              {data.heading}
            </span>
            <p className={`${styles.paragraph}`}>{data.descp}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 md:mt-10 mb-10 md:mb-16">
        <p
          className={`${styles.paragraph} bg-primary px-6 md:px-40 py-6 md:py-10 text-white text-center`}
        >
          {props.paragraph}
        </p>
      </div>
    </div>
  );
};

export default CommonCards;
