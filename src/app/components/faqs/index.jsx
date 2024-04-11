"use client";
import React, { useState } from "react";
import Card from "./answers";
import styles from "@/app/styles/styles";
import Top from "@/app/components/faqs/Top";

const faqs = [
  {
     title:
      "No Wi-Fi Connection: Customers are unable to detect a Wi-Fi network using their devices.",
    answer:
      "Ensure the WiFi network is enabled and that the WPS button has not been pressed. \n\n If the WPS button has been pressed, power cycle your router by unplugging it for 10 seconds, and plug it back in. When your router reboots, you should be able to reconnect to your WiFi signal. \n\n Check your router\’s manual to verify the lights and their meaning to ensure it is operating as intended. \n\n If you have one of our routers, simply let us know and we can verify the password and your connection to the router! As a part of the Whole Home Wi-Fi, we can provide effective support with every aspect of your connection.",
  },
  {
     title:
      "Weak Signal Strength: Customers experience poor signal strength or inconsistent Wi-Fi coverage in certain areas of their home or office.",
    answer:
      "Check router placement and signal strength to the affected device(s). \n\n  Move the router closer to affected device(s). Obstacles such as walls, cabling, furniture, and other wireless devices can affect the signal of your router and its ability to communicate with your devices wirelessly. \n\n   If needed, utilize a WiFi range extender, or contact our support to inquire about our Whole Home Wifi Solutions. ",
  },
  {
    title:
      "Slow Wi-Fi Speeds: Customers notice significantly slower download and upload speeds when connected to Wi-Fi compared to a wired connection.",
    answer:
      "Many factors can affect the speed results over a wireless connection. Verify there is no other devices using the internet in the background. Try powering off all other devices connected to the network, and run another speed test using speedtest.net or fast.com. \n\n       If your speeds are poor on one wireless device, but good on another with the same signal strength, the issue may be with the device itself. Try power cycling the affected device, or contact the manufacturer. \n\n       Verify your speeds at the source by doing a speed test while bypassing your router. To learn more about this, see our self-help videos on YouTube! https://www.youtube.com/watch?v=tJaeyxIHrpA \n\n       https://www.youtube.com/watch?v=mdKGut7o1bQ&t=21s \n\n       If you’d like Swift-Net to commit to verifying every aspect of your internet including the wireless quality, check out our Whole Home WiFi Solutions!",
  },
  {
    title:
      "Intermittent Connectivity: Customers experience frequent disconnections or interruptions in their Wi-Fi connection.",
    answer:
      'Many factors can cause intermittent connectivity. If you hit your allotted bandwidth (speed limit) you may experience what feels like an intermittent connection. \n\n Check the frequency your router is operating on for congestion. If there are other wireless devices on the same channel as your wireless signal, it may cause interference. ',
  },
  {
    title:
      "Cannot Connect to the WiFi Signal: Customer can see the network available on their device but cannot connect to it.",
    answer: 
      "'Authentication Error': This error suggests that the credentials for your network are incorrect. Verify the WPA/WPA2 key (Wi-Fi password) is correct. These are case sensitive. \n\n If you’re continually having issues connecting to your Wi-Fi network, you can try factory resetting your router back to its default settings. \n\n If you have one of our routers, simply let us know and we can verify the password and your connection to the router! As a part of the Whole Home Wi-Fi, we can provide effective support with every aspect of your connection."
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
