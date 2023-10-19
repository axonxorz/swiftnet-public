import styles from "@/app/styles/styles";
import React, { useState } from "react";
import Card from "./card";
import { useAvailablePlansStore } from "@/store";

const Plans = ({ selectedPlan, setSelectedPlan }) => {
  const availablePlansStore = useAvailablePlansStore();

  return (
    <div className="w-full text-start ">
      {availablePlansStore.plans.length > 0 &&
      <label className={`${styles.paragraph} text-[#4B5563]`}>
        Preferred Plan
      </label>
      }

      <div className="flex justify-start items-start gap-4 ">
        <div className="grid grid-cols-2 md:grid-cols-3  gap-4 w-full">
          {availablePlansStore.plans
            .map((plan) => {
              return (
                <Card
                  key={plan.id}
                  plan={plan}
                  selectedPlan={selectedPlan}
                  setSelectedPlan={setSelectedPlan}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Plans;
