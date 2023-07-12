"use client";
import React, { useEffect, useState } from "react";
import Subtract from "@/assets/Subtract.jpg";
import Image from "next/image";
import Form from "../components/signUp/Form";
import Step1 from "../components/signUp/Step1";
import { Toaster } from "react-hot-toast";
import { useSearchParams } from "next/navigation";
const page = () => {
  const [step, setStep] = useState(1);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("step")) {
      setStep(parseInt(searchParams.get("state")));
    }
  }, []);

  if (step !== 2) {
    return (
      <>
        <Toaster />
        <div className="flex items-start justify-between h-screen  ">
          {step === 1 ? (
            <Step1 setStep={setStep} plan={550} price={79.95} />
          ) : (
            <Form />
          )}

          <div className="hidden md:flex justify-start items-start  md:w-1/2 h-screen ">
            <Image
              alt="subtract"
              src={Subtract}
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default page;