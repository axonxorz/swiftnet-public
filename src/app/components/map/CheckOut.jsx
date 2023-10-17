import { useRouter } from "next/navigation";
import React from "react";

const CheckOut = ({ setCheckOutHovered }) => {

  // &fullAddress=${userLocation.fullAddress}&lng=${userLocation.lng}&lat=${userLocation.lat}&city=${userLocation.city}&state=${userLocation.state}&country=${userLocation.city}&codepostal=${userLocation.postal_code}`

  const route = useRouter();

  const handleMouseEnter = () => {
    setCheckOutHovered(true);
  };

  const handleMouseLeave = () => {
    setCheckOutHovered(false);
  };

  const handleClickSub = () => {
    route.push(
      `/sign-up?step=2`
    );
  };

  return (
    <div className=" relative bg-black ">
      <div
        onClick={() => handleClickSub()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="w-[200px] border-2   rounded-lg shadow-md py-2 absolute top-1 flex items-end justify-center  bg-white "
      >
        <div>
          <button className="py-2 bg-primary rounded-md text-white px-4">
            Confirm location
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
