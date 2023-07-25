import { create } from "zustand";

export const useStore = create((set) => ({
  id: "",
  ipAddress: "",
  address: "",
  email: "",
  lat: 0,
  lng: 0,
  confirm: false,
  completeProcess: false,
  phoneNb: 0,
  step: "",
  status: "",
  setStep: (step) => set(() => ({ step })),
  setStatus: (status) => set(() => ({ status })),
  setCompleteProcess: (completeProcess) => set(() => ({ completeProcess })),
  setIpAddress: (ipAddress) => set(() => ({ ipAddress })),
  setAddress: (address) => set(() => ({ address })),
  setEmail: (email) => set(() => ({ email })),
  setLat: (lat) => set(() => ({ lat })),
  setLng: (lng) => set(() => ({ lng })),
  setConfirm: (confirm) => set(() => ({ confirm })),
}));
