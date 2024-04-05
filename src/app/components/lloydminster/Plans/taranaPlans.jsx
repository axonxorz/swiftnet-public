import React from "react";
import Card from "./Card";

export const plansList = [
  {
    title: "Sprinter",
    data_limit: "200 GB",
    price: 39.95,
    download_speed: "Up to 500",
    upload_speed: "Up to 100",
    bg: "bg-white",
  },
  {
    title: "Racer",
    data_limit: "500 GB",
    price: 49.95,
    download_speed: "Up to 500",
    upload_speed: "Up to 100",
    bg: "bg-white",
  },
  {
    title: "Voyager",
    data_limit: "1000 GB",
    price: 69.95,
    bg: "bg-white",
    download_speed: "Up to 500",
    upload_speed: "Up to 100",
  },
  {
    title: "Infinity",
    unlimited: true,
    data_limit: "UNLIMITED",
    price: 89.95,
    bg: "bg-white",
    download_speed: "Up to 500",
    upload_speed: "Up to 100",
    recommended: true
  },
];

const TaranaPlans = () => {
  return (
    <div className="flex justify-center items-center gap-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 w-full ">
        {plansList.map((plan) => {
          return <Card plan={plan} />;
        })}
      </div>
    </div>
  );
};

export default TaranaPlans;
