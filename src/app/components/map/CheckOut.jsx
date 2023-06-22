import styles from "@/app/styles/styles";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CheckOut = ({ userLocation }) => {
  const route = useRouter();

  const handleClickSub = () => {
    route.push(
      `/sign-up?step=2&fullAdress=${userLocation.fullAdress}&lng=${userLocation.lng}&lat=${userLocation.lat}&city=${userLocation.city}&state=${userLocation.state}&country=${userLocation.city}&codepostal=${userLocation.postal_code}`
    );
  };

  return (
    <div className=" relative ">
      <div
        onClick={() => handleClickSub()}
        className="w-[200px] border-2   rounded-lg shadow-md py-2 absolute top-1 flex items-end justify-center  bg-white "
      >
        <div>
          <button className="py-2 bg-primary rounded-md text-white px-4 ">
            Confirm building
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
