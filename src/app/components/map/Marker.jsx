import styles from "@/app/styles/styles";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Marker = ({ userLocation }) => {
  const route = useRouter();
  const [Loading, setLoading] = useState(false);
  const [supported, setSupported] = useState(false);
  const handleChackAvabilty = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.towercoverage.com/towercoverage.asmx/EUSPrequalAPI?multicoverageid=56103&Account=39013&Address=${""}&city=${
        userLocation.city
      }&Country=${userLocation.country}&State=${userLocation.state}&zipcode=${
        userLocation.postal_code
      }&Latitude=${userLocation.lat}&Longitude=${
        userLocation.lng
      }&RxMargin=&key=f0c7fa3a935b20d98878bc484b47ad3b`
    );
    const text = await response.text();

    setLoading(false);

    if (text.includes("No")) {
      setSupported(false);
    } else {
      setSupported(true);
    }
  };

  useEffect(() => {
    userLocation && handleChackAvabilty();
  }, [userLocation?.lat, userLocation?.lng]);

  const handleClickSub = () => {
    route.push(
      `/sign-up?step=2&fullAdress=${userLocation.fullAdress}&supportedplace=${supported}&lng=${userLocation.lng}&lat=${userLocation.lat}&city=${userLocation.city}&state=${userLocation.state}&country=${userLocation.city}&codepostal=${userLocation.postal_code}`
    );
  };

  Loading && (
    <div className="px-2">
      <p>wait ...</p>
    </div>
  );
  return (
    <div className=" relative">
      <div className="w-[250px] min-h-[110px] rounded-lg shadow-md py-2 absolute top-1  bg-white p-3">
        <p
          className={`${styles.paragraph} ${
            supported ? "text-green-500" : "text-red-500"
          }`}
        >
          You're place is {!supported && "not"} supported
        </p>

        {supported ? (
          <div>
            <button
              onClick={() => handleClickSub()}
              className="py-2 bg-primary rounded-md text-white px-4 mt-4"
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
              className="py-2 bg-primary rounded-md text-white px-4 mt-1"
              onClick={() => handleClickSub()}
            >
              Subscribe
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marker;
