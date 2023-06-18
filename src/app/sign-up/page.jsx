"use client";
import React, { useEffect, useState } from "react";
import Subtract from "@/assets/Subtract.png";
import Image from "next/image";
import Form from "../components/signUp/Form";
import Step1 from "../components/signUp/Step1";
import { Toaster } from "react-hot-toast";
import { usePathname, useSearchParams } from "next/navigation";
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
        <div className="flex items-start justify-between  ">
          {step === 1 ? <Step1 setStep={setStep} /> : <Form />}

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
    return (
      <>
        {/* <div style={{ height: "100vh", width: "100%" }}>
          <MapComponent />
        </div> */}
      </>
    );
  }
};

export default page;
