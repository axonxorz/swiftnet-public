import React from "react";
import { planesList } from "./plans";

const BasicPlan = ({ setSelectedPlan, selectedPlan }) => {
  return (
    <div
      onClick={() => setSelectedPlan(planesList[0])}
      className={`${
        selectedPlan.id === planesList[0].id
          ? "border-primary border-[1px] bg-[#F1FAFF] "
          : "border-gray-400/70 border-[1px] "
      }col-span-1 cursor-pointer hover:border-primary mb-2  rounded-lg  py-2 px-4 flex flex-col gap-4 md:flex-row  items-center justify-between`}
      key={planesList[0].id}
    >
      <div className="flex items-center gap-3">
        {selectedPlan.id !== planesList[0].id ? (
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
        )}

        <p className="font-bold text-[18px]">{planesList[0].title}</p>

        <p className="border-[1px] rounded-md bg-white text-primary border-primary text-[12px] px-3 py-[1px]">
          Unlimited
        </p>
      </div>

      <div className="flex items-center gap-3 justify-center ">
        {planesList[0].include.map((itm) => (
          <div key={itm} className="flex items-center justify-center gap-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_515_2708)">
                <path
                  d="M14.6662 7.39053V8.00386C14.6654 9.44146 14.1999 10.8403 13.3391 11.9917C12.4784 13.1431 11.2685 13.9855 9.88985 14.3931C8.51124 14.8007 7.0378 14.7517 5.68929 14.2535C4.34077 13.7553 3.18943 12.8346 2.40697 11.6285C1.62452 10.4225 1.25287 8.99589 1.34746 7.5614C1.44205 6.12691 1.99781 4.76143 2.93185 3.6686C3.86589 2.57578 5.12817 1.81416 6.53043 1.49734C7.93269 1.18051 9.39979 1.32546 10.7129 1.91057M14.6662 2.66675L7.99962 9.34003L5.99964 7.34004"
                  stroke="#05649C"
                  strokeWidth="1.33332"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_515_2708">
                  <rect width="15.9999" height="15.9999" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p className="text-small text-black">{itm}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-primary text-[24px] font-bold text-center  ">
          ${planesList[0].price}
          <span className="text-[12px] text-[#4B5563] ml-1"> /month</span>
        </p>
      </div>
    </div>
  );
};

export default BasicPlan;
