import React from "react";
import FAQ from "@/app/components/faqs/index";
export const metadata = {
  title: "AB/SK internet provider outage FAQ by Swift-Net.ca",
  description:
    "Frustrated by MCSnet outages in Lloydminster, Cold Lake, Bonnyville, Lac La Biche, Macklin, and Athabasca? Is Access Communications offline in North Battleford, Kindersley and Meadow Lake? Tired of frequent Sasktel outages in Lloydminster North Battleford, and Meadow Lake?",
};

const page = () => {
  return (
    <>
      <FAQ />
    </>
  );
};

export default page;
