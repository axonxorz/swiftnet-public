"use client";
import React, { useState } from "react";
import styles from "../styles/styles";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import Link from "next/link";
import PhoneInput from "@/app/components/phone-input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "@components/phone-input/style/style.css";
import { useStore } from "@/store";
import { postData } from "@/tools";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import "@/app/styles/custom.css";

const page = () => {
  const [loading, setLoading] = useState(false);
  const ipAddress = useStore((state) => state.ipAddress);
  const route = useRouter();
  const validationSchema = yup.object({
    phoneNumber: yup.string().required("Phone number is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    description: yup.string().required("Email is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const browserType = navigator.userAgent;

    Cookies.set("email", data.email, { expires: 7 });

    Cookies.set("phone", data.phoneNumber, { expires: 7 });

    try {
      const postDataResponse = await postData("/api/contact", {
        ...data,
        ipAddress,
        browserType,
      });
      const { status } = postDataResponse;

      if (status === 1) {
        route.push(`/contact-us/thanks`);
      } else {
        console.log("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.log("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div
      className={`${styles.width} md:flex justify-between items-center gap-30 pb-3 md:pt-24 md:pb-14`}
    >
      <div className="h-[70px] md:hidden"></div>
      <div className="bg-primary  px-5 py-8 basis-[32%] text-white h-auto md:h-[75vh] flex flex-col justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex gap-2">
            <HiOutlineMail className="text-xl mt-[3px]" />
            <div className="text-sm md:text-base">
              <h6 className="font-bold">Email</h6>
              <div className="p-3">
                <span className="font-medium ">
                  Our friendly team is here to help
                </span>

                <p className="font-medium">support@swift-net.ca</p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <BsTelephone className="text-xl mt-[3px]" />
            <div className="text-sm md:text-base">
              <h6 className="font-bold">Customer Service</h6>

              <div className="p-3">
                <h3 className="font-medium">Weekdays from 8 AM to 8 PM</h3>
                <h3 className="font-medium">Weekends from 9 AM to 7 PM</h3>

                <h6 className="font-bold mt-2">+1 (306) 825-7111</h6>
                <h6 className="font-bold mt-2">+1 (866) 667-2375</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 items-center text-lg md:text-xl mt-8 md:mt-0">
          <Link href="https://www.facebook.com/swiftnet.ca">
            {" "}
            <BsFacebook />
          </Link>

          <Link href="https://www.linkedin.com/company/swift-net-ca/">
            {" "}
            <AiFillLinkedin />
          </Link>
          <Link href="https://www.instagram.com/swiftnetinternet/">
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
              Any questions? We’re happy to help!
            </p>
          </div>
          <form id="demo-form" onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("email")}
                  required
                  placeholder="e.g kevinreggea@gmail.com"
                  className="text-[#9CA3AF] text-sm md:text-base bg-transparent border-[1px] border-solid border-[#D1D5DB] p-2 pl-4 rounded-lg"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="font-medium text-[#6B7280] text-sm"
                >
                  Phone
                </label>
                <PhoneInput
                  register={register}
                  enableSearch={true}
                  disableSearchIcon={true}
                  country={"ca"}
                  value={getValues("phoneNumber")}
                  onChange={(phone) => setValue("phoneNumber", phone)}
                  dropdownStyle={{ zIndex: 100 }}
                  error={errors.phoneNumber}
                />
                <input
                  type="phone"
                  placeholder="Phone number"
                  className={"hidden"}
                  {...register("phoneNumber")}
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
                  {...register("description")}
                  cols=""
                  rows="5"
                  placeholder="e.g I want the best internet service in Alberta or Saskatchwan!"
                  className="text-[#9CA3AF] text-sm md:text-base pl-4 bg-transparent border-[1px] border-solid border-[#D1D5DB] p-2 rounded-lg"
                ></textarea>
              </div>
            </div>
            <button
              data-sitekey="your_site_key"
              data-callback="onSubmit"
              className={`${
                loading ? "bg-primary/70 " : "bg-primary "
              } hover:bg-primary/80 font-medium text-base md:text-lg py-2 w-full text-white rounded-lg g-recaptcha`}
            >
              {!loading ? "Check Availability" : "please wait ..."}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
