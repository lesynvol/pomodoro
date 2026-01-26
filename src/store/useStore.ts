import { create } from "zustand";

interface AppState {
  user: null | object;
  setUser: (user: object | null) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
