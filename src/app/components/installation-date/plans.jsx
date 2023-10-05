import styles from "@/app/styles/styles";
import React, { useState } from "react";
import Card from "./card";
import BasicPlan from "./basic-plan-card";

export const plansList = [
  {
    id: 0,
    title: "LightSpeed 25/5",
    unlimited: true,
    price: 79.95,
    include: ["Youtube", "Netflix", "Live Sports"],
    bg: "",
  },
  {
    id: 1,
    title: "LightSpeed 50/10",
    unlimited: true,
    price: 89.95,
    include: ["Multiple users", "Online learning", "TikTok"],
    bg: "",
  },
  {
    id: 2,
    title: "LightSpeed 75/15",
    unlimited: true,
    price: 99.95,
    include: ["PC gaming", "Xbox", "PlayStation", "Nintendo"],
    bg: "",
  }
];
const Plans = ({ selectedPlan, setSelectedPlan }) => {
  return (
    <div className="w-full text-start ">
      <label className={`${styles.paragraph} text-[#4B5563]`}>
        Preferred Plan
      </label>

      <div className="flex justify-start items-start gap-4 ">
        <div className="grid grid-cols-2 md:grid-cols-3  gap-4 w-full">
          {plansList
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
    </div>
  );
};

export default Plans;
