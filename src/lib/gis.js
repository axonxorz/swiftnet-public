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

export class AddressInfo {

    constructor(lat, lng, fullAddress, city, province, postalCode, country) {
        this.lat = lat;
        this.lng = lng;
        this.fullAddress = fullAddress;
        this.city = city;
        this.province = province;
        this.postalCode = postalCode;
        this.country = country;
    }

    static filterPlusCodes(addressComponents) {
        // Remove plus_code results, they are often first
        return addressComponents.filter((component) => {
            return !component.types.includes('plus_code');
        });
    }

    static fromPlacesResult(fullAddress, place) {
        // Mostly the same shape as a Geocode result, but geometry is wrapped in getters, unwrap the values we need.
        place.geometry.location.lat = place.geometry.location.lat();
        place.geometry.location.lng = place.geometry.location.lng();
        return AddressInfo.fromGeocodeResult(fullAddress, place);
    }

    static fromGeocodeResult(fullAddress, place) {
        const filteredAddressComponents = AddressInfo.filterPlusCodes(place.address_components);
        const filteredComponents = filteredAddressComponents.filter(component => {
            // Grab only components we want from a result
            return (
                component.types.includes('country') ||
                component.types.includes('administrative_area_level_1') || // province
                component.types.includes('postal_code') ||
                component.types.includes('locality') // city
            );
        });
        return new AddressInfo(
            place.geometry.location.lat,
            place.geometry.location.lng,
            fullAddress,
            filteredComponents.find(component => component.types.includes('locality'))?.long_name,
            filteredComponents.find(component => component.types.includes('administrative_area_level_1'))?.long_name,
            filteredComponents.find(component => component.types.includes('postal_code'))?.long_name,
            filteredComponents.find(component => component.types.includes('country'))?.long_name
        );
    }

    static fromReverseGeocodeResults(results) {
        const filteredResults = results.filter((result) => {
            // Remove any result that has a 'plus_code' address component
            let hasPlusCode = false;
            result.address_components.forEach((component) => {
                if(component.types.includes('plus_code')) { hasPlusCode = true; return false; }
            });
            return !hasPlusCode;
        });
        if(filteredResults.length) {
            let result = filteredResults[0];
            return AddressInfo.fromGeocodeResult(result.formatted_address, result);
        } else {
            throw new Error('No results returned');
        }
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