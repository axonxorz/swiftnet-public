import styles from "@/app/styles/styles";
import React from "react";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon4.png";
import icon5 from "../../../assets/icon5.png";
import Image from "next/image";
import Link from "next/link";

const WhySwiftNet = () => {
  const data = [
    {
      id: 1,
      icon: icon1,
      heading: "High Speed Internet",
      descp:
        "We provide fast and reliable wireless internet service, allowing you to stream, browse, and game without buffering or delays.",
    },
    {
      id: 2,
      icon: icon2,
      heading: "Rural Focus",
      descp:
        "Our team is dedicated to serving rural communities in Alberta and Saskatchewan, ensuring that everyone can enjoy high-speed home wi-fi, no matter where they live",
    },
    {
      id: 3,
      icon: icon3,
      heading: "Easy Sign-Up Process",
      descp:
        "Simply enter your home address into our signup form, and we'll get you connected in no time",
    },
    {
      id: 4,
      icon: icon4,
      heading: "Affordable Pricing",
      descp:
        "We offer competitive pricing and a variety of plans to suit every budget. Ready to Get Connected?",
    },
    {
      id: 5,
      icon: icon5,
      heading: "Local Support",
      descp:
        "Our friendly and knowledgeable staff are based right here in Alberta and Saskatchewan, so you can trust that we understand the unique challenges of providing internet service to rural communities",
    },
  ];
  return (
    <div
      className={`${styles.width} md:flex gap-2 justify-between pt-12 md:pt-28 pb-12 md:pb-20`}
    >
      <div className="basis-2/5">
        <h2 className={`${styles.heading} mb-3`}>Why Choose Swift-Net.ca?</h2>
        <p className={`${styles.paragraph} mb-5 text-[#4B5563]`}>
          Join the growing number of satisfied customers enjoying Swift-Net.ca's
          high-speed wireless internet service in rural Alberta and
          Saskatchewan!
        </p>
        <Link href={"/contact-us"}  className="w-full cursor-pointer mt-3 md:w-auto text-primary font-medium text-base border-[1px] border-solid border-primary px-4 py-2 rounded-md">
          Get Started 
        </Link>
      </div>

      <div className="basis-[48%] md:flex flex-wrap gap-5">
        {data.map((data) => (
          <div className="basis-[48%] flex flex-col gap-1 mt-6 md:mt-0">
            <Image src={data.icon} alt="" className="w-[40px] md:w-[50px]" />
            <span className={`${styles.paragraph} font-semibold`}>
              {data.heading}
            </span>
            <p className={`${styles.paragraph}`}>{data.descp}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhySwiftNet;
