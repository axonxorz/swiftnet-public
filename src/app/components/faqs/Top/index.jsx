import React from "react";
const index = () => {
  return (
    <div
      className={`bg-primary relative flex flex-col space-y-4 py-7 text-white items-center justify-center min-h-[340px]  mb-5`}
    >
      <p className="text-sm">FAQ</p>

      <p className="text-[38px] text-center md:text-[48px] font-semibold">
        Frequently Asked Questions
      </p>

      <p className="w-[90%] md:w-[60%] text-center ">
        Questions and answers about home internet connectivity issues with troubleshooting tips from Swift-Net.ca
      </p>
    </div>
  );
};

export default index;
