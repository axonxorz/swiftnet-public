import React from "react";
import Card from "./Card";

export const plansList = [
  {
    title: "SwiftNet Tarana 50",
    unlimited: true,
    price: 69.95,
    download_speed: 50,
    upload_speed: 10,
    bg: "bg-white",
  },
  {
    title: "SwiftNet Tarana 100",
    unlimited: true,
    price: 77.95,
    download_speed: 100,
    upload_speed: 10,
    bg: "bg-white",
  },
  {
    title: "SwiftNet Tarana 200",
    unlimited: true,
    price: 84.95,
    bg: "bg-white",
    download_speed: 280,
    upload_speed: 10,
  },
  {
    title: "SwiftNet Tarana 350",
    unlimited: true,
    price: 104.95,
    bg: "bg-white",
    download_speed: 350,
    upload_speed: 20,
    recommended: true
  },
  {
    title: "SwiftNet Tarana 550",
    price: 129.95,
    bg: "bg-white",
    download_speed: 550,
    upload_speed: 20,
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
