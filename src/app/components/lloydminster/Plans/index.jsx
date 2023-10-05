import React from "react";
import Card from "./Card";

export const planesList = [
  {
    id: 0,
    title: "SN - 550",
    price: 129.95,
    bg: "bg-white",
    dspeed: 550,
    uspeed: 20,
  },
  {
    id: 1,
    title: "SN - 350",
    unlimited: true,
    price: 104.95,
    bg: "bg-white",
    dspeed: 350,
    uspeed: 20,
  },
  {
    id: 2,
    title: "SN - 200",
    unlimited: true,
    price: 84.95,
    bg: "bg-white",
    dspeed: 280,
    uspeed: 10,
  },
  {
    id: 3,
    title: "SN - 100",
    unlimited: true,
    price: 77.95,
    dspeed: 100,
    uspeed: 10,
    bg: "bg-white",
  },
  {
    id: 4,
    title: "SN - 50",
    unlimited: true,
    price: 69.95,
    dspeed: 50,
    uspeed: 10,
    bg: "bg-white",
  },
];

const index = () => {
  return (
    <div className="flex justify-center items-center gap-4 ">
      <div className="grid grid-cols-1 lg:grid-cols-3  gap-4 w-full ">
        {planesList.map((plan) => {
          return <Card plan={plan} key={plan.id} />;
        })}
      </div>
    </div>
  );
};

export default index;
