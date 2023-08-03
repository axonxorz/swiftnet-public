import styles from "@/app/styles/styles";
import Image from "next/image";
import React from "react";
import border from "../../../assets/border.png";

const ExperienceConnectivity = () => {
  const data = [
    {
      id: 1,
      heading: "Truly Unlimited Service",
      descp:
        "Experience the freedom of unlimited internet service! With no data caps or limits, you can surf, stream, and game to your heart's content without worrying about running out of data, incurring overage charges, or speed throttling. Sign up today and enjoy unrestricted internet access with no restrictions on your online activities.",
    },
    {
      id: 2,
      heading: "No Data Caps",
      descp:
        "We don't believe in limiting your connectivity. With Swift-Net.ca, you can enjoy unlimited data usage, allowing you to stream, browse, and download to your heart's content.",
    },
    {
      id: 3,
      heading: "No Throttling",
      descp:
        "Our internet service ensures consistent speeds, so you won't experience a sudden decrease in performance during peak hours or after reaching a certain data threshold.",
    },
    {
      id: 4,
      heading: "No Overages",
      descp:
        "You can rest easy knowing that there are no surprise charges on your bill. Swift-Net.ca's fixed monthly pricing means you pay the same amount each month, regardless of your data usage",
    },
    {
      id: 5,
      heading: "Fixed Monthly Price",
      descp:
        "Our affordable plans come with a fixed monthly price, so you know exactly what to expect on your bill – no hidden fees or unexpected charges.Discover Swift-Ne.cat's Truly Unlimited Internet Service",
    },
    {
      id: 6,
      heading: "Local Provider",
      descp:
        "By choosing Swift-Net.ca, you're choosing an internet service provider that values transparency and customer satisfaction. Our truly unlimited home Wi-Fi internet service means you can enjoy high-speed home Wi-Fi without any limitations or restrictions. Connect with us today and experience truly unlimited internet in rural Alberta and Saskatchewan.",
    },
  ];
  return (
    <div className="bg-[#F1FAFF] pb-20">
      <div className={`${styles.width} md:flex gap-2 justify-between`}>
        <div className="basis-2/5">
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
          <p className={`${styles.paragraph} text-[#4B5563] mb-5 md:mb-0`}>
            At Swift-Net.ca, we are passionate about providing rural Canadians
            with the same level of high-speed connectivity as urbanites. That's
            why we offer a fixed monthly price for our wireless internet
            service, providing you with an exceptional browsing experience and
            complete peace of mind.
          </p>
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

export default ExperienceConnectivity;
