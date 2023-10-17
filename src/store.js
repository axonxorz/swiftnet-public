import { create } from "zustand";

export const useSessionStore = create((set) => ({
    sessionId: null,
    ipAddress: "",
    priority: false,
    setSessionId: (sessionId) => set({sessionId: sessionId}),
    setPriority: (priority) => set(() => ({priority})),
    setIpAddress: (ipAddress) => set(() => ({ipAddress: ipAddress})),
}));

export const useUserLocationStore = create((set) => ({
    address: '',
    lat: null,
    lng: null,
    setAddress: (address) => set({address: address}),
    setCoordinates: (lat, lng) => set({lat: lat, lng: lng})
}));