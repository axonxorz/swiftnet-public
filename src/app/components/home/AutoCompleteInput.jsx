"use client";
import React, { useState } from "react";
import { useRef, useEffect } from "react";

import loader from '@/lib/gmaps'
import styles from "@/app/styles/styles";
import { geocodeAddress, swiftAutocompleteOptions } from "@/lib/gis";
import { toast } from "react-hot-toast";
import { AddressInfo } from "@/lib/address-info";

const AutoCompleteInput = ({ place, resolved, resolvedSimple }) => {
    const autoCompleteRef = useRef();
    const inputRef = useRef();
    const [loading, setLoading] = useState(false);

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
                setLoading(true);
                try {
                    const place = await autocompleter.getPlace();
                    if(place) {
                        const parsed = AddressInfo.fromPlacesResult(
                            inputRef.current.value,
                            place
                        );
                        if(resolved) { resolved(parsed) }
                    }
                } finally {
                    setLoading(false);
                }
            })
        })
    }, []);

    const resolveAddress = async () => {
        if(!inputRef.current.value) {
            toast.error('Please enter an address');
        }
        setLoading(true);
        try {
            const place = await geocodeAddress(inputRef.current.value);
            if(place) {
                resolved(place);
            }
        } catch(e) {
            console.log('resolveAddress error', e);
        } finally {
            setLoading(false)
        }
    }

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
                        onClick={resolveAddress}
                        disabled={loading}
                        className={`bg-primary border-none rounded-md ${styles.paragraph}   text-white px-4 py-2 absolute md:flex  items-center justify-center top-0  md:bottom-[50%] right-0   h-full `}
                    >
                        {!loading ? 'Check availability' : 'Checking...'}
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
                        onClick={resolveAddress}
                        disabled={loading}
                        className={`bg-primary border-none hover:bg-primary/80 rounded-md ${styles.paragraph} text-white px-4 py-2 w-full `}
                    >
                        {!loading ? 'Check availability' : 'Checking...'}
                    </button>
                </div>
            </>
        );
    }
};

export default AutoCompleteInput;
