import React from "react";
import MapComponent from "../components/map/MapComponent";
import Script from "next/script";
import { Toaster } from "react-hot-toast";

const page = () => {
  return (
    <>
      <Toaster />

      <div style={{ height: "100vh", width: "100%" }}>
        <MapComponent />
      </div>
    </>
  );
};

export default page;
