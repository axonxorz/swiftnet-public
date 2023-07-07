"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/styles";
import { useRouter, useSearchParams } from "next/navigation";
import Plans, { planesList } from "../components/installation-date/plans";
import DatePicker from "../components/installation-date/date-pick";
import AddOnes, { addOne } from "../components/installation-date/add-ones";
import { postData } from "@/tools";
import { useStore } from "@/store";

const page = () => {
  const [selectedPlan, setSelectedPlan] = useState(planesList[2]);
  const [selectedAddOne, setSelectedAddOne] = useState(addOne[0]);
  const [selectedDate, setSelectedDate] = useState("");
  const [Loading, setLoading] = useState(false);
  const ipAddress = useStore((state) => state.ipAddress);

  const searchParams = useSearchParams();
  const route = useRouter();
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    if (searchParams.get("email")) {
      setDisplay(true);
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
      email: searchParams.get("email"),
      address: searchParams.get("address"),
      phone: searchParams.get("phone"),
      browserType,
      ipAddress,
      firstName: searchParams.get("firstName"),
      lastName: searchParams.get("lastName"),
      city: searchParams.get("city"),
    });
    const { message, status } = postDataResponse;

    if (status === 1) {
      route.push(`/thank-you`);
    } else {
      toast.error(message);
    }
    setLoading(false);
  };

  !display && <div></div>;

  if (display) {
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
              Service is available at your location. Please fill the data below
              to select your plans and installment date
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
              } rounded-lg text-white w-full`}
            >
              {!Loading ? "Check Availability" : "please wait ..."}
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
      <div className="w-full min-h-screen flex flex-col items-center ">
        <div className="h-[100px] "></div>
      </div>
    );
  }
};

export default page;
