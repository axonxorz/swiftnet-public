"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Card = ({ question, collapse }) => {
  const [showAnswer, setshowAnswer] = useState(true);
  const paragraphs = question.answer.split("\n\n");

  useEffect(() => {
    setshowAnswer(true);
  }, [collapse]);

  return (
    <div className="w-full flex items-start justify-center">
      <div
        onClick={() => setshowAnswer((state) => !state)}
        className="w-full   border-b-[1px] py-4  cursor-pointer md:px-5 rounded-lg"
      >
        <div className="flex items-center justify-between">
          {" "}
          <p className="font-semibold ">{question.title}</p>
          <p className="text-[20px] cursor-pointer hover:scale-150">
            {showAnswer ? "-" : "+"}
          </p>
        </div>

        {question.image && (
          <div className="m-3 rounded-lg overflow-hidden my-2">
            {question.image}
          </div>
        )}
        {showAnswer && (
          <div className="py-2 space-y-4">
            <div className="w-[95%] m-auto">
              <p className="text-sm md:text-sm tracking-[-0.02em] text-primary bg-[#F1FAFF] px-3 py-1 border-[1px] border-solid border-primary rounded-xl">
                  Swift-net does not provide technical support for customer owned equipment. If your router is not provided by us and our Whole Home Wi-Fi systems, we may recommend you contact the manufacturer of your router.
              </p>
            </div>
            <ul className="list-disc list-inside">
              {paragraphs.map((paragraph, index) => (
              <li className="text-[#4B5563]" key={index}>
                {paragraph}{" "}
              </li>
            ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
