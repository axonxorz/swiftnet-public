import { create } from "zustand";

export const useStore = create((set) => ({
  ipAddress: "",
  priority: false,
  setPriority: (priority) => set(() => ({ priority })),
  setIpAddress: (ipAdress) => set(() => ({ ipAddress: ipAdress })),
}));
