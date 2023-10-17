"use client";
import styles from "@/app/styles/styles";
import React from "react";
import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AutoCompleteInput = ({ setUserLocation, place }) => {
  const router = useRouter();
  const autoCompleteRef = useRef();
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [placeObj, setPlaceObj] = useState({});
  // const setAddress = ipAddressStore((state) => state.setAddress);

  const options = {
    fields: ["address_components", "geometry", "icon", "name"],
  };
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      autoCompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        options
      );

      autoCompleteRef?.current?.addListener("place_changed", async function () {
        const place = await autoCompleteRef.current.getPlace();
        if (place) {
          setPlaceObj(place);
        }
      });
      setLoading(false);
    }, 100);
  }, []);

  useEffect(() => {
    setUserLocation &&
      setUserLocation({
        lat: placeObj.geometry?.location?.lat(),
        lng: placeObj.geometry?.location?.lng(),
      });
  }, [placeObj]);

  const checkAvailability = async () => {
    if (
      typeof placeObj.geometry?.location?.lat() === "undefined" ||
      typeof placeObj.geometry?.location?.lng() === "undefined"
    ) {
      router.push(`/map?fullAddress=${inputRef.current.value}`);
    } else {
      router.push(
        `/map?lat=${placeObj.geometry?.location?.lat()}&lng=${placeObj.geometry?.location?.lng()}&fullAddress=${
          inputRef.current.value
        }`
      );
    }
  };

  if (place === "home") {
    return (
      <>
        <div className="w-full relative bg-white  p-1 md:p-0 rounded-md">
          <input
            disabled={loading}
            placeholder={loading ? "please wait ...." : "Enter Your address"}
            ref={inputRef}
            className=" block min-h-[30px] w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                checkAvailability();
              }
            }}
          />

          <button
            type="submit"
            onClick={() => checkAvailability()}
            className={`bg-primary border-none rounded-md ${styles.paragraph}   text-white px-4 py-2 hidden absolute md:flex  items-center justify-center top-0  md:bottom-[50%] right-0   h-full `}
          >
            Check availability
          </button>

          <button
            type="submit"
            onClick={() => checkAvailability()}
            className={`bg-primary border-none rounded-md ${styles.paragraph}  text-white px-4 py-2  md:hidden top-0     w-full `}
          >
            Check availability
          </button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="w-full relative">
          <label htmlFor="" className={`text-xs text-gray-500`}>
            Address
          </label>
          <input
            disabled={loading}
            type="text"
            placeholder={loading ? "please wait ...." : "Enter Your address"}
            ref={inputRef}
            className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                checkAvailability();
              }
            }}
          />
        </div>

        <div className="w-full  mt-4">
          <button
            type="submit"
            onClick={() => checkAvailability()}
            className={`bg-primary border-none hover:bg-primary/80 rounded-md ${styles.paragraph} text-white px-4 py-2     w-full `}
          >
            Check availability
          </button>
        </div>
      </>
    );
  }
};

export default AutoCompleteInput;
