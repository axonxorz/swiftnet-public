import React from "react";

const Card = ({ setSelectedPlan, plan, selectedPlan }) => {
  return (
    <div
      onClick={() => setSelectedPlan(plan)}
      className={`${
        selectedPlan.id === plan.id
          ? "border-primary border-[1px] bg-[#F1FAFF] "
          : `border-gray-400/70 border-[1px] ${plan.bg}   `
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

      <div className="w-full flex flex-col items-start gap-3 px-6">
        {plan.include.map((itm) => {
          return (
            <div key={itm} className="flex items-center justify-center gap-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.8047 3.5286C14.0651 3.78895 14.0651 4.21106 13.8047 4.47141L6.4714 11.8047C6.21106 12.0651 5.78894 12.0651 5.5286 11.8047L2.19526 8.47141C1.93491 8.21106 1.93491 7.78895 2.19526 7.5286C2.45561 7.26825 2.87772 7.26825 3.13807 7.5286L6 10.3905L12.8619 3.5286C13.1223 3.26825 13.5444 3.26825 13.8047 3.5286Z"
                  fill="#05649C"
                />
              </svg>

              <p className="text-small text-black">{itm}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
