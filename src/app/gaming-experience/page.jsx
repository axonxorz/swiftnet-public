import React from "react";
import style from "../styles/styles.module.css";
import img from "../../assets/Rectangle 23(4).webp";
import img2 from "../../assets/IMG_1159-1_3_.webp";
import CommonLayers from "../components/CommonLayers";

export const metadata = {
  title: "Online Gaming Internet Service by Swift-Net.ca",
  description:
    "Get connected with Swift-Net.ca, the leading home Wi-Fi internet service provider in Alberta & Saskatchewan, providing high-speed wireless internet service in Lloydminster, Cold Lake, North Battleford, and more rural communities. Sign up today!",
};

const page = () => {
  const data = [
    {
      id: 1,
      heading: "Low Ping Times",
      description:
        "Swift-Net.ca's internet service is the ideal choice for streaming enthusiasts who want a fast, reliable, and unlimited data solution. Our service ensures that you can enjoy 4K video, multiple simultaneous streams, and uninterrupted service even in adverse weather conditions. Plus, our budget-friendly plans make it easy to pair with popular Canadian streaming services like Netflix, Amazon Prime Video, Crave, Disney+, and Apple TV+. Choose Swift-Net.ca for the ultimate streaming experience.",
    },
    {
      id: 2,
      heading: "Fast Speeds",
      description:
        "Swift-Net.ca's internet service is the ideal choice for streaming enthusiasts who want a fast, reliable, and unlimited data solution. Our service ensures that you can enjoy 4K video, multiple simultaneous streams, and uninterrupted service even in adverse weather conditions. Plus, our budget-friendly plans make it easy to pair with popular Canadian streaming services like Netflix, Amazon Prime Video, Crave, Disney+, and Apple TV+. Choose Swift-Net.ca for the ultimate streaming experience.",
    },
    {
      id: 3,
      heading: "Upgraded Calix Wi-Fi",
      description:
        "Swift-Net.ca's internet service is the ideal choice for streaming enthusiasts who want a fast, reliable, and unlimited data solution. Our service ensures that you can enjoy 4K video, multiple simultaneous streams, and uninterrupted service even in adverse weather conditions. Plus, our budget-friendly plans make it easy to pair with popular Canadian streaming services like Netflix, Amazon Prime Video, Crave, Disney+, and Apple TV+. Choose Swift-Net.ca for the ultimate streaming experience.",
    },
    {
      id: 4,
      heading: "Wired Ethernet Support",
      description:
        "Swift-Net.ca's internet service is the ideal choice for streaming enthusiasts who want a fast, reliable, and unlimited data solution. Our service ensures that you can enjoy 4K video, multiple simultaneous streams, and uninterrupted service even in adverse weather conditions. Plus, our budget-friendly plans make it easy to pair with popular Canadian streaming services like Netflix, Amazon Prime Video, Crave, Disney+, and Apple TV+. Choose Swift-Net.ca for the ultimate streaming experience.",
    },
    {
      id: 5,
      heading: "Managed Wi-Fi App with Premium Calix Router",
      description:
        "Swift-Net.ca's internet service is the ideal choice for streaming enthusiasts who want a fast, reliable, and unlimited data solution. Our service ensures that you can enjoy 4K video, multiple simultaneous streams, and uninterrupted service even in adverse weather conditions. Plus, our budget-friendly plans make it easy to pair with popular Canadian streaming services like Netflix, Amazon Prime Video, Crave, Disney+, and Apple TV+. Choose Swift-Net.ca for the ultimate streaming experience.",
    },
  ];
  return (
    <>
      <CommonLayers
        heading="The Ultimate Online Gaming Experience"
        description="Online gaming has become an integral part of many Canadian lives, and having a reliable, high-speed internet connection is essential for an enjoyable gaming experience. Swift-Net.ca is the perfect choice for avid gamers who want to stay connected and play their favorite games with their friends and family, such as PUBG: Battlegrounds, Counter-Strike: Global Offensive, Lost Ark, Dota 2, Elden Ring, New World, Cyberpunk 2077, Goose Goose Duck, Apex Legends, and Hogwarts Legacy. Here's why Swift-Net.ca is the ideal ISP for online gaming enthusiasts."
        img={img}
        data={data}
        paragraph1="Swift-Net.ca's commitment to providing low latency, fast speeds, upgraded Calix Wi-Fi, wired Ethernet support, and a managed Wi-Fi app makes it the ultimate choice for online gamers. Enjoy your favorite games, like PUBG: Battlegrounds, Counter-Strike: Global Offensive, Lost Ark, Dota 2, Elden Ring, New World, Cyberpunk 2077, Goose Goose Duck, Apex Legends, and Hogwarts Legacy, with the high-quality internet service provided by Swift-Net.ca. Experience the difference and level up your gaming experience today!"
        paragraph2="Swift-Net.ca: Bringing High-Speed Home Wi-Fi to Rural Alberta & Saskatchewan.
        
        With Swift-Net.ca, you can enjoy reliable internet service in Lloydminster, Cold Lake, North Battleford, and other rural communities in Alberta and Saskatchewan. Don't settle for slow or unreliable internet – sign up for Swift-Net.ca today and experience the difference!"
        img2={img2}
        imgUrl={style.gamingExperience}
      />
    </>
  );
};

export default page;
