import React from "react";
import style from "../styles/styles.module.css";
import img from "../../assets/Rectangle 23(1).webp";
import img2 from "../../assets/IMG_1159-1_1_.webp";
import CommonLayers from "../components/CommonLayers";

export const metadata = {
  title:
    "Online learning with AB/SK Local Wi-Fi Internet Provider [SIGN UP] for Swift-Net.ca",
  description:
    "Get connected with Swift-Net.ca, the leading home Wi-Fi internet service provider in Alberta & Saskatchewan, providing high-speed wireless internet service in Lloydminster, Cold Lake, North Battleford, and more rural communities. Sign up today!",
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
        img2={img2}
        imgUrl={style.learningBanner}
      />
    </>
  );
};

export default page;
