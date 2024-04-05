import styles from "@/app/styles/styles";
import Image from "next/image";
import React from "react";
import border from "../../../assets/border.png";

const ExpLimitless = () => {
  const data = [
    {
      id: 1,
      descp:
        "At Swift-Net.ca, we believe that everyone, regardless of where they live, should have access to fast and reliable internet. That's why we're committed to providing the residents of Lloydminster, our home market, with high-speed connectivity that rivals that of urban centres.",
    },
    {
      id: 2,
      descp:
        "Truly unlimited internet service is available, meaning you can surf, stream, and game to your heart's content without worrying about data caps, overage charges, or speed throttling. With Swift-Net.ca, you can enjoy a seamless online experience, whether you're working from home, attending virtual classes, streaming your favourite shows, or staying connected with loved ones.",
    },
  ];
  return (
    <div className=" pb-20">
      <div className={`${styles.width} md:flex gap-2 justify-between`}>
        <div className="basis-2/5 flex items-center justify-center">
          <h2 className={`${styles.heading} mb-3`}>
            Experience{" "}
            <span className="relative z-40 text-primary">
              Limitless{" "}
              <Image
                src={border}
                alt=""
                className="absolute right-0 bottom-[-3px] -z-10"
              />
            </span>{" "}
            Connectivity
          </h2>
        </div>

        <div className="basis-[58%] flex flex-col gap-3">
          {data.map((data) => (
            <div key={data.id}>
              <span className={` font-semibold text-3xl`}>
                {data.heading && data.heading}
              </span>
              <p className={`${styles.paragraph}`}>{data.descp}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpLimitless;
