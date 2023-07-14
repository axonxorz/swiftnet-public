import React from "react";

import SignUp from "@components/signUp";

export const metadata = {
  title: "[SIGN-UP NOW] AB SK Local Wi-Fi Internet Provider",
  description:
    "Get connected with Swift-Net.ca, the leading home Wi-Fi internet service provider in Alberta & Saskatchewan, providing high-speed wireless internet service in Lloydminster, Cold Lake, North Battleford, and more rural communities. Sign up today!",
};

const page = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default page;
