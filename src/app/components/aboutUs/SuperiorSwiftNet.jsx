import React from "react";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon6.png";
import icon3 from "../../../assets/icon7.png";
import icon4 from "../../../assets/icon8.png";
import icon5 from "../../../assets/icon9.png";
import icon6 from "../../../assets/icon10.png";
import icon7 from "../../../assets/icon4.png";
import CommonCards from "../CommonCards";

const SuperiorSwiftNet = () => {
  const data = [
    {
      id: 1,
      icon: icon1,
      heading: "Faster Connection Speeds",
      descp:
        "Unlike satellite internet, Swift-Net.ca's FWA service provides faster connection speeds, ensuring you can browse the web, stream videos, and stay connected with friends and family without any frustrating delays or buffering.",
    },
    {
      id: 2,
      icon: icon2,
      heading: "Lower Latency",
      descp:
        "Swift-Net.ca's FWA internet service has lower latency compared to satellite internet, which means that your online activities respond more quickly. This is particularly important for activities like video calls or online gaming, where low latency ensures a smoother, more enjoyable experience.",
    },
    {
      id: 3,
      icon: icon3,
      heading: "More Reliable in Severe Weather",
      descp:
        "Satellite internet can be disrupted by severe weather, such as heavy rain or snow. Swift-Net.ca's FWA service is more reliable during such conditions, allowing you to stay connected even when the weather takes a turn for the worse.",
    },
    {
      id: 4,
      icon: icon4,
      heading: "Easy-to-Use Wi-Fi Network",
      descp:
        "Swift-Net.ca makes it simple for you to connect to the internet. Our team will set up your Wi-Fi network and provide you with an easy-to-remember network name and password, ensuring you can start using your new service without any hassle.",
    },
    {
      id: 5,
      icon: icon5,
      heading: "Less Maintenance",
      descp:
        "Our professionally installed and engineered FWA service requires less maintenance than satellite internet. With Swift-Net.ca, you can trust that your internet connection will remain stable and reliable without the need for frequent adjustments or repairs.",
    },
    {
      id: 6,
      icon: icon6,
      heading: "Local Customer Support",
      descp:
        "As a locally-owned and operated business, Swift-Net.ca offers personalized customer support that's just a phone call away. Our knowledgeable and friendly team is always ready to help you with any questions or concerns you may have.",
    },
    {
      id: 7,
      icon: icon7,
      heading: "More Affordable, No Hidden Fees",
      descp:
        "Swift-Net.ca's fixed wireless access service is more affordable than mobile network operators, with no hidden fees, overages, data caps on select plans, or throttling. Our transparent pricing and fixed monthly plans allow you to budget with confidence, knowing that your bill will remain the same each month.",
    },
  ];
  return (
    <>
      <CommonCards
        heading="Swift-Net.ca is a Superior Alternative to Satellite Internet Providers"
        intro="If you're considering satellite internet providers like Starlink, Xplornet, or Galaxy Broadband, we invite you to explore Swift-Net.ca as a better alternative. Our Fixed Wireless Access (FWA) internet service offers numerous advantages over satellite internet, including faster connection speeds, lower latency, and more reliable service during severe weather. In this section, we'll explain the benefits of choosing Swift-Net.ca in simple, easy-to-understand terms."
        data={data}
        paragraph="Choose Swift-Net.ca as your go-to internet service provider for faster connection speeds, lower latency, better reliability during severe weather, hassle-free Wi-Fi setup, less maintenance, local customer support, and affordable pricing without any hidden fees. As an alternative to mobile network operators like Rogers Communications, Bell Mobility, Telus Mobility, and SaskTel, Swift-Net.ca offers a superior internet experience tailored to your needs. Make the switch today and discover the Swift-Net.ca advantage."
      />
    </>
  );
};

export default SuperiorSwiftNet;
