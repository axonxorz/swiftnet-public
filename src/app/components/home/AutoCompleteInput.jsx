"use client";
import styles from "@/app/styles/styles";
import React from "react";
import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";

import loader from '@/lib/gmaps'
import { swiftAutocompleteOptions } from "@/lib/gis";
import { useUserLocationStore } from "@/store";
import { isNil } from "lodash-es";

const AutoCompleteInput = ({place}) => {
    const router = useRouter();
    const autoCompleteRef = useRef();
    const inputRef = useRef();
    const locationStore = useUserLocationStore();

    const localOptions = {
        fields: ["address_components", "geometry", "icon", "name"],
    };
    useEffect(() => {
        loader.load().then(async (google) => {
            const autocompleter = new google.maps.places.Autocomplete(
                inputRef.current,
                Object.assign({}, swiftAutocompleteOptions, localOptions)
            );
            autoCompleteRef.current = autocompleter;
            autocompleter.addListener('place_changed', async () => {
                const place = await autocompleter.getPlace();
                locationStore.setAddress(inputRef.current.value);
                if(place) {
                    locationStore.setCoordinates(
                        place.geometry?.location?.lat() || null,
                        place.geometry?.location?.lng() || null
                    )
                }
            })
        })
    }, []);

    useEffect(() => {
        if(locationStore.address || (!isNil(locationStore.lat) && !isNil(locationStore.lng))) {
            checkAvailability();
        }
    })

    const checkAvailability = (raw=false) => {
        let address;
        if(raw) {
            address = inputRef.current.value;
        } else {
            address = locationStore.address;
        }
        const {lat, lng} = locationStore;
        let route = '/map';
        let search = new URLSearchParams();
        if(!!address) {
            search.set('address', address);
        }
        if(lat !== null && lng !== null) {
            search.set('lat', lat);
            search.set('lng', lng);
        }
        router.push(`${route}?${search}`);
    };

    if (place === "home") {
        return (
            <>
                <div className="w-full relative bg-white  p-1 md:p-0 rounded-md">
                    <input
                        placeholder="Enter Your address"
                        ref={inputRef}
                        className=" block min-h-[30px] w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />

                    <button
                        type="submit"
                        onClick={() => checkAvailability(true)}
                        className={`bg-primary border-none rounded-md ${styles.paragraph}   text-white px-4 py-2 absolute md:flex  items-center justify-center top-0  md:bottom-[50%] right-0   h-full `}
                    >
                        Check Availability
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
                        type="text"
                        placeholder="Enter Your address"
                        ref={inputRef}
                        className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>

                <div className="w-full  mt-4">
                    <button
                        type="submit"
                        onClick={() => checkAvailability(true)}
                        className={`bg-primary border-none hover:bg-primary/80 rounded-md ${styles.paragraph} text-white px-4 py-2 w-full `}
                    >
                        Check availability
                    </button>
                </div>
            </>
        );
    }
};

export default AutoCompleteInput;
