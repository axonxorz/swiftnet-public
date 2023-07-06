"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/styles";
import { useRouter, useSearchParams } from "next/navigation";
import Plans, { planesList } from "../components/installation-date/plans";
import DatePicker from "../components/installation-date/date-pick";
import AddOnes, { addOne } from "../components/installation-date/add-ones";

const page = () => {
  const [selectedPlan, setSelectedPlan] = useState(planesList[2]);
  const [selectedAddOne, setSelectedAddOne] = useState(addOne[0]);
  const [selectedDate, setSelectedDate] = useState("");

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

  const HandleSubmit = () => {
    console.log({
      selectedDate,
      selectedPlan,
      selectedAddOne,
      email: searchParams.get("email"),
      address: searchParams.get("address"),
      phone: searchParams.get("phone"),
    });
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
              className="py-3 bg-primary rounded-lg text-white w-full"
            >
              Submit
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
