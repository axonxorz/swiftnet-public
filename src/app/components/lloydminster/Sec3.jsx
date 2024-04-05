import styles from "@/app/styles/styles";
import Image from "next/image";
import React from "react";
import img1 from "@/assets/landings/lloydminster2.webp";

const Sec3 = () => {
  const data = [
    {
      id: 1,
      heading: "No Throttling",
      descp:
        "Experience consistent speeds with Swift-Net.ca. We ensure that your internet performance remains stable, even during peak hours or after reaching a certain data threshold. With us, you can enjoy a smooth and uninterrupted online experience, no matter how much data you use.",
    },
    {
      id: 2,
      heading: "No Overages",
      descp:
        "With Swift-Net.ca, you can rest easy knowing that there are no surprise charges on your bill. Our fixed monthly pricing means you pay the same amount each month, regardless of your data usage. Enjoy the peace of mind that comes with predictable billing and no hidden fees.",
    },
    {
      id: 3,
      heading: "Reliable and Resilient Internet for Lloydminster",
      descp:
        "Swift-Net.ca is committed to providing stable and reliable internet service to the community of Lloydminster. Our permanent fixed wireless connections are specifically designed to withstand the unique weather conditions of northern Alberta and Saskatchewan, ensuring that our customers enjoy uninterrupted internet access even during power disruptions, extreme weather, or construction in the summer.",
    },
  ];
  return (
    <div className="">
      <div className={`${styles.width} md:flex gap-7 justify-between`}>
        <div className="basis-2/5 flex items-center justify-center">
          <Image
            src={img1}
            alt="saskatchewaz"
            className=" right-0 bottom-[-3px] -z-10"
          />
        </div>

        <div className="basis-[58%] flex flex-col mt-4 md:mt-0 gap-5 md:gap-10">
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

export default Sec3;
