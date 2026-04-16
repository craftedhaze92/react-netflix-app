import { create } from "zustand";
import { Movie } from "@/types";

interface MovieModalStore {
  isOpen: boolean;
  movie: Movie | null;
  forYouPercent: number;
  openModal: (movie: Movie) => void;
  closeModal: () => void;
}

export const useMovieModalStore = create<MovieModalStore>((set) => ({
  isOpen: false,
  movie: null,
  forYouPercent: 0,
  openModal: (movie) =>
    set({
      isOpen: true,
      movie,
      forYouPercent: Math.floor(Math.random() * 100),
    }),
  closeModal: () => set({ isOpen: false, movie: null }),
}));
