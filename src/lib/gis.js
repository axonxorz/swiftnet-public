import { isNil } from "lodash-es";

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

export const geocodeAddress = async (address) => {
    const url = `/api/geocode?address=${address}`;
    return fetch(url, {
        method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.status === "OK") {
            const result = data.results[0];
            return result.geometry.location;
        } else {
            return Promise.reject(data.status);
        }
    })
};

export const reverseGeocode = async (lat, lng) => {
    if(isNil(lat) || isNil(lng)) {
        return Promise.reject('Invalid arguments');
    }
    const url = `/api/geocode_reverse?lat=${lat}&lng=${lng}`;
    return fetch(url, {
        method: "POST"
    })
    .then((response) => {
        return response.ok ? response.json() : Promise.reject('Server error');
    })
    .then((data) => {
        if (data.status === "OK") {
            const result = data.results[0];
            return result.geometry.location;
        } else {
            return Promise.reject(data.status);
        }
    })
};