import { create } from "zustand";

interface TrailerStore {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

export const useTrailerStore = create<TrailerStore>((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
}));
