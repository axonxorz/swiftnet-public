import { create } from "zustand";
import { isNil } from "lodash-es";

export const useSessionStore = create((set) => ({
    sessionId: null,
    ipAddress: "",
    priority: false,
    setSessionId: (sessionId) => set({sessionId: sessionId}),
    setPriority: (priority) => set(() => ({priority})),
    setIpAddress: (ipAddress) => set(() => ({ipAddress: ipAddress})),
}));

export const useUserLocationStore = create((set, get) => ({
    address: null,
    reverseGeocodedAddress: null,
    rawCoordinates: null,
    setAddress: (address) => set({address: address}),
    setReverseGeocodedAddress: (reverseGeocodedAddress) => set({reverseGeocodedAddress: reverseGeocodedAddress}),
    getResolvedAddress: () => {
        const {address, reverseGeocodedAddress} = get();
        return !!address ? address : reverseGeocodedAddress;
    },
    getResolvedCoordinates: () => {
        // Return coordinates as a LatLngLiteral preferentially from address, then geocodedAddress, then null
        const {address, reverseGeocodedAddress} = get();
        if(!isNil(address?.lat) && !isNil(address?.lng)) {
            return {lat: address.lat, lng: address.lng}
        }
        if(!isNil(reverseGeocodedAddress?.lat) && !isNil(reverseGeocodedAddress?.lng)) {
            return {lat: reverseGeocodedAddress.lat, lng: reverseGeocodedAddress.lng}
        }
        return null;
    },
    setRawCoordinates: (lat, lng) => set({rawCoordinates: {lat: lat, lng: lng}})
}));