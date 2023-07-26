"use client";
import React, { useState } from "react";

const Card = ({ question }) => {
  const [showAnswer, setshowAnswer] = useState(false);
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full md:w-[70%]  border-b-[1px] py-4">
        <div className="flex items-center justify-between">
          {" "}
          <p className="font-semibold ">{question.title}</p>
          <p
            className="text-[20px] cursor-pointer hover:scale-150"
            onClick={() => setshowAnswer((state) => !state)}
          >
            {showAnswer ? "-" : "+"}
          </p>
        </div>
        {showAnswer && (
          <div className="py-2">
            <p className="text-[#4B5563]">{question.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
