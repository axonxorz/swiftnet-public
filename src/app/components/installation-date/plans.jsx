import styles from "@/app/styles/styles";
import React, { useState } from "react";
import Card from "./card";
import BasicPlan from "./basic-plan-card";

export const planesList = [
  {
    id: 0,
    title: "Basic",
    unlimited: true,
    price: 79.95,
    include: ["Browser", "Email", "Facebook"],
    bg: "",
  },
  {
    id: 1,
    title: "Streaming",
    unlimited: true,
    price: 94.95,
    include: ["Youtube", "Netflix", "Live Sports"],
    bg: "",
  },
  {
    id: 2,
    title: "Family",
    unlimited: true,
    price: 99.95,
    include: ["Multiple users", "Online learning", "TikTok"],
    bg: "",
  },
  {
    id: 3,
    title: "Gamer",
    unlimited: true,
    price: 119.95,
    include: ["PC gaming", "Xbox", "PlayStation", "Nintendo"],
    bg: "",
  },
  {
    id: 4,
    title: "Ultimate",
    unlimited: true,
    price: 149.95,
    include: ["Competitive gamers", "Smart TVs", "Large households"],
    bg: "bg-[#FAF3FF]",
  },
  {
    id: 5,
    title: "Business",
    unlimited: true,
    price: 179,
    include: ["Work from home", "Zoom", "VPN"],
    bg: "bg-[#ECFDF5]",
  },
  {
    id: 6,
    title: "Dedicated",
    unlimited: true,
    price: 499,
    include: ["Dedicated link", "Managed internet"],
    bg: "bg-[#FEF2F2]",
  },
];
const Plans = ({ selectedPlan, setSelectedPlan }) => {
  return (
    <div className="w-full text-start ">
      <label className={`${styles.paragraph} text-[#4B5563]`}>
        Preferred Plan
      </label>

      <BasicPlan
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        key={"basic plan"}
      />

      <div className="flex justify-start items-start gap-4 ">
        <div className="grid grid-cols-2 md:grid-cols-3  gap-4 w-full">
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
    </div>
  );
};

export default Plans;
