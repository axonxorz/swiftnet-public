"use client";
import Link from "next/link";
import React, { useState } from "react";

const Card = ({ question }) => {
  const [showAnswer, setshowAnswer] = useState(false);
  const paragraphs = question.answer.split("\n\n");

  return (
    <div className="w-full flex items-center justify-center">
      <div
        onClick={() => setshowAnswer((state) => !state)}
        className="w-full md:w-[70%]  border-b-[1px] py-4 hover:bg-slate-300/20  cursor-pointer md:px-5 rounded-lg"
      >
        <div className="flex items-center justify-between">
          {" "}
          <p className="font-semibold ">{question.title}</p>
          <p className="text-[20px] cursor-pointer hover:scale-150">
            {showAnswer ? "-" : "+"}
          </p>
        </div>
        {showAnswer && (
          <div className="py-2 space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p className="text-[#4B5563]" key={index}>
                {paragraph}{" "}
                {index === paragraphs.length - 1 && (
                  <span className="text-primary font-semibold hover:underline ">
                    <Link href={"/sign-up?priority=true"}>Sign-up Now</Link>
                  </span>
                )}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );

};

export default Card;
