import { create } from "zustand";

export type IWord = {
  name: string;
  label: string;
};

type Store = {
  selected: IWord[];
  append: (word: IWord) => void;
  remove: (word: IWord) => void;
  clear: () => void;
};

export const useStore = create<Store>()((set) => ({
  selected: [],
  append: (word: IWord) =>
    set((state) => ({ selected: [...state.selected, word] })),
  remove: (word: IWord) =>
    set((state) => ({ selected: state.selected.filter((w) => w !== word) })),
  clear: () => set({ selected: [] }),
}));