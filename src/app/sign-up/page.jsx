import React from "react";
import Subtract from "@/assets/Subtract.png";
import Image from "next/image";
import Form from "../components/signUp/Form";
const page = () => {
  return (
    <>
      <div className="min-h-screen">
        <div className="h-[70px]"></div>
        <div className="flex items-center justify-between ">
          <Form />

          <div className="hidden md:flex items-center justify-end  md:w-1/2 h-full pl-5">
            <Image
              alt="subtract"
              src={Subtract}
              style={{
                width: "100%",
                height: "100vh",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
