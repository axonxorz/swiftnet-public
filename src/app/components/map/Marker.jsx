import styles from "@/app/styles/styles";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Marker = ({ clickedPlaceData }) => {
  const route = useRouter();
  const [Loading, setLoading] = useState(false);
  const [supported, setSupported] = useState(false);
  const handleChackAvabilty = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.towercoverage.com/towercoverage.asmx/EUSPrequalAPI?multicoverageid=32379&Account=23232&Address=${""}&city=${
        clickedPlaceData.city
      }&Country=${clickedPlaceData.country}&State=${
        clickedPlaceData.state
      }&zipcode=${clickedPlaceData.postalcode}&Latitude=${
        clickedPlaceData.lat
      }&Longitude=${
        clickedPlaceData.lng
      }&RxMargin=&key=f0c7fa3a935b20d98878bc484b47ad3b`
    );
    const text = await response.text();

    setLoading(false);
    console.log(
      clickedPlaceData.city +
        clickedPlaceData.country +
        clickedPlaceData.postalcode +
        clickedPlaceData.state
    );
    console.log("result :" + text);
    console.log("------------------------------");

    if (text.includes("No")) {
      setSupported(false);
    } else {
      setSupported(true);
    }
  };

  useEffect(() => {
    clickedPlaceData && handleChackAvabilty();
  }, [clickedPlaceData.lat, clickedPlaceData.lng]);

  Loading && (
    <div className="px-2">
      <p>wait ...</p>
    </div>
  );
  return (
    <div className=" relative">
      <div
        className={`w-[10px] h-[10px] border-2 border-white rounded-full ${
          supported ? "bg-green-600" : "bg-red-600"
        }`}
      ></div>
      <div className="w-[250px] min-h-[110px] rounded-lg shadow-md py-2 absolute top-3 left-3 bg-white p-3">
        <p
          className={`${styles.paragraph} ${
            supported ? "text-green-500" : "text-red-500"
          }`}
        >
          You're place is supported
        </p>

        {supported ? (
          <div>
            <button
              onClick={() =>
                route.push(
                  `/sign-up?step=2&city=${clickedPlaceData.city}&state=${clickedPlaceData.state}&country=${clickedPlaceData.city}&codepostal=${clickedPlaceData.postcode}`
                )
              }
              className="py-1 bg-primary rounded-md text-white px-4 mt-4"
            >
              Check out
            </button>
          </div>
        ) : (
          <div>
            <p className={` text-xs`}>
              you still can get access to our service , contact us
            </p>
            <button
              className="py-1 bg-primary rounded-md text-white px-4 mt-1"
              onClick={() =>
                route.push(
                  `/sign-up?step=2&city=${clickedPlaceData.city}&state=${clickedPlaceData.state}&country=${clickedPlaceData.city}&codepostal=${clickedPlaceData.postcode}`
                )
              }
            >
              Ask for internet service
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marker;
