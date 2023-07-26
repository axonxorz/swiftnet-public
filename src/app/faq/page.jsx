import React from "react";
import styles from "../styles/styles";
import Card from "@components/faqs/answers/index";

export const metadata = {
  title:
    "Work from home with AB/SK Local Wi-Fi Internet Provider [SIGN UP] for Swift-Net.ca",
  description:
    "Get connected with Swift-Net.ca, the leading home Wi-Fi internet service provider in Alberta & Saskatchewan, providing high-speed wireless internet service in Lloydminster, Cold Lake, North Battleford, and more rural communities. Sign up today!",
};

const page = () => {
  const faqs = [
    {
      title: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    },
    {
      title: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    },
    {
      title: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    },
    {
      title: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    },
    {
      title: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    },
    {
      title: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
      answer:
        "Jorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    },
  ];
  return (
    <>
      <div className="h-[90px] "></div>
      <div className="bg-primary  flex flex-col space-y-4 text-white items-center justify-center min-h-[312px]  mb-5">
        <p className="text-sm">FAQ</p>

        <p className="text-[38px] text-center md:text-[48px] font-semibold">
          Frequently Asked Questions
        </p>

        <p className="className=" text-sm>
          We cover what you thinking about
        </p>
      </div>

      <div className="h-[50px] "></div>

      <div className={`${styles.width} space-y-4 my-10`}>
        {faqs.map((item, index) => {
          return <Card question={item} key={index} />;
        })}
      </div>
      <div className="h-[50px] "></div>
    </>
  );
};

export default page;
