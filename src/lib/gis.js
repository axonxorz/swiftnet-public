import { includes, isNil } from "lodash-es";

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

export class AddressInfo {
    constructor(results) {
        // Grab only components we want from a Google Geocode API result
        const filteredResults = results.filter((result) => {
            return !includes(result.types, 'plus_code');
        })
        const filteredComponents = filteredResults[0].address_components.filter(component => {
            return (
                component.types.includes('country') ||
                component.types.includes('locality') ||
                component.types.includes('postal_code')
            );
        });
        this.fullAddress = filteredResults[0].formatted_address;
        this.postalCode = filteredComponents.find(component => component.types.includes('postal_code'))?.long_name;
        this.city = filteredComponents.find(component => component.types.includes('locality'))?.long_name;
        this.country = filteredComponents.find(component => component.types.includes('country'))?.long_name;
    }

}

export const reverseGeocode = (lat, lng) => {
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
        if(data.status === "OK") {
            return new AddressInfo(data.results);
        } else {
            return Promise.reject(data.status);
        }
    })
};