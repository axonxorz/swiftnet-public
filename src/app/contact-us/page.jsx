import React from "react";
import styles from "../styles/styles";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import Link from "next/link";

const page = () => {
  return (
    <div
      className={`${styles.width} md:flex justify-between items-center gap-30 pb-3 md:pt-24 md:pb-14`}
    >
      <div className="bg-primary px-5 py-8 basis-[32%] text-white h-auto md:h-[75vh] flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2">
            <HiOutlineMail className="text-xl mt-[3px]" />
            <div className="text-sm md:text-base">
              <h6 className="font-bold">Mail us</h6>
              <span className="font-medium">
                Our friendly team is here to help
              </span>
              <h6 className="font-bold mt-2">hi@swift-net.ca</h6>
            </div>
          </div>

          <div className="flex gap-2">
            <BsTelephone className="text-xl mt-[3px]" />
            <div className="text-sm md:text-base">
              <h6 className="font-bold">Customer Service</h6>
              <span className="font-medium">Mon - Fri from 8am to 5pm</span>
              <h6 className="font-bold mt-2">(219) 555-0114</h6>
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-center text-lg md:text-xl mt-8 md:mt-0">
          <Link href="/">
            {" "}
            <BsFacebook />
          </Link>
          <Link href="/">
            {" "}
            <AiOutlineTwitter />
          </Link>
          <Link href="/">
            {" "}
            <AiFillLinkedin />
          </Link>
          <Link href="/">
            {" "}
            <AiOutlineInstagram />
          </Link>
        </div>
      </div>

      <div className="basis-3/5 mt-6 md:mt-0">
        <div className="md:w-[90%]">
          <div>
            <h2 className={`${styles.heading}`}>Contact Us</h2>
            <p className={`${styles.paragraph} text-[#6B7280]`}>
              Any questions? We’re happy to help with it
            </p>
          </div>
          <form action="">
            <div className="flex flex-col gap-3 mt-4 md:mt-6 mb-6 md:mb-10">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="font-medium text-[#6B7280] text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="e.g kevinreggea@gmail.com"
                  className="text-[#9CA3AF] text-sm md:text-base bg-transparent border-[1px] border-solid border-[#D1D5DB] p-2 pl-4 rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="font-medium text-[#6B7280] text-sm"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="e.g 085293825822"
                  className="text-[#9CA3AF] text-sm md:text-base pl-4  bg-transparent border-[1px] border-solid border-[#D1D5DB] p-2 rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="font-medium text-[#6B7280] text-sm"
                >
                  Description
                </label>
                <textarea
                  name=""
                  id=""
                  cols=""
                  rows="5"
                  placeholder="e.g Hi, i want to subscribe swift-net.ca plan"
                  className="text-[#9CA3AF] text-sm md:text-base pl-4 bg-transparent border-[1px] border-solid border-[#D1D5DB] p-2 rounded-lg"
                ></textarea>
              </div>
            </div>
            <button className="bg-primary font-medium text-base md:text-lg py-2 w-full text-white rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
