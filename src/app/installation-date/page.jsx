"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/styles";
import { useRouter, useSearchParams } from "next/navigation";
import Plans, { plansList } from "../components/installation-date/plans";
import DatePickerCmp from "../components/installation-date/date-pick";
import { postData } from "@/tools";
import { useSessionStore } from "@/store";
import jwt from "jsonwebtoken";
import Link from "next/link";
import Addons, { addons } from "@components/installation-date/addons";
import "@/app/styles/custom.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { postData } from "@/tools";
import { DateTime } from "luxon";
import { minInstallationDate, nextBusinessDay } from "@/lib/installation-date";

const page = () => {
  const [selectedPlan, setSelectedPlan] = useState(plansList[2]);
  const [selectedDate, setSelectedDate] = useState("");
  const [Loading, setLoading] = useState(false);
  const ipAddress = useSessionStore((state) => state.ipAddress);

  const searchParams = useSearchParams();
  const route = useRouter();
  const [display, setDisplay] = useState(false);
  const [isExpiredToken, setIsExpiredToken] = useState(false);
  const [selectedAddon, setSelectedAddon] = useState(addons[0]);

  useEffect(() => {
    setDisplay(true);
    return;
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
          console.log("token invalid");
          setIsExpiredToken(true);
          // setDisplay(false);
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

    console.log({
      date: selectedDate.toString(),

      plan: selectedPlan,
      ipAddress,
      token: searchParams.get("token"),
    });

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
    }
    setLoading(false);
  };

    return (
      <LocalizationProvider dateAdapter={AdapterLuxon}>
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

              <DatePickerCmp
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />

              <Plans
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />
              <Addons
                selectedAddon={selectedAddon}
                setSelectedAddon={setSelectedAddon}
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
        </LocalizationProvider>
      );
    } else {
      return (
        <div className="w-full h-screen flex flex-col items-center justify-center space-y-6">
          <div className="px-10 text-center space-y-4">
            <p className="text-[30px] font-bold text-red-500">
              token has been expired !
            </p>
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
