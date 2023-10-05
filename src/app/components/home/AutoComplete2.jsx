"use client";
import React from "react";
import { useRef, useEffect, useState } from "react";

const AutoCompleteInput2 = ({ setUserLocation }) => {
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const [loading, setloading] = useState(false);
  const [placeObj, setplaceObj] = useState({});
  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
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
        fullAddress: inputRef.current.value,
        city:
          placeObj.address_components?.filter((adr) =>
            adr.types?.includes("locality")
          )[0]?.long_name || "",
        country:
          placeObj.address_components?.filter((adr) =>
            adr.types?.includes("country")
          )[0]?.long_name || "",
        state:
          placeObj.address_components?.filter((adr) =>
            adr.types?.includes("administrative_area_level_1")
          )[0]?.long_name || "",
        postal_code:
          placeObj.address_components?.filter((adr) =>
            adr.types?.includes("postal_code")
          )[0]?.long_name || "",
      });
  }, [placeObj]);

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
      </div>
    </>
  );
};

export default AutoCompleteInput2;
