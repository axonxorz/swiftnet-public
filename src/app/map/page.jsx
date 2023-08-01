import React from "react";
import MapComponent from "../components/map/MapComponent";
import { Toaster } from "react-hot-toast";
import "@/app/styles/custom.css";

export const metadata = {
  title: "Map Swift-Net.ca",
  description:
    "Get connected with Swift-Net.ca, the leading home Wi-Fi internet service provider in Alberta & Saskatchewan, providing high-speed wireless internet service in Lloydminster, Cold Lake, North Battleford, and more rural communities. Sign up today!",
};

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
