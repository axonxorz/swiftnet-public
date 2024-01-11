import { isNil } from "lodash-es";
import { AddressInfo } from "@/lib/address-info";
import { backendClient } from "@/lib/backend";

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
    const url = '/api/geocode';
    return backendClient.get(url, {
        params: {address}
    })
    .then((response) => {
        return AddressInfo.fromGeocodeResult(response.data.results[0].formatted_address || address, response.data.results[0]);
    })
    .catch((error) => {
        console.log(error);
        // TODO: nice error message
        return Promise.reject(error);
    });
};

export const reverseGeocode = (lat, lng) => {
    if(isNil(lat) || isNil(lng)) {
        return Promise.reject('Coordinates not provided');
    }
    const url = '/api/geocode_reverse';
    return backendClient.post(url, {}, {params: {lat, lng}
    })
    .then((response) => {
        return AddressInfo.fromReverseGeocodeResults(response.data.results);
    })
    .catch((error) => Promise.reject('Server error'));
};
