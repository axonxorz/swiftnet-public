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
            {paragraphs.map((paragraph, index) => (
              <p className="text-[#4B5563]" key={index}>
                {paragraph}{" "}
                {index === paragraphs.length - 1 && (
                  <div className="text-primary font-semibold hover:underline ">
                    <Link href={"/sign-up?priority=true"}>Sign-up Now</Link>
                  </div>
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
