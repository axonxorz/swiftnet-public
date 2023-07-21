import { create } from "zustand";

export const useStore = create((set) => ({
  id: "",
  ipAddress: "",
  address: "",
  email: "",
  lat: 0,
  lng: 0,
  country: "",
  city: "",
  zip: "",
  confirm: false,
  completeProcess: false,
  phoneNb: 0,
  setCompleteProcess: (completeProcess) => set(() => ({ completeProcess })),
  setIpAddress: (ipAdress) => set(() => ({ ipAddress: ipAdress })),
  setAddress: (address) => set(() => ({ address })),
  setEmail: (email) => set(() => ({ email })),
  setLat: (lat) => set(() => ({ lat })),
  setLng: (lng) => set(() => ({ lng })),
  setCountry: (country) => set(() => ({ country })),
  setCity: (city) => set(() => ({ city })),
  setZip: (zip) => set(() => ({ zip })),
  setConfirm: (confirm) => set(() => ({ confirm })),
  // Additional state to keep track of changes (optional but helpful)
  // isChanged: false,

  // Update the 'isChanged' state to true whenever any field changes
  // onCreate: () => set((state) => ({ isChanged: true })),
}));
