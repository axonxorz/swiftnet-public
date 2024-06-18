import React from "react";
import SelectLocationMap from "@components/map/SelectLocationMap";

export const metadata = {
  title: "Service Outage",
};

const Page = () => {
  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <SelectLocationMap />
      </div>
    </>
  );
};

export default Page;
