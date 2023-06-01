import React from "react";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon6.png";
import icon4 from "../../../assets/icon7.png";
import icon5 from "../../../assets/icon8.png";
import icon6 from "../../../assets/icon9.png";
import icon7 from "../../../assets/icon10.png";
import icon8 from "../../../assets/icon4.png";
import CommonCards from "../CommonCards";

const ChooseSwiftNet = () => {
  const data = [
    {
      id: 1,
      icon: icon1,
      heading: "Faster Connection Speeds",
      descp:
        "Swift-Net.ca's fixed wireless access service delivers faster connection speeds compared to mobile network operators. Our technology is specifically designed for providing high-speed internet access, ensuring a smoother and more enjoyable online experience.",
    },
    {
      id: 2,
      icon: icon2,
      heading: "Less Susceptible to Congestion during Peak Times",
      descp:
        "Our custom-engineered internet connection is less susceptible to congestion during peak usage hours. With Swift-Net.ca, you can enjoy uninterrupted browsing, streaming, and downloading, even when demand is high.",
    },
    {
      id: 3,
      icon: icon3,
      heading: "Lower Latency",
      descp:
        "Swift-Net.ca's fixed wireless access service provides lower latency than mobile network operators, ensuring a more responsive online experience. This is particularly important for activities such as video calls, online gaming, or any other application that requires real-time interaction.",
    },
    {
      id: 4,
      icon: icon4,
      heading: "More Reliable in Severe Weather",
      descp:
        "Our fixed-in-place internet connection is more reliable during severe weather conditions, such as heavy rain or snow, compared to mobile network operators. Stay connected with Swift-Net.ca even when the weather takes a turn for the worse.",
    },
    {
      id: 5,
      icon: icon5,
      heading: "Easy-to-Use Wi-Fi Network",
      descp:
        "Swift-Net.ca makes connecting to the internet a breeze. Our team will set up your Wi-Fi network and provide you with an easy-to-remember network name and password, allowing you to start using your new service without any hassle.",
    },
    {
      id: 6,
      icon: icon6,
      heading: "Less Maintenance",
      descp:
        "Thanks to our engineered and professionally installed service, Swift-Net.ca's fixed wireless access requires less maintenance than mobile network operators. Trust that your internet connection will remain stable and reliable without the need for frequent adjustments or repairs.",
    },
    {
      id: 7,
      icon: icon7,
      heading: "Local Customer Support",
      descp:
        "As a locally-owned and operated business, Swift-Net.ca offers personalized customer support that's just a phone call away. Our knowledgeable and friendly team is always ready to help you with any questions or concerns you may have.",
    },
    {
      id: 8,
      icon: icon8,
      heading: "More Affordable, No Hidden Fees",
      descp:
        "Swift-Net.ca's fixed wireless access service is more affordable than mobile network operators, with no hidden fees, overages, data caps, or throttling. Our transparent pricing and fixed monthly plans allow you to budget with confidence, knowing that your bill will remain the same each month.",
    },
  ];
  return (
    <>
      <CommonCards
        heading="Choose Swift-Net.ca as a Better Alternative to Mobile Data"
        intro="When it comes to internet service providers, Swift-Net.ca stands out as a much better alternative to mobile data from mobile network operators like Rogers Communications, Bell Mobility, Telus Mobility, and SaskTel. Our custom-engineered and fixed-in-place internet connection provides numerous advantages over mobile technology, which was originally designed for different purposes and constraints. Choosing Swift-Net.ca is better in terms of connection speed, reliability, ease of use, and cost."
        data={data}
        paragraph="Choose Swift-Net.ca as your go-to internet service provider for faster connection speeds, lower latency, better reliability during severe weather, hassle-free Wi-Fi setup, less maintenance, local customer support, and affordable pricing without any hidden fees. As an alternative to mobile network operators like Rogers Communications, Bell Mobility, Telus Mobility, and SaskTel, Swift-Net.ca offers a superior internet experience tailored to your needs. Make the switch today and discover the Swift-Net.ca advantage."
      />
    </>
  );
};

export default ChooseSwiftNet;
