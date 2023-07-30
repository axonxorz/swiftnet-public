"use client";
import React, { useState } from "react";
import Card from "./answers";
import styles from "@/app/styles/styles";
import Top from "@/app/components/faqs/Top";
import Image from "next/image";
import img1 from "@/assets/faq/1.webp";
import img2 from "@/assets/faq/2.webp";
import img3 from "@/assets/faq/3.webp";

const faqs = [
  {
    image: <Image src={img1} />,
    title:
      "Experiencing an MCSnet internet outage in Lloydminster, Cold Lake, Bonnyville, Lac La Biche, Macklin, or Athabasca?",
    answer:
      "If you're currently facing frequent connectivity issues with MCSnet, it could be due to unexpected network outages. During such times, it's crucial to have a responsive and local internet service provider who understands the unique challenges of your local community.\n\nSwift-Net.ca, a leading wireless internet service provider in Alberta and Saskatchewan, could be your solution. Unlike Edmonton-based WISPs, Swift-Net.ca is a local company with offices in Lloydminster, and our support team lives in Lloydminster, Cold Lake, Bonnyville, Lac La Biche, Macklin, and Athabasca. This local presence makes Swift-Net.ca an ideal alternative to MCSnet because we understand our communities and we can quickly respond to issues. We aren’t from the city and we uniquely understand the local weather and environmental conditions of rural Alberta and Saskatchewan.\n\nWe prioritize installations during competitor outages, ensuring you get back online quickly. Our service is specifically designed for the unique weather and environmental conditions of Alberta and Saskatchewan, ensuring reliable connectivity in Lloydminster, Cold Lake, Bonnyville, Lac La Biche, Macklin, and Athabasca.\n\nFrequent weather events can cause disruptions to service, and MCSnet may not be as responsive or have the local knowledge to address these issues effectively. Swift-Net.ca, on the other hand, is deeply invested in our local communities. We continually invest in our network to ensure it's robust and capable of handling the local conditions.\n\nChoose Swift-Net.ca for a responsive, local service that's committed to keeping you connected, no matter the weather. Experience the difference of a service that's built by locals, for locals.",
  },
  {
    image: <Image src={img2} />,
    title:
      "Is your Access Communications Cooperative internet service offline in North Battleford, Kindersley, or Meadow Lake?",
    answer:
      "In the event of an Access Communications Cooperative outage in North Battleford, Kindersley, or Meadow Lake, don't let your online activities come to a halt. Outages can be frustrating, especially when they disrupt your daily routine or work.\n\nAs a leading wireless internet service provider in Alberta and Saskatchewan, Swift-Net.ca is an ideal alternative to Access Communications Cooperative. We're not just an internet provider; we're also part of your community. With our local presence in Lloydminster and team members living in North Battleford and Cold Lake, we understand the unique challenges and weather conditions of your area.\n\nWe can provide a swift installation of our robust service, designed to withstand local conditions and keep you connected. Our service is specifically engineered for the unique conditions of Alberta and Saskatchewan, ensuring you stay connected.\n\nIn contrast to distant telcos and cable companies, Swift-Net.ca is deeply invested in our local communities, including North Battleford, Kindersley, and Meadow Lake. We continually invest in our network to ensure it's robust and capable of handling the local conditions.\n\nDuring an outage from your current provider, we prioritize installations, ensuring you get back online quickly. Our local support team is always ready to assist you, providing timely and effective solutions to keep your online activities running smoothly.\n\nChoose Swift-Net.ca for a responsive, local service that's committed to keeping you connected, no matter the weather. Experience the difference of a service that's built by locals, for locals.\n\n**High Priority Internet Install:** Don't wait for your current provider to restore service. Switch to Swift-Net.ca today for a high priority internet installation. We'll get you back online quickly with our robust, reliable service.",
  },
  {
    image: <Image src={img3} />,
    title:
      "Sasktel internet outage in Lloydminster, North Battleford, or Meadow Lake?",
    answer:
      "During a Sasktel outage in Lloydminster, North Battleford, or Meadow Lake, you need a reliable alternative. Outages can disrupt your daily routine, work, or studies, and waiting for service restoration can be frustrating.\n\nSwift-Net.ca, a leading wireless internet service provider in Alberta and Saskatchewan, is here to help. Unlike traditional telcos, Swift-Net.ca is a local company with a strong presence in your community. Our offices are located in Lloydminster, and our team members live in North Battleford and Cold Lake. This local presence allows us to understand the unique challenges and weather conditions of your area and respond quickly to issues.\n\nOur service is designed to provide stable and uninterrupted service, even in the unique weather conditions of northern Alberta and Saskatchewan. We can prioritize your installation, getting you back online quickly. Our local support team is always ready to assist you, providing timely and effective solutions to keep your online activities running smoothly.\n\nIn contrast to distant telcos, Swift-Net.ca is deeply invested in our local communities, including Lloydminster, North Battleford, and Meadow Lake. We continually invest in our network to ensure it's robust and capable of handling the local conditions.\n\nChoose Swift-Net.ca for a responsive, local service that's committed to keeping you connected, no matter the weather. Experience the difference of a service that's built by locals, for locals.\n\n**High Priority Internet Install:** Don't wait for your current provider to restore service. Switch to Swift-Net.ca today for a high priority internet installation. We'll get you back online quickly with our robust, reliable service.",
  },
  {
    title:
      "Experiencing frequent issues with Starlink in Alberta or Saskatchewan?",
    answer:
      'If you\'re a Starlink customer in Alberta or Saskatchewan, you might frequently encounter some of these common error messages:\n\n1. **"Non-Starlink wifi router"**: This error message appears when the Starlink app shows a disconnected status. Users report this error even when they are only using the Starlink wifi router, leading to confusion and frustration.\n\n2. **"Starlink Disconnected"**: This message means the app cannot reach the dish. Users are advised to ensure the plug going into the dish is pushed all the way in. This can be a frequent issue, disrupting your internet connection when you need it the most.\n\n3. **"Starlink is unable to reach the dish"**: Similar to the above, this message indicates that the Starlink app is unable to communicate with the dish. Users are advised to ensure that the Starlink device is properly plugged in. This can be a recurring problem, causing unnecessary stress and inconvenience.\n\n4. **"Network Issue"**: This error message is often associated with a bad cable between the Starlink router and dish. Users report frequent outages due to this issue, leading to a lack of reliable internet service.\n\n5. **"Something went wrong"**: This error message appears when users are trying to place an order. It seems to be associated with issues related to the postal code not matching the shipping address, causing delays and complications with your service.\n\n6. **"Location error"**: This error message appears when setting up the Starlink kit. It indicates that the Starlink device is in the wrong location, leading to setup difficulties and potential delays in getting your internet service up and running.\n\n7. **"dns_probe_started errors"**: This error message appears when there are issues with the DNS probe. Users report this error after using Starlink for a few months, indicating a lack of long-term reliability.\n\n8. **"What is \'Network issue\'?"**: This error message appears when there are issues with the network setup. Users report this error when using additional devices like a TP-Link Powerline or TP-Link WiFi interface with their Starlink router, leading to complex and frustrating network problems.\n\nMoreover, Starlink can frequently experience disruptions during heavy rain or snow. This is due to a phenomenon known as "rain fade," which can affect all satellite communications. Rain or snow can absorb or scatter the radio waves that satellites use to communicate, leading to a weaker signal or a complete loss of signal.\n\nIn contrast, Swift-Net.ca, a local Wireless Internet Service Provider (WISP) in Alberta and Saskatchewan, offers a more reliable and consistent service. We don\'t throttle data after a certain point, and we don\'t charge extra for high data users. Our service is designed to withstand the unique weather and environmental conditions of Alberta and Saskatchewan, ensuring you stay connected even during heavy rain or snow.\n\nOur local support team is always ready to assist you, providing timely and effective solutions to keep your online activities running smoothly. We understand the local conditions and needs of our communities, and we\'re committed to providing stable and reliable internet service to the communities of Lloydminster, Cold Lake, North Battleford, Bonnyville, Meadow Lake, Kindersley, Battleford, Athabasca, Lac La Biche, Unity, Provost, Big Island Lake Cree Nation, Macklin, Blackfoot, Wilkie, Lashburn, Maidstone, Flying Dust First Nations, and Kerrobert, along with the surrounding communities of northern Alberta and Saskatchewan.\n\nDuring a Starlink network outage, we prioritize installations, ensuring you get back online quickly. Choose Swift-Net.ca for a responsive, local service that\'s committed to keeping you connected, no matter the weather. Experience the difference of a service that\'s built by locals, for locals.',
  },
  {
    title:
      "Having trouble with Xplore's satellite internet service every time it rains?",
    answer:
      "Network outages can occur with any provider, including Xplore. Satellite internet services, like the one provided by Xplore, can be particularly susceptible to disruptions. Weather conditions, physical obstructions, and even solar activity can affect the signal quality, leading to slow speeds or complete outages. Moreover, satellite internet often suffers from high latency, which can significantly impact activities like online gaming or video conferencing.\n\nDuring these times, consider Swift-Net.ca as your alternative. As a local Wireless Internet Service Provider (WISP), Swift-Net.ca is uniquely positioned to understand and cater to the specific needs of the communities in Alberta and Saskatchewan. Our service is resilient to the extreme weather conditions of northern Alberta and Saskatchewan, ensuring you have a stable and reliable internet connection. Unlike satellite internet, our fixed wireless connections are designed to provide low-latency connections, making them ideal for a wide range of online activities.\n\nSwift-Net.ca offers faster speeds and lower latency than many satellite internet providers, ensuring a smoother, more enjoyable online experience. We're not just a service provider; we're also users of our own service, which means we're committed to delivering the quality we'd expect ourselves.\n\nIn the event of an outage from your current provider, we can expedite the installation process, getting you back online before Xplore restores their service. Our priority is to minimize your downtime and ensure that you can continue your online activities without interruption.\n\nMoreover, Swift-Net.ca boasts a local support team that's ready to assist you whenever you need help. Our team understands the local conditions and challenges, enabling us to provide you with timely and effective solutions.\n\nChoose Swift-Net.ca for a reliable, low-latency internet service designed for the unique conditions of Alberta and Saskatchewan. Experience the difference of a service that's built by locals, for locals.",
  },
  {
    title:
      "Is Galaxy Broadband not delivering the service you need in your area?",
    answer:
      "Satellite internet services, like the one provided by Galaxy Broadband, are often plagued by disruptions. Weather conditions, physical obstructions, and even solar activity can affect the signal quality, leading to slow speeds or complete outages. Moreover, the high latency inherent in satellite internet, due to the long distances the signals must travel, can significantly impact your online experience.\n\nBut why settle for less when you can have more? Swift-Net.ca is your superior alternative. As a local Wireless Internet Service Provider (WISP), we are deeply rooted in the communities of Alberta and Saskatchewan. Our service is resilient to the extreme weather conditions of northern Alberta and Saskatchewan, ensuring you have a stable and reliable internet connection. Unlike satellite internet, our fixed wireless connections provide low-latency connections, making them ideal for a wide range of online activities.\n\nSwift-Net.ca doesn't just promise faster speeds and lower latency than many satellite internet providers - we deliver. We're not just a service provider; we're also users of our own service, which means we're committed to delivering the quality we'd expect ourselves.\n\nIn the event of an outage from your current provider, we don't just sit around. We spring into action, expediting the installation process to get you back online before Galaxy Broadband even begins to address the issue. Your time is valuable, and we're committed to ensuring that you can continue your online activities without interruption.\n\nOur local support team isn't just ready to assist you - they're eager. Our team understands the local conditions and challenges, enabling us to provide you with timely and effective solutions.\n\nSwift-Net.ca is proud to serve the communities of Lloydminster, Cold Lake, North Battleford, Bonnyville, Meadow Lake, Kindersley, Battleford, Athabasca, Lac La Biche, Unity, Provost, Big Island Lake Cree Nation, Macklin, Blackfoot, Wilkie, Lashburn, Maidstone, Flying Dust First Nations, and Kerrobert, along with the surrounding communities of northern Alberta and Saskatchewan.\n\nChoose Swift-Net.ca for a reliable, low-latency internet service designed for the unique conditions of Alberta and Saskatchewan. Experience the difference of a service that's built by locals, for locals.\n\nHigh Priority Internet Install: Don't wait for your current provider to restore service. Take control of your online experience. Switch to Swift-Net.ca today for a high priority internet installation. We'll get you back online quickly with our robust, reliable service.",
  },
  {
    title: "Is Rogers offline?",
    answer:
      "If you're searching \"Is Rogers offline?\" because you're experiencing an outage, you're not alone. Network outages can disrupt service and leave you without access to the internet, which can be particularly problematic if you rely on your mobile data for work, school, or other important activities.\n\nMoreover, Rogers has data limits on their plans. Once you reach your data limit, you'll be charged standard data overage rates. If you're not on an Infinite plan, you can minimize overage charges by adding a Monthly Data Add-on to your plan before or after you go over your data limit. However, any existing overage charges you have incurred will remain on your account.\n\nIn contrast, Swift-Net.ca, as a local Wireless Internet Service Provider (WISP), offers a more reliable and consistent service. We don't throttle data after a certain point, and we don't charge extra for high data users. Our service is designed to withstand the unique weather and environmental conditions of Alberta and Saskatchewan, ensuring you stay connected. Plus, we offer high priority internet installs in Lloydminster, Cold Lake, North Battleford, Bonnyville, Meadow Lake, Kindersley, Battleford, Athabasca, Lac La Biche, Unity, Provost, Big Island Lake Cree Nation, Macklin, Blackfoot, Wilkie, Lashburn, Maidstone, Flying Dust First Nations, and Kerrobert, along with the surrounding communities of northern Alberta and Saskatchewan.\n\nSwift-Net.ca offers truly unlimited service with no data caps, no throttling, and no overages. We believe in providing a transparent and customer-centric service, with fixed monthly pricing so you know exactly what to expect on your bill – no hidden fees or unexpected charges. We're not just an internet service provider; we're part of your community, committed to providing stable and reliable internet service to the communities of Lloydminster, Cold Lake, North Battleford, Bonnyville, Meadow Lake, and Kindersley, and the surrounding communities of northern Alberta and Saskatchewan.\n\nOur permanent fixed wireless connections are specifically designed to withstand the unique weather conditions of northern Alberta and Saskatchewan, ensuring that our customers enjoy uninterrupted internet access even during power disruptions, extreme weather, or construction in the summer.\n\nDuring a Rogers network outage, we prioritize installations, ensuring you get back online quickly. Our local support team is always ready to assist you, providing timely and effective solutions to keep your online activities running smoothly. Choose Swift-Net.ca for a responsive, local service that's committed to keeping you connected, no matter the weather. Experience the difference of a service that's built by locals, for locals.",
  },
  {
    title: "Bell Mobility down?",
    answer:
      "If Bell Mobility is offline, don't despair. Swift-Net.ca is a reliable alternative. Our service is designed to withstand local weather conditions in Alberta and Saskatchewan, and we can prioritize your installation to get you connected swiftly.",
  },
  {
    title: "Experiencing a Telus Mobility outage?",
    answer:
      "In the event of a Telus Mobility outage, consider Swift-Net.ca. Our service is specifically engineered for the unique conditions of Alberta and Saskatchewan. We can fast-track your installation, ensuring you stay connected.",
  },
  {
    title: "Sasktel network not responding?",
    answer:
      "During a Sasktel outage, you need a reliable alternative. Swift-Net.ca is designed to provide stable and uninterrupted service, even in the unique weather conditions of northern Alberta and Saskatchewan. We can prioritize your installation, getting you back online quickly.",
  },
  {
    title: "Facing connectivity issues with BigWifi?",
    answer:
      "BigWifi outages can disrupt your internet activities. Swift-Net.ca is here to help. We can prioritize your installation, ensuring minimal downtime and a swift return to your online activities. Our service is resilient to local conditions in Alberta and Saskatchewan, ensuring you stay connected.",
  },
];

const Index = () => {
  const [collapse, setCollapse] = useState(false);
  const [faqsList, setFaqList] = useState(faqs);
  const [showIndex, setShowIndex] = useState(null);
  const collapsAll = () => {
    setFaqList(faqs);
    setShowIndex(null);
    setCollapse((state) => !state);
  };

  const handleSelectQuestion = (index) => {
    setShowIndex(index);
    setFaqList([faqs[index]]);
  };
  return (
    <>
      <div className="h-[90px] "></div>

      <Top />

      <div className=" my-10 flex flex-col justify-center items-center">
        <div className="hidden md:flex items-center justify-between w-[85%] px-3 ">
          <p className={styles.heading + "font-bold"}>Quick Links</p>
          <p
            className={
              "text-[14px] hover:underline font-bold text-primary cursor-pointer"
            }
            onClick={collapsAll}
          >
            Collapse All
          </p>
        </div>

        <div
          className={`space-y-4 flex items-start justify-center gap-10 p-4 md:px-2`}
        >
          <div className="w-full hidden md:flex md:flex-col md:w-[25%] text-center  md:mr-6 mt-5">
            {faqs.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handleSelectQuestion(index)}
                  className={`w-full border-b-[1px] py-3 text-start cursor-pointer hover:bg-slate-100/75 px-2 hover:font-bold ${
                    index === showIndex && "font-bold"
                  }`}
                >
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
          <div className="w-full md:w-[55%] ">
            {faqsList.map((item, index) => {
              return <Card collapse={collapse} question={item} key={index} />;
            })}
          </div>
        </div>
      </div>

      <div className="h-[50px] "></div>
    </>
  );
};

export default Index;
