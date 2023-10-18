import { isNil } from "lodash-es";
import { AddressInfo } from "@/lib/address-info";
import { NextResponse } from "next/server";

// Generously cover AB, SK
// WKT: POLYGON((-120.33 60.21, -100.79 60.21, -100.79 48.65, -120.33 48.65, -120.33 60.21))
export const canadaBounds = {
    'west': -120.3259054496,
    'east': -100.7922140434,
    'north': 60.207498845,
    'south': 48.6479913104
}

export const swiftAutocompleteOptions = {
    bounds: canadaBounds,
    componentRestrictions: {
        country: 'ca'
    }
}

export const defaultMapCenter = {
    lat: 53.31225509999999,
    lng: -110.072853,
}

const VALID_REFERERS = [
    new RegExp('https://.*\.vercel.app/.*'),
    new RegExp('https://.*swift-net\.ca/.*'),
    new RegExp('http[s]?://localhost.*'),
]


export class RefererAclFailure { }


export const guardGisEndpoint = (referer) => {
    // Ensure GIS requests are coming from a validated HTTP Referer
    if (!referer || !VALID_REFERERS.some((valid) => valid.test(referer))) {
        throw new RefererAclFailure();
    }
}


export const geocodeAddress = async (address) => {
    const url = `/api/geocode?address=${address}`;
    return fetch(url, {
        method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.status === "OK") {
            return AddressInfo.fromGeocodeResult(data.results[0].formatted_address || address, data.results[0]);
        } else {
            console.log(data);
            // TODO: nice error message
            return Promise.reject(data.status);
        }
    })
};

export const reverseGeocode = (lat, lng) => {
    if(isNil(lat) || isNil(lng)) {
        return Promise.reject('Coordinates not provided');
    }
    const url = `/api/geocode_reverse?lat=${lat}&lng=${lng}`;
    return fetch(url, {
        method: "POST"
    })
    .then((response) => {
        return response.ok ? response.json() : Promise.reject('Server error');
    })
    .then((data) => {
        if(data.status === "OK") {
            return AddressInfo.fromReverseGeocodeResults(data.results);
        } else {
            return Promise.reject(data.status);
        }
    })
};