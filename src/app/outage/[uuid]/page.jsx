import React from "react";
import SelectLocationMap from "@components/map/SelectLocationMap";
import OutageMap from "@components/map/OutageMap"

export const metadata = {
  title: "Service Outage",
};

const Page = (props) => {
  const { uuid } = props.params;
  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        {/* <p> Test : {uuid} </p> */}
        <OutageMap uuid={uuid}/>
      </div>
    </>
  );
};

export default Page;
