import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";

const Card = ({ plan }) => {
  const router = useRouter();
  const handlClick = () => {
    const url = `${plan.title},$${plan.price},download=${plan.dspeed},upload=${plan.uspeed}`;
    Cookies.set("note", url, { expires: 7 });
    router.push("/sign-up");
  };
  return (
    <div
      className={`${
        plan.id === 1
          ? "border-primary border-[1px] bg-[#F1FAFF] "
          : `border-gray-400/70 border-[1px] ${plan.bg}   `
      }col-span-1 cursor-pointer hover:border-primary relative min-h-[160px] rounded-lg  flex flex-col  space-y-3 py-4`}
      key={plan.id}
      onClick={() => handlClick()}
    >
      {plan.id === 1 && (
        <div className="absolute bg-primary top-0 left-0 px-4 py-[2px] text-white  rounded-tl-lg rounded-br-lg  ">
          <p>Recommended</p>
        </div>
      )}

      <div className="text-center w-full  flex gap-1 flex-col items-center justify-center ">
        <p className="font-bold text-[18px]">{plan.title}</p>
      </div>

      <div className="text-center">
        <p className="text-primary text-[24px] font-bold text-center  ">
          ${plan.price}
        </p>
        <p className="text-[12px] text-[#4B5563] -mt-2">/month</p>
      </div>

      <div className=" min-h-[10px]">
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
      </div>

      <div className="text-center px-4">
        <div className="rounded-md bg-primary py-2">
          <p className="text-white text-[16px] font-bold text-center   ">
            UNLIMITED
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col items-start gap-3 px-6"></div>
    </div>
  );
};

export default Card;
