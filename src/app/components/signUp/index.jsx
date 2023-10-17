"use client";
import React, { useEffect, useState } from "react";
import Subtract from "@/assets/Subtract.webp";
import Image from "next/image";
import Step1 from "./Step1";
import { useSearchParams } from "next/navigation";
import Form from "./Form";
import { useSessionStore } from "@/store";

const Index = () => {
  const [step, setStep] = useState(1);
  const setPriority = useSessionStore((state) => state.setPriority);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("step")) {
      setStep(parseInt(searchParams.get("state")));
    }

    if (searchParams.get("priority")) {
      setPriority(true);
    }
  }, []);

  if (step !== 2) {
    return (
      <>
        <div className="flex items-start justify-between h-screen  ">
          {step === 1 ? <Step1 setStep={setStep} plan={550} /> : <Form />}

          <div className="hidden md:flex justify-start items-start  md:w-1/2 h-screen ">
            <Image
              alt="subtract"
              src={Subtract}
              style={{
                width: "100%",
                height: "100%",
                objectFit: 'cover',
                objectPosition: '30% 90%'
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

export default Index;
