import styles from "@/app/styles/styles";
import React, { useState } from "react";
import Card from "./card";

export const planesList = [
  {
    id: 0,
    title: "Basic",
    unlimited: true,
    price: 69.95,
    include: ["browser", "Email", "Facebook"],
  },
  {
    id: 1,
    title: "Streaming",
    unlimited: true,
    price: 77.95,
    include: ["Youtube", "Netflix", "Live Sport"],
  },
  {
    id: 2,
    title: "Family",
    unlimited: true,
    price: 84.95,
    include: ["Multiple users", "Online learning", "TikTok"],
  },
  {
    id: 3,
    title: "Gamer",
    unlimited: true,
    price: 104.95,
    include: ["PC gaming", "Xbox", "PlayStation", "Nintendo"],
  },
  {
    id: 4,
    title: "Ultimate",
    unlimited: true,
    price: 129.95,
    include: ["Competitive gamers", "Smart TVs", "Large households"],
  },
  {
    id: 5,
    title: "Business",
    unlimited: true,
    price: 179,
    include: ["Work from home", "Zoom", "VPN"],
  },
  {
    id: 6,
    title: "Dedicated",
    unlimited: true,
    price: 499,
    include: ["Dedicated link", "Managed internet"],
  },
];
const Plans = ({ selectedPlan, setSelectedPlan }) => {
  const [hideBasic, sethideBasic] = useState(true);
  return (
    <div className="w-full text-start ">
      <label className={`${styles.paragraph} text-[#4B5563]`}>
        Preferred Plan
      </label>

      {!hideBasic ? (
        <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
          {planesList.map((plan) => {
            return (
              <Card
                plan={plan}
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
                key={plan.id}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-start items-start gap-4">
          <div
            className="w-[50px] cursor-pointer hover:bg-[#F1FAFF] min-h-[330px] rounded-lg  p-4 border-[1px] flex items-center justify-center flex-col gap-4 "
            onClick={() => {
              sethideBasic(false);
              setSelectedPlan(planesList[0]);
            }}
          >
            <p className="font-bold">B</p>
            <p className="font-bold">A</p>
            <p className="font-bold">S</p>
            <p className="font-bold">I</p>
            <p className="font-bold">C</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4  gap-4">
            {planesList
              .filter((byId) => byId.id !== 0)
              .map((plan) => {
                return (
                  <Card
                    plan={plan}
                    selectedPlan={selectedPlan}
                    setSelectedPlan={setSelectedPlan}
                    key={plan.id}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Plans;
