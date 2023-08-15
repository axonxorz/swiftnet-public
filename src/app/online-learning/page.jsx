import React from "react";
import style from "../styles/styles.module.css";
import img from "../../assets/landings/Rectangle 24.webp";
import CommonLayers from "../components/CommonLayers";
import "@/app/styles/custom.css";

export const metadata = {
  title:
    "Online learning with AB/SK Local Wi-Fi Internet Provider [SIGN UP] by Swift-Net.ca",
  description:
    "Swift-Net.ca ensures a seamless online educational experience with reliable, high-speed internet tailored for top Canadian learning platforms like Google Classroom, Zoom, Microsoft Teams, and more. Trust in Swift-Net.ca for uninterrupted online learning.",
};

const page = () => {
  const data = [
    {
      id: 1,
      heading: "The Best Choice for Online Learning Platforms",
      description:
        "Swift-Net.ca's high-speed internet service is designed to work flawlessly with leading online learning platforms such as Google Classroom, Moodle, Blackboard, Canvas, D2L Brightspace, Edmodo, and Schoology. Our reliable connection allows students to access their courses, submit assignments, and collaborate with their peers without any connectivity issues.",
    },
    {
      id: 2,
      heading: "High-Quality Video Conferencing for Virtual Classrooms",
      description:
        "Virtual classrooms have become an integral part of online education, and platforms like Zoom and Microsoft Teams are increasingly being used for this purpose. Swift-Net.ca's high-speed internet ensures smooth, uninterrupted video calls, enabling students to actively participate in their virtual classes and communicate effectively with their teachers and classmates.",
    },
    {
      id: 3,
      heading: "Interactive Learning with Kahoot! and Other Educational Tools",
      description:
        "Interactive learning tools like Kahoot! have gained popularity for their engaging and fun approach to education. Swift-Net.ca's reliable internet connection supports these interactive learning experiences, allowing students to enjoy quizzes, challenges, and games without any delays or interruptions.",
    },
    {
      id: 4,
      heading: "Enhanced Communication and Collaboration",
      description:
        "Effective communication and collaboration between students, teachers, and parents are vital for a successful online learning experience. Swift-Net.ca's dependable internet service ensures seamless communication through platforms like Microsoft Teams, Google Classroom, and Edmodo, fostering a supportive learning environment.",
    },
  ];
  return (
    <>
      <CommonLayers
        heading="Empowering Online Learning for a Brighter Future"
        description="In today's digital age, online learning has become an essential aspect of education for students of all ages. Swift-Net.ca is committed to providing a reliable, high-speed internet connection that supports the most popular online learning platforms and software in Canada, ensuring a seamless and productive educational experience for your children. Discover how Swift-Net.ca's internet service integrates with leading online learning tools such as Google Classroom, Zoom, Microsoft Teams, Moodle, Blackboard, Canvas, D2L Brightspace, Edmodo, Schoology, and Kahoot!."
        img={img}
        data={data}
        paragraph1="Swift-Net.ca is dedicated to providing a reliable, high-speed internet connection that supports the most popular online learning platforms and software in Canada, including Google Classroom, Zoom, Microsoft Teams, Moodle, Blackboard, Canvas, D2L Brightspace, Edmodo, Schoology, and Kahoot!. With Swift-Net.ca, parents can rest assured that their children will have access to a seamless and productive online educational experience. "
        paragraph2="Swift-Net.ca is dedicated to providing a reliable, high-speed internet connection that supports the most popular online learning platforms and software in Canada, including Google Classroom, Zoom, Microsoft Teams, Moodle, Blackboard, Canvas, D2L Brightspace, Edmodo, Schoology, and Kahoot!. With Swift-Net.ca, parents can rest assured that their children will have access to a seamless and productive online educational experience. "
        img2={img}
        imgUrl={style.learningBanner}
      />
    </>
  );
};

export default page;
