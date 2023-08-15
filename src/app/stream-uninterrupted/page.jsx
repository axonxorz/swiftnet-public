import React from "react";
import style from "../styles/styles.module.css";
import img from "../../assets/landings/Rectangle 2356.webp";
import img2 from "../../assets/landings/Rectangle 2356.webp";
import CommonLayers from "../components/CommonLayers";
import "@/app/styles/custom.css";

export const metadata = {
  title:
    "Stream VIdeo with AB/SK Local Wi-Fi Internet Provider [SIGN UP] by Swift-Net.ca",
  description:
    "Experience unparalleled streaming with Swift-Net.ca's high-speed internet service. Enjoy 4K video, unlimited data, multiple streams, and reliable service even in adverse weather. Pair with top Canadian streaming platforms like Netflix, Amazon Prime, and more. Choose Swift-Net.ca for the ultimate streaming experience",
};

const page = () => {
  const data = [
    {
      id: 1,
      heading: "Support for 4K Video",
      description:
        "Swift-Net.ca's internet service offers fast speeds that can easily support 4K video streaming. This means you can enjoy your favorite content in stunning high-definition without any buffering or lag.",
    },
    {
      id: 2,
      heading: "Unlimited Data",
      description:
        "With Swift-Net.ca, you never have to worry about data caps or overage fees. Our truly unlimited data allows you to stream as much content as you like without any restrictions.",
    },
    {
      id: 3,
      heading: "Multiple Simultaneous Video Streams",
      description:
        "Our robust internet service can support multiple simultaneous video streams, ensuring that everyone in your household can enjoy their favorite content without any interruptions.",
    },
    {
      id: 4,
      heading: "Reliable Service in Adverse Weather",
      description:
        "Unlike satellite TV, Swift-Net.ca's internet service remains reliable even in adverse weather conditions. This means you can continue streaming your favorite shows and movies without worrying about disruptions due to heavy rain or snow.",
    },
    {
      id: 5,
      heading: "Budget-Friendly",
      description:
        "Swift-Net.ca's internet service is budget-friendly and complements your favorite video streaming services. Our affordable plans make it simple to access popular Canadian streaming services like Netflix, Amazon Prime Video, Crave, Disney+, and Apple TV+ without breaking the bank.",
    },
  ];
  return (
    <>
      <CommonLayers
        heading="Stream Videos and TV Uninterrupted"
        description="For those who love streaming their favorite TV, movies, and video content, Swift-Net.ca's internet service is the perfect solution. Our high-speed, unlimited data service is designed to provide an unparalleled streaming experience. In this section, we'll explain why Swift-Net.ca is the ideal choice for streaming enthusiasts, ensuring you can enjoy your favorite movies and TV shows without any hassle."
        img={img}
        data={data}
        paragraph1="Swift-Net.ca's internet service is the ideal choice for streaming enthusiasts who want a fast, reliable, and unlimited data solution. Our service ensures that you can enjoy 4K video, multiple simultaneous streams, and uninterrupted service even in adverse weather conditions. Plus, our budget-friendly plans make it easy to pair with popular Canadian streaming services like Netflix, Amazon Prime Video, Crave, Disney+, and Apple TV+. Choose Swift-Net.ca for the ultimate streaming experience. "
        img2={img2}
        imgUrl={style.streamUninterrupted}
      />
    </>
  );
};

export default page;
