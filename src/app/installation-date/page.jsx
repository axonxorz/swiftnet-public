"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/styles";
import { useRouter, useSearchParams } from "next/navigation";

const planesList = [
  {
    id: 0,
    title: "Basic",
    unlimited: true,
    price: 69.95,
    include: ["browser", "Email", "Facebook"],
  },
  {
    id: 1,
    title: "Streaming",
    unlimited: true,
    price: 77.95,
    include: ["Youtube", "Netflix", "Live Sport"],
  },
  {
    id: 2,
    title: "family",
    unlimited: true,
    price: 84.95,
    include: ["Multiple users", "Online learning", "TikTok"],
  },
  {
    id: 3,
    title: "Gamer",
    unlimited: true,
    price: 104.95,
    include: ["PC gaming", "Xbox", "PlayStation", "Nintendo"],
  },
  {
    id: 4,
    title: "Ultimate",
    unlimited: true,
    price: 129.95,
    include: ["Competitive gamers", "Smart TVs", "Large households"],
  },
  {
    id: 5,
    title: "Business",
    unlimited: true,
    price: 179,
    include: ["Work from home", "Zoom", "VPN"],
  },
  {
    id: 6,
    title: "Dedicated",
    unlimited: true,
    price: 499,
    include: ["Dedicated link"],
  },
];

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
            <div class="relative max-w-sm">
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
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
              />
            </div>
          </div>

          {/* Preferred Plan */}
          <div className="w-full text-start ">
            <label className={`${styles.paragraph} text-[#4B5563]`}>
              Preferred Plan
            </label>

            <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
              {planesList.map((plan) => {
                return (
                  <div
                    onClick={() => setSelectedPlan(plan)}
                    className={`${
                      selectedPlan.id === plan.id
                        ? "border-primary border-[1px] bg-[#F1FAFF] "
                        : "border-gray-400/70 border-[1px] "
                    }col-span-1 cursor-pointer hover:border-primary relative min-h-[260px] rounded-lg  flex flex-col  space-y-3 py-4`}
                    key={plan.id}
                  >
                    {plan.id === 2 && (
                      <div className="absolute bg-primary top-0 left-0 px-4 py-[2px] text-white  rounded-tl-lg rounded-br-lg  ">
                        <p>Recommended</p>
                      </div>
                    )}
                    {selectedPlan.id !== plan.id ? (
                      <div className="absolute h-[20px] w-[20px] border-[1px] border-black rounded-full top-5 right-5"></div>
                    ) : (
                      <div className="absolute h-[20px] w-[20px]  rounded-full top-5 right-5">
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
                    )}

                    <div className="text-center w-full h-[80px] flex gap-1 flex-col items-center justify-center">
                      <p className="font-bold text-[18px]">{plan.title}</p>

                      <p className="border-[1px] rounded-md bg-white border-primary text-[12px] px-3 py-[1px]">
                        Unlimited
                      </p>
                    </div>

                    <div className="text-center ">
                      <p className="text-primary text-[24px] font-bold text-center  ">
                        ${plan.price}
                      </p>
                      <p className="text-[12px] text-[#4B5563] -mt-2">/month</p>
                    </div>

                    <div className="w-full flex flex-col items-start gap-3 px-6">
                      {plan.include.map((itm) => {
                        return (
                          <div
                            key={itm}
                            className="flex items-center justify-center gap-3"
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clip-path="url(#clip0_515_2708)">
                                <path
                                  d="M14.6662 7.39053V8.00386C14.6654 9.44146 14.1999 10.8403 13.3391 11.9917C12.4784 13.1431 11.2685 13.9855 9.88985 14.3931C8.51124 14.8007 7.0378 14.7517 5.68929 14.2535C4.34077 13.7553 3.18943 12.8346 2.40697 11.6285C1.62452 10.4225 1.25287 8.99589 1.34746 7.5614C1.44205 6.12691 1.99781 4.76143 2.93185 3.6686C3.86589 2.57578 5.12817 1.81416 6.53043 1.49734C7.93269 1.18051 9.39979 1.32546 10.7129 1.91057M14.6662 2.66675L7.99962 9.34003L5.99964 7.34004"
                                  stroke="#05649C"
                                  stroke-width="1.33332"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_515_2708">
                                  <rect
                                    width="15.9999"
                                    height="15.9999"
                                    fill="white"
                                  />
                                </clipPath>
                              </defs>
                            </svg>

                            <p className="text-small text-black">{itm}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

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
