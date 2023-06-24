import { create } from "zustand";

export const useStore = create((set) => ({
  ipAddress: "",
  setIpAddress: (ipAdress) => set(() => ({ ipAddress: ipAdress })),
}));
