"use client";
import styles from "@/app/styles/styles";
import React from "react";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AutoCompleteInput = ({ setUserLocation }) => {
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
    if (
      typeof placeObj.geometry?.location?.lat() === "undefined" ||
      typeof placeObj.geometry?.location?.lng() === "undefined"
    ) {
      console.log("hnaa");
      router.push(`/map?fullAdress=${inputRef.current.value}`);
    } else {
      console.log("hnaa22");
      console.log(typeof placeObj.geometry?.location?.lng());
      console.log(typeof placeObj.geometry?.location?.lat());

      router.push(
        `/map?lat=${placeObj.geometry?.location?.lat()}&lng=${placeObj.geometry?.location?.lng()}&fullAdress=${
          inputRef.current.value
        }`
      );
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
