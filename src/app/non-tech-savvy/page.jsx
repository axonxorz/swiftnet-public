import React from "react";
import style from "../styles/styles.module.css";
import img from "../../assets/Rectangle 23(2).webp";
import img2 from "../../assets/IMG_1159-1_3_.webp";
import CommonLayers from "../components/CommonLayers";
import "@/app/styles/custom.css";

export const metadata = {
  title: "AB/SK Local Wi-Fi Internet Provider [SIGN UP] by Swift-Net.ca",
  description:
    "Get connected with Swift-Net.ca, the leading home Wi-Fi internet service provider in Alberta & Saskatchewan, providing high-speed wireless internet service in Lloydminster, Cold Lake, North Battleford, and more rural communities. Sign up today!",
};

const page = () => {
  const data = [
    {
      id: 1,
      heading: "Local Technicians",
      description:
        "Swift-Net.ca takes pride in our team of local technicians who are always ready to assist you with any questions or concerns. Our technicians are knowledgeable, friendly, and committed to providing the best possible service.",
    },
    {
      id: 2,
      heading: "Professional Phone Support",
      description:
        "We understand the importance of personalized support, especially for those who may not be tech-savvy. That's why Swift-Net.ca offers phone support, ensuring that you can easily reach our team to get the help you need, whenever you need it.",
    },
    {
      id: 3,
      heading: "Lower Maintenance",
      description:
        "Our engineered and professionally installed fixed wireless access service requires less maintenance than other internet solutions. With Swift-Net.ca, you can enjoy a stable and reliable internet connection without worrying about frequent adjustments or repairs.",
    },
    {
      id: 4,
      heading: "Easy-to-Use Wi-Fi",
      description:
        "Swift-Net.ca makes it simple to connect to the internet with our easy-to-use Wi-Fi network. Our team will set up your Wi-Fi router and provide you with an easy-to-remember network name and password. This ensures that you can start using your new service without any hassle.",
    },
    {
      id: 5,
      heading: "Personalized Device Setup",
      description:
        "We understand that connecting your devices to the Wi-Fi network can be challenging for some individuals. Our technicians will gladly help you connect your devices to the Wi-Fi during the installation process, ensuring a smooth and stress-free experience.",
    },
  ];
  return (
    <>
      <CommonLayers
        heading="Ideal Internet Solution for Non-Tech-Savvy"
        description="At Swift-Net.ca, we understand that not everyone is tech-savvy, and older or retired folks may require additional support when it comes to their internet service. That's why we've tailored our services to be user-friendly, offering local technicians ,professional phone support, and easy-to-use Wi-Fi."
        img={img}
        data={data}
        paragraph1="With our focus on local technicians, phone support, lower maintenance, 
        easy-to-use Wi-Fi, and personalized device setup, we aim to make your internet experience as simple and enjoyable as possible. Choose Swift-Net.ca for a user-friendly and supportive internet solution tailored to your needs "
        img2={img2}
        imgUrl={style.nonTechSavvyBanner}
      />
    </>
  );
};

export default page;
