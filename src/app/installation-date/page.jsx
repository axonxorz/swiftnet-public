"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/styles";
import { useRouter, useSearchParams } from "next/navigation";
import Plans, { planesList } from "../components/installation-date/plans";
import DatePicker from "../components/installation-date/date-pick";
import AddOnes, { addOne } from "../components/installation-date/add-ones";
import { postData } from "@/tools";
import { useStore } from "@/store";
import jwt from "jsonwebtoken";
import Link from "next/link";
import "@/app/styles/custom.css";

const page = () => {
  const [selectedPlan, setSelectedPlan] = useState(planesList[2]);
  const [selectedAddOne, setSelectedAddOne] = useState(addOne[0]);
  const [selectedDate, setSelectedDate] = useState("");
  const [Loading, setLoading] = useState(false);
  const ipAddress = useStore((state) => state.ipAddress);

  const searchParams = useSearchParams();
  const route = useRouter();
  const [display, setDisplay] = useState(false);
  const [isExpiredToken, setIsExpiredToken] = useState(false);
  useEffect(() => {
    if (searchParams.get("token")) {
      const token = searchParams.get("token");

      try {
        const decodedToken = jwt.decode(token);

        if (
          decodedToken &&
          decodedToken.exp &&
          decodedToken.exp > Date.now() / 1000
        ) {
          // Token is valid and not expired
          setDisplay(true);
        } else {
          // Token is expired
          setIsExpiredToken(true);
          setDisplay(false);
        }
      } catch (error) {
        console.error("Failed to decode token:", error);
        setIsExpiredToken(true);
        setDisplay(false);
      }
    } else {
      route.push("/");
    }
  }, [searchParams]);

  const HandleSubmit = async () => {
    setLoading(true);
    const browserType = navigator.userAgent;

    const postDataResponse = await postData("/api/plan", {
      date: selectedDate,
      plan: selectedPlan,
      selectedAddOne,
      browserType,
      ipAddress,
      token: searchParams.get("token"),
    });
    const { status } = postDataResponse;

    if (status === 1) {
      route.push(`/thank-you`);
    } else {
      // toast.error(message);
    }
    setLoading(false);
  };

  !display && <div></div>;

  if (display) {
    if (!isExpiredToken) {
      return (
        <div className="w-full min-h-screen flex flex-col items-center ">
          <div className="h-[100px] "></div>

          <div className="w-full px-4 md:w-[60%] py-4 space-y-4 relative">
            {/* title */}
            <div className="w-full text-start space-y-4">
              <p className={`${styles.heading} font-bold text-[36px]`}>
                Fantastic News!
              </p>

              <p className={`${styles.paragraph} text-[#4B5563]`}>
                Service is available at your location! Please select your
                preferred installation date and plan below.
              </p>
            </div>

            <DatePicker
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />

            <Plans
              selectedPlan={selectedPlan}
              setSelectedPlan={setSelectedPlan}
            />

            <AddOnes
              selectedAddOne={selectedAddOne}
              setSelectedAddOne={setSelectedAddOne}
            />

            <div className="text-center py-4">
              <button
                onClick={HandleSubmit}
                className={`py-3 ${
                  Loading ? "bg-primary/70 " : "bg-primary "
                } rounded-lg text-white w-full hover:bg-primary/90`}
              >
                {!Loading ? "Confirm Choices" : "please wait ..."}
              </button>

              <p className={styles.paragraph + "text-center mt-1"}>
                You will not be charged until your service is installed and
                verified.
              </p>
            </div>
          </div>

          <div className="h-[100px] "></div>
        </div>
      );
    } else {
      return (
        <div className="w-full h-screen flex flex-col items-center justify-center space-y-6">
          <div className="px-10 text-center space-y-4">
            <p className="text-[30px] font-bold text-red-500">
              token has been expired !
            </p>
            {/* <p className={styles.paragraph}>
              Your token has been expired, please sign up again
            </p> */}
          </div>

          <div className="px-10 text-center space-y-4">
            <Link href={"/"}>
              <div className="w-[189px] h-[56px] gap-1 flex items-center justify-center bg-primary rounded-lg ">
                <p className="text-[16px] text-white font-bold">
                  Back to Homepage
                </p>
              </div>
            </Link>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="w-full min-h-screen flex flex-col items-center ">
        <div className="h-[100px] "></div>
      </div>
    );
  }
};

export default page;
