"use client";
import React, { useState } from "react";
import styles from "../../styles/styles";

const VideoPlayer = ({ selectOption }) => {
  if (selectOption === 1) {
    return (
      <iframe
        dataux="Embed"
        allowfullscreen=""
        type="text/html"
        frameborder="0"
        src="//player.vimeo.com/video/797417180?h=9365ef0166&amp;autoplay=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0"
        dataaid="VIDEO_VIDEO_RENDERED0"
        className="w-full h-full"
      ></iframe>
    );
  } else {
    return (
      <iframe
        cl
        dataux="Embed"
        allowFullScreen=""
        type="text/html"
        src="//player.vimeo.com/video/797438737?h=532f37280a&amp;autoplay=0&amp;title=0&amp;portrait=0&amp;byline=0&amp;badge=0"
        dataaid="VIDEO_VIDEO_RENDERED1"
        className="w-full h-full"
      ></iframe>
    );
  }
};

const IntroducingGigaSpire = () => {
  const [selectOption, setSelectOption] = useState(1);

  const handleOptionClick = (option) => {
    setSelectOption(option);
  };

  const renderOption = (optionNumber, title, description) => {
    const isSelected = selectOption === optionNumber;

    return (
      <div
        className="flex items-center  my-4 justify-start cursor-pointer"
        onClick={() => handleOptionClick(optionNumber)}
      >
        <div className="w-7">
          <div
            className={`${isSelected ? "bg-primary " : ""} h-[78px] w-[8px]`}
          ></div>
        </div>
        <div className="flex flex-col items-start justify-center gap-4">
          <p
            className={`${
              isSelected ? "text-black" : "text-[#9CA3AF]"
            } text-20px`}
          >
            {title}
          </p>
          <p className={`${isSelected ? "text-[#4B5563]" : "text-[#9CA3AF]"} `}>
            {description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full flex items-center justify-center p-4 ">
      <div className="flex flex-col md:flex-row w-full md:w-[70%] items-center justify-center gap-4">
        <div className="w-[95%] md:w-1/2 space-y-6 md:space-y-10">
          <p className={styles.heading}>
            Introducing <br />
            <span className="text-primary">GigaSpire BLAST u4</span>
          </p>

          <div className="space-y-8">
            {renderOption(
              1,
              "Managed Router",
              "Simple, easy to control and worry-free WiFi"
            )}
            {renderOption(
              2,
              "Command IQ",
              "Take control of your home network. View and manage connectivity of all your devices from an easy-to-use App"
            )}
          </div>
        </div>

        <div className="w-full md:w-[609px] h-[400px]  ">
          <VideoPlayer selectOption={selectOption} />
        </div>
      </div>
    </div>
  );
};

export default IntroducingGigaSpire;
