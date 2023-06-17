import React from "react";
import Subtract from "@/assets/Subtract.png";
import Image from "next/image";
import Form from "../components/signUp/Form";
const page = () => {
  return (
    <>
      <div className="">
        <div className="flex items-start justify-between  ">
          <Form />

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
      </div>
    </>
  );
};

export default page;
