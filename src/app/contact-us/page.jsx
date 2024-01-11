"use client";
import React, { useState } from "react";
import styles from "../styles/styles";
import { BsTelephone, BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";
import Link from "next/link";
import PhoneInput from "@/app/components/phone-input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "@components/phone-input/style/style.css";
import { useSessionStore } from "@/store";
import { useRouter } from "next/navigation";
import "@/app/styles/custom.css";
import { toast } from "react-hot-toast";
import { backendClient } from "@/lib/backend";

const page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const session = useSessionStore();

  const validationSchema = yup.object({
    name: yup.string().required('Please enter a contact name'),
    phoneNumber: yup.string().required("Please leave us a phone number we can use to contact you"),
    email: yup.string().email("Invalid email").required("Email is required"),
    comments: yup.string().min(20).required("What's on your mind?")
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
    try {
      const postDataResponse = await backendClient.post("/api/contact", {
        ...data,
        session: session
      });
      const { result, message } = postDataResponse.data;

      if(result) {
        router.push(`/contact-us/thanks`);
      } else {
        console.error('Error sending message', message);
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.log('Error sending message', error);
      toast.error("Something went wrong. Please try again later.");
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

                <p className="font-medium"><a href="mailto:support@swift-net.ca">support@swift-net.ca</a></p>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <BsTelephone className="text-xl mt-[3px]" />
            <div className="text-sm md:text-base">
              <h6 className="font-bold">Customer Service</h6>

              <div className="p-3">
                <h3 className="font-medium">Weekdays from 8 AM to 6 PM</h3>
                <h6 className="font-bold mt-2"><a href="tel:+13068257111">+1 (306) 825-7111</a></h6>
                <h6 className="font-bold mt-2"><a href="tel:+18666672375">+1 (866) 667-2375</a></h6>
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
                  Name
                </label>
                <input
                  {...register("name")}
                  required
                  placeholder="e.g John Doe"
                  className="text-sm md:text-base bg-transparent border-[1px] border-solid border-[#D1D5DB] p-2 pl-4 rounded-lg"
                />
              </div>

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
                  placeholder="e.g john.doe@gmail.com"
                  className="text-sm md:text-base bg-transparent border-[1px] border-solid border-[#D1D5DB] p-2 pl-4 rounded-lg"
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
                  error={errors?.phoneNumber?.message}
                />
                <input
                  type="phone"
                  placeholder="Phone number"
                  className={"hidden"}
                  {...register("phoneNumber")}
                />
                {errors?.phoneNumber && (
                  <p className="text-sm text-red-600 ">
                    {errors.phoneNumber.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor=""
                  className="font-medium text-[#6B7280] text-sm"
                >
                  Comments
                </label>
                <textarea
                  name=""
                  id=""
                  {...register("comments")}
                  cols=""
                  rows="5"
                  placeholder="e.g I want the best internet service in Alberta or Saskatchewan!"
                  className="text-sm md:text-base pl-4 bg-transparent border-[1px] border-solid border-[#D1D5DB] p-2 rounded-lg"
                ></textarea>
                {errors?.comments && (
                  <p className="text-sm text-red-600 ">
                    {errors.comments.message}
                  </p>
                )}
              </div>
            </div>
            <button
              data-sitekey="your_site_key"
              data-callback="onSubmit"
              className={`${
                loading ? "bg-primary/70 " : "bg-primary "
              } hover:bg-primary/80 font-medium text-base md:text-lg py-2 w-full text-white rounded-lg g-recaptcha`}
            >
              {!loading ? "Let Us Know !" : "Working ..."}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
