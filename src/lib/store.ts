import { create } from "zustand";

type Store = {
  selected: string[];
  append: (word: string) => void;
  remove: (word: string) => void;
};

export const useStore = create<Store>()((set) => ({
  selected: [],
  append: (word: string) =>
    set((state) => ({ selected: [...state.selected, word] })),
  remove: (word: string) =>
    set((state) => ({ selected: state.selected.filter((w) => w !== word) })),
}));
