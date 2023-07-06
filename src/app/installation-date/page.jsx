"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/styles";
import { useRouter, useSearchParams } from "next/navigation";
import Plans, { planesList } from "../components/installation-date/plans";

const addOne = [
  {
    id: 1,
    title: "Managed Wi-Fi 6 app with Calix Gigspire Blast u4 router",
    price: 9.95,
  },
  {
    id: 2,
    title: "Managed Wi-Fi 6 app with Calix Gigspire Blast u6 router",
    price: 77.95,
  },
];

const page = () => {
  const [selectedPlan, setSelectedPlan] = useState(planesList[2]);
  const [selectedAddOne, setSelectedAddOne] = useState(addOne[0]);
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

          {/* input */}
          <div className="w-full text-start ">
            <label className={`${styles.paragraph} text-[#4B5563]`}>
              Preferred Install Date
            </label>
            <div class="relative max-w-sm w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                datepicker
                type="date"
                class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>
          </div>

          {/* Preferred Plan */}
          <Plans
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />

          {/* Add On */}
          <div className="mt-8">
            <p className={`${styles.paragraph} text-[#4B5563] mb-1`}>Add On</p>
            <div className="w-full  space-y-4 ">
              {addOne.map((item) => {
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedAddOne(item)}
                    className={`${
                      selectedAddOne.id === item.id
                        ? "border-primary border-[1px] bg-[#F1FAFF] "
                        : "border-gray-400/70 border-[1px] "
                    }w-full cursor-pointer hover:border-primary rounded-lg flex items-center justify-between border-[1px]`}
                  >
                    <div className="flex py-4 gap-3 items-start px-4 justify-start w-3/4">
                      {selectedAddOne.id !== item.id ? (
                        <div className=" h-[20px] w-[20px] border-[1px] border-black rounded-full top-5 right-5"></div>
                      ) : (
                        <div className=" h-[20px] w-[20px]  rounded-full top-5 right-5">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM17.2071 9.70711C17.5976 9.31658 17.5976 8.68342 17.2071 8.29289C16.8166 7.90237 16.1834 7.90237 15.7929 8.29289L10.5 13.5858L8.20711 11.2929C7.81658 10.9024 7.18342 10.9024 6.79289 11.2929C6.40237 11.6834 6.40237 12.3166 6.79289 12.7071L9.79289 15.7071C10.1834 16.0976 10.8166 16.0976 11.2071 15.7071L17.2071 9.70711Z"
                              fill="#05649C"
                            />
                          </svg>
                        </div>
                      )}{" "}
                      <p className="font-bold">{item.title}</p>
                    </div>

                    <p className="font-bold text-lg px-3">
                      + ${item.price}{" "}
                      <span className="text-sm text-[#4B5563] font-normal">
                        / month
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center py-4">
            <button className="py-3 bg-primary rounded-lg text-white w-full">
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
