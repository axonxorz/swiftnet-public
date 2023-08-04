import styles from "@/app/styles/styles";
import Image from "next/image";
import React from "react";
import img1 from "@/assets/landings/lloydminster3.webp";

const Sec3 = () => {
  const data = [
    {
      id: 1,
      heading: "Permanent Fixed Wireless Connection",
      descp:
        "Our engineers design a permanent fixed wireless connection for your property, connecting you to our network without the need for satellites or wired connections like DSL or cable. This robust infrastructure ensures a stable and high-speed internet connection, providing you with a reliable online experience.",
    },
    {
      id: 2,
      heading: "Less Susceptible to Power Disruptions",
      descp:
        "Our fixed wireless network is designed with built-in redundancies to minimize the impact of remote power disruptions on your internet connectivity. This ensures that you can continue to enjoy a stable connection even when power outages occur in your community.",
    },
    {
      id: 3,
      heading: "Resilient to Extreme Weather Conditions",
      descp:
        "We understand the unique weather challenges faced by communities in northern Alberta and Saskatchewan, such as heavy snowfall, freezing rain, and icy conditions. Our fixed wireless infrastructure is built to withstand these harsh weather conditions, ensuring that your internet connection remains stable and reliable during extreme weather events.",
    },
    {
      id: 4,
      heading: "Unaffected by Summer Construction",
      descp:
        "Our fixed wireless connections do not rely on underground cables that can be accidentally damaged during digging or excavation work. This means that you can count on Swift-Net.ca's internet service to remain uninterrupted throughout the summer months.",
    },
  ];
  return (
    <div className="pb-20">
      <div
        className={`${styles.width} md:flex flex-row-reverse gap-2 justify-between`}
      >
        <div className="basis-2/5 flex items-center justify-center">
          <Image
            src={img1}
            alt="saskatchewaz"
            className=" right-0 bottom-[-3px] -z-10"
          />
        </div>

        <div className="basis-[58%] flex flex-col gap-10">
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
