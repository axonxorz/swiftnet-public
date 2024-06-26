"use client";
import React, { useState } from "react";
import styles from "@/app/styles/styles";
import FAQHeader from "./header";
import FAQAnswers from "./answers";
import FAQQuickLinks from "./quick_links";

const faqs = [
  {
    title:
      "How do I log into “My Swift-Net”?",
    answer:
      "Go to swift-net.ca and Select “My Swift-Net” on the top right portion of the website. \n\n  After selecting the “My Swift-Net” option on our website, enter your “Account ID” and your “Plan ID”. These numbers can be found on your monthly invoices which are emailed to you.",
  },
  {
    title:
      "Where can I see my bill?",
    answer:
      "You can login to “My Swift-Net” from our website. To login, you will need your account ID and your plan ID. You will be able to view your balances, invoices and more.",
  },
  {
    title:
      "How do I pay my bill?",
    answer:
      "Swift-Net offers automatic payment options. We accept either Visa, MasterCard or Pre-Authorized debit. If you don’t have a payment option set up on your account, you can make a payment online by logging into your “My Swift-Net” account using your account ID and plan ID.",
  },
  {
    title:
      "How can I make changes to my plan?",
    answer:
      "You can reach out to one of our helpful customer service representatives! We’re available by phone, email, text or Facebook. There are many ways to reach out and let us know about the changes you’re requesting.",
  },
  {
    title:
      "How can I change or update my billing information?",
    answer:
      "You can log into your “My Swift-Net” account through our website, or call to update your billing information. If you’re updating your expiry date, billing information is encrypted so we will need to receive your card number as well as the new expiry date.",
  },
  {
    title:
      "What are my payment options?",
    answer:
      "Currently we have automatic payment options available in the form of Visa, MasterCard or Pre-Authorized debit. \n\n  You can make e-transfers to payments@swift-net.ca and note your account ID \n\n Make a manual payment via our website by logging into your “My Swift-Net” account.",
  },
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

const Main = () => {
  const [collapse, setCollapse] = useState(false);
  const [faqsList, setFaqList] = useState(faqs);
  const [showIndex, setShowIndex] = useState(null);
  const collapseAll = () => {
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

      <FAQHeader />

      <div className=" my-10 flex flex-col justify-center items-center">
        {/*<div className="hidden md:flex items-center justify-between w-[85%] px-3 ">*/}
        {/*  <p className={styles.heading + "font-bold"}>Quick Links</p>*/}
        {/*  <p*/}
        {/*    className={*/}
        {/*      "text-[14px] hover:underline font-bold text-primary cursor-pointer"*/}
        {/*    }*/}
        {/*    onClick={collapseAll}*/}
        {/*  >*/}
        {/*    Collapse All*/}
        {/*  </p>*/}
        {/*</div>*/}

        <div
          className={`space-y-4 flex items-start justify-center gap-10 p-4 md:px-2`}
        >
          {/*<FAQQuickLinks faqs={faqs} handleSelectQuestion={handleSelectQuestion} showIndex={showIndex}></FAQQuickLinks>*/}

          <div className="w-full md:w-[55%] ">
            {faqsList.map((item, index) => {
              return <FAQAnswers collapse={collapse} question={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
