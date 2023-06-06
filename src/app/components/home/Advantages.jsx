import React from "react";
import img1 from "../../../assets/Rectangle-19.webp";
import img2 from "../../../assets/Rectangle-20.webp";
import img3 from "../../../assets/Rectangle-12.webp";
import img4 from "../../../assets/Rectangle-14.webp";
import img5 from "../../../assets/Rectangle-13.webp";
import img6 from "../../../assets/Rectangle-15.webp";
import styles from "@/app/styles/styles";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

const Advantages = () => {
  const advantages = [
    {
      id: 1,
      img: img1,
      heading: "Business Class Service: Ideal Solution for Working from Home",
      description:
        "In today's rapidly evolving work landscape, many professionals are embracing the work-from-home model. A reliable, high-speed internet connection is crucial for remote work, and Swift-Net.ca's business class service is the ideal choice to keep you connected and productive. Discover how Swift-Net.ca's internet service can enhance your work-from-home experience and seamlessly integrate with popular productivity software, VPN connections, video conferencing, corporate VOIP, and Wi-Fi calling.",
        link: "/business-class"
      },
    {
      id: 2,
      img: img2,
      heading: "Empowering Online Learning for a Brighter Future",
      description:"In today's digital age, online learning has become an essential aspect of education for students of all ages. Swift-Net.ca is committed to providing a reliable, high-speed internet connection that supports the most popular online learning platforms and software in Canada, ensuring a seamless and productive educational experience for your children. Discover how Swift-Net.ca's internet service integrates with leading online learning tools such as Google Classroom, Zoom, Microsoft Teams, Moodle, Blackboard, Canvas, D2L Brightspace, Edmodo, Schoology, and Kahoot!.",
      link: "/online-learning"
    },
    {
      id: 3,
      img: img3,
      heading: "Ideal Internet Solution for Non-Tech-Savvy",
      description:
        "At Swift-Net.ca, we understand that not everyone is tech-savvy, and older or retired folks may require additional support when it comes to their internet service. That's why we've tailored our services to be user-friendly, offering local technicians, professional phone support, and easy-to-use Wi-Fi.",
        link: "/non-tech-savvy"
      },
    {
      id: 2,
      img: img4,
      heading: "Enjoy Live Sports Broadcasts",
      description:
        "Swift-Net.ca is your go-to solution for streaming your favorite Canadian sports. With our high-speed, reliable internet service, you can watch popular sports from Alberta, Saskatchewan, and across Canada without interruptions, including the most popular sports, teams, broadcasters, and streaming services in Alberta and Saskatchewan.",
        link: "/live-sport-broadcast"
      },
    {
      id: 2,
      img: img5,
      heading: "Stream Videos and TV Uninterrupted",
      description:
        "For those who love streaming their favorite TV, movies, and video content, Swift-Net.ca's internet service is the perfect solution. Our high-speed, unlimited data service is designed to provide an unparalleled streaming experience. In this section, we'll explain why Swift-Net.ca is the ideal choice for streaming enthusiasts, ensuring you can enjoy your favorite movies and TV shows without any hassle.",
        link: "/stream-uninterrupted"
      },
    {
      id: 2,
      img: img6,
      heading: "The Ultimate Online Gaming Experience",
      description:
        "Online gaming has become an integral part of many Canadian lives, and having a reliable, high-speed internet connection is essential for an enjoyable gaming experience. Swift-Net.ca is the perfect choice for avid gamers who want to stay connected and play their favorite games with their friends and family, such as PUBG: Battlegrounds, Counter-Strike: Global Offensive, Lost Ark, Dota 2, Elden Ring, New World, Cyberpunk 2077, Goose Goose Duck, Apex Legends, and Hogwarts Legacy. Here's why Swift-Net.ca is the ideal ISP for online gaming enthusiasts.",
    
        link: "/gaming-experience"  },
  ];
  return (
    <div className={`${styles.width} md:flex flex-wrap gap-5 pb-10 md:pb-20`}>
      {advantages.map((advantage) => (
        <div key={advantage.id} className="basis-[49%] mb-7 md:mb-5">
          <Image src={advantage.img} alt="" className="rounded-md w-full" loading="lazy"/>
          <h4 className="font-semibold text-xl md:text-2xl mt-3"> 
            {advantage.heading}
          </h4>
          <p className={`pt-2 md:pt-1 pb-4 md:pb-5 text-[#4B5563] ${styles.paragraph}`}>
            {advantage.description}
          </p>

          <Link
            href={`${advantage.link}`}
            className="flex items-center gap-1 text-primary text-sm md:text-base"
          >
            Learn More <BsArrowRightShort className="mt-1.5"/>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Advantages;
