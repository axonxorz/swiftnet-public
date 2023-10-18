export class AddressInfo {

    constructor(lat, lng, fullAddress, city, province, postalCode, country) {
        this.lat = lat;
        this.lng = lng;
        this.fullAddress = fullAddress;
        this.city = city;
        this.province = province;
        this.postalCode = postalCode;
        this.country = country;

        this.reverseGeocoded = false;
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
                if (component.types.includes('plus_code')) {
                    hasPlusCode = true;
                    return false;
                }
            });
            return !hasPlusCode;
        });
        if (filteredResults.length) {
            let result = filteredResults[0];
            const parsed = AddressInfo.fromGeocodeResult(result.formatted_address, result);
            parsed.reverseGeocoded = true;
            return parsed;
        } else {
            throw new Error('No results returned');
        }
    }
}