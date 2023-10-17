import { create } from "zustand";

export const ipAddressStore = create((set) => ({
    sessionId: null,
    ipAddress: "",
    priority: false,
    setSessionId: (sessionId) => set({sessionId: sessionId}),
    setPriority: (priority) => set(() => ({priority})),
    setIpAddress: (ipAddress) => set(() => ({ipAddress: ipAddress})),
}));
