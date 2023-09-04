import React from "react";

const Card = ({ plan }) => {
  return (
    <div
      className={`${
        plan.id === 1
          ? "border-primary border-[1px] bg-[#F1FAFF] "
          : `border-gray-400/70 border-[1px] ${plan.bg}   `
      }col-span-1 cursor-pointer hover:border-primary relative min-h-[160px] rounded-lg  flex flex-col  space-y-3 py-4`}
      key={plan.id}
    >
      {plan.id === 1 && (
        <div className="absolute bg-primary top-0 left-0 px-4 py-[2px] text-white  rounded-tl-lg rounded-br-lg  ">
          <p>Recommended</p>
        </div>
      )}

      <div className="text-center w-full min-h-[60px] flex gap-1 flex-col items-center justify-center ">
        <p className="font-bold text-[18px]">{plan.title}</p>

        <p className="border-[1px] rounded-md bg-white text-primary border-primary text-[12px] px-3 py-[1px]">
          Unlimited
        </p>
      </div>

      <div className="text-center">
        <p className="text-primary text-[24px] font-bold text-center  ">
          ${plan.price}
        </p>
        <p className="text-[12px] text-[#4B5563] -mt-2">/month</p>
      </div>

      <div className="text-center">
        <p className="text-[#1F2937] text-[14px]  text-center  ">
          Download Speed
        </p>
        <p className="text-[14px] text-[#4B5563] mt-1 font-bold">
          {plan.dspeed} Mbps
        </p>
      </div>

      <div className="text-center">
        <p className="text-[#1F2937] text-[14px]  text-center  ">
          Upload Speed
        </p>
        <p className="text-[14px] text-[#4B5563] mt-1 font-bold">
          {plan.uspeed} Mbps
        </p>
      </div>

      <div className="w-full flex flex-col items-start gap-3 px-6"></div>
    </div>
  );
};

export default Card;
