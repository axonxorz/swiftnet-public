import { create } from "zustand";

export const ipAddressStore = create((set) => ({
  ipAddress: "",
  priority: false,
  setPriority: (priority) => set(() => ({ priority })),
  setIpAddress: (ipAddress) => set(() => ({ ipAddress: ipAddress })),
}));
