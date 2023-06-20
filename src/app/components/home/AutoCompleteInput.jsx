"use client";
import styles from "@/app/styles/styles";
import React from "react";
import { useRef, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AutoCompleteInput = ({ setUserLocation, setStep }) => {
  const router = useRouter();
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const [loading, setloading] = useState(false);
  const [placeObj, setplaceObj] = useState({});

  const options = {
    // componentRestrictions: { country: "ng" },
    fields: ["address_components", "geometry", "icon", "name"],
    // types: ["establishment"]
  };
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        options
      );

      autoCompleteRef?.current?.addListener("place_changed", async function () {
        const place = await autoCompleteRef.current.getPlace();
        if (place) {
          setplaceObj(place);
        }
      });
      setloading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    setUserLocation &&
      setUserLocation({
        lat: placeObj.geometry?.location?.lat(),
        lng: placeObj.geometry?.location?.lng(),
      });
  }, [placeObj]);

  const handleChackAvabilty = async () => {
    console.log("------------------------------");
    const city =
      placeObj.address_components?.filter((adr) =>
        adr.types?.includes("locality")
      )[0]?.long_name || "";

    const country =
      placeObj.address_components?.filter((adr) =>
        adr.types?.includes("country")
      )[0]?.long_name || "";

    const state =
      placeObj.address_components?.filter((adr) =>
        adr.types?.includes("administrative_area_level_1")
      )[0]?.long_name || "";
    const route =
      placeObj.address_components?.filter((adr) =>
        adr.types?.includes("route")
      )[0]?.long_name || "";

    const postal_code =
      placeObj.address_components?.filter((adr) =>
        adr.types?.includes("postal_code")
      )[0]?.long_name || "";

    setloading(true);
    const response = await fetch(
      `https://api.towercoverage.com/towercoverage.asmx/EUSPrequalAPI?multicoverageid=56103&Account=39013&Address=${route}&city=${city}&Country=${country}&State=${state}&zipcode=${postal_code}&Latitude=${placeObj.geometry?.location?.lat()}&Longitude=${placeObj.geometry?.location?.lng()}&RxMargin=&key=f0c7fa3a935b20d98878bc484b47ad3b`
    );
    const text = await response.text();

    setloading(false);

    if (text.includes("No")) {
      toast.error("your place is not suported");
    } else {
      toast.success("your place is supported");
      setTimeout(() => {
        setStep && setStep(3);
        router.push(
          `/sign-up?step=2&lat=${placeObj.geometry?.location?.lat()}lng=${placeObj.geometry?.location?.lng()}&city=${city}&country=${country}&codepostal=${postal_code}&state=${state}`
        );
      }, 2000);
    }
  };

  return (
    <>
      <div className="w-full relative">
        <input
          disabled={loading}
          type="text"
          placeholder={loading ? "please wait ...." : "Enter Your address"}
          ref={inputRef}
          className="w-full px-3 pt-3 pb-14 md:pb-3 rounded-lg text-[#9CA3AF]"
        />
        <button
          type="submit"
          onClick={() => handleChackAvabilty()}
          className={`bg-primary border-none rounded-md ${styles.paragraph} text-white px-4 py-2 absolute bottom-[3px] md:bottom-[50%] md:translate-y-[50%] right-[3px] w-[98%] md:w-auto`}
        >
          Check availability
        </button>
      </div>
    </>
  );
};

export default AutoCompleteInput;
