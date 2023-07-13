import React from "react";
import style from "../styles/styles.module.css";
import img from "../../assets/Rectangle 23.webp";
import user from "../../assets/IMG_1159-1.webp";
import CommonLayers from "../components/CommonLayers";

export const metadata = {
  title: "Business Class Internet Service by Swift-Net.ca",
  description:
    "Get connected with Swift-Net.ca, the leading home Wi-Fi internet service provider in Alberta & Saskatchewan, providing high-speed wireless internet service in Lloydminster, Cold Lake, North Battleford, and more rural communities. Sign up today!",
};

const page = () => {
  const data = [
    {
      id: 1,
      heading: "Seamless Integration with Top Productivity Software",
      description:
        "Swift-Net.ca's business class service is designed to work seamlessly with leading productivity software systems such as Google Workspace, Microsoft 365, Trello, Slack, Asana, Zoom, Evernote, Notion, Basecamp, and Airtable. With Swift-Net.ca's high-speed, reliable connection, you can collaborate, create, and communicate with ease, ensuring maximum productivity while working remotely.",
    },
    {
      id: 2,
      heading: "VPN Connections",
      description:
        "A secure and stable VPN connection is essential for remote workers who need to access their company's network and resources. Swift-Net.ca's business class service provides the necessary bandwidth and reliability to support secure VPN connections, allowing you to work confidently and securely from home.",
    },
    {
      id: 3,
      heading: "High-Quality Video Conferencing",
      description:
        "Video conferencing has become a staple in the remote work environment. Swift-Net.ca's high-speed internet service ensures smooth, uninterrupted video calls on platforms like Zoom, Microsoft Teams, and Google Meet. Say goodbye to frozen screens and dropped calls, and enjoy crystal-clear video conferencing with Swift-Net.ca.",
    },
    {
      id: 4,
      heading: "Ideal for Corporate VOIP and Wi-Fi Calling:",
      description:
        "Swift-Net.ca's business class service is perfectly suited for corporate Voice over IP (VOIP) and Wi-Fi calling, providing the low latency and high-quality connection needed for clear, uninterrupted calls. Whether you're on a one-on-one call with a colleague or a conference call with your team, Swift-Net.ca ensures that your voice communication remains crisp and reliable.",
    },
  ];
  return (
    <>
      <CommonLayers
        heading="Business Class Service: Ideal Solution for Working from Home"
        description="In today's rapidly evolving work landscape, many professionals are embracing the work-from-home model. A reliable, high-speed internet connection is crucial for remote work, and Swift-Net.ca's business class service is the ideal choice to keep you connected and productive. Discover how Swift-Net.ca's internet service can enhance your work-from-home experience and seamlessly integrate with popular productivity software, VPN connections, video conferencing, corporate VOIP, and Wi-Fi calling."
        img={img}
        data={data}
        paragraph1="Swift-Net.ca's business class service is the ultimate solution for professionals working from home. With seamless integration with top productivity software, secure VPN connections, high-quality video conferencing, and support for corporate VOIP and Wi-Fi calling, you can focus on your work and leave the connectivity concerns to us."
        paragraph2="Experience the Swift-Net.ca difference and elevate your work-from-home experience today."
        img2={user}
        imgUrl={style.businessBanner}
      />
    </>
  );
};

export default page;
