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
    address: '',
    lat: null,
    lng: null,
    setAddress: (address) => set({address: address}),
    getCoordinates: () => {
        // Return coordinates as a LatLngLiteral or null
        const {lat, lng} = get();
        if(isNil(lat) || isNil(lng)) {
            return null;
        }
        return {lat: get().lat, lng: get().lng}
    },
    setCoordinates: (lat, lng) => set({lat: lat, lng: lng})
}));