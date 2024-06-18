import React from "react";
import OutageMap from "@components/map/OutageMap";

export const metadata = {
  title: "Service Outage",
};

const Page = () => {
  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <OutageMap />
      </div>
    </>
  );
};

export default Page;
