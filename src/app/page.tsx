"use client";
import { useState } from "react";
import { create } from "zustand";
import { motion } from "framer-motion";
import { Lightbulb, HelpCircle } from "lucide-react";

type Store = {
  selected: string[];
  append: (word: string) => void;
  remove: (word: string) => void;
};

const useStore = create<Store>()((set) => ({
  selected: [],
  append: (word: string) =>
    set((state) => ({ selected: [...state.selected, word] })),
  remove: (word: string) =>
    set((state) => ({ selected: state.selected.filter((w) => w !== word) })),
}));

const words = [
  "Banana",
  "Fogo",
  "Frio",
  "Foguete",
  "Carro",
  "Chocolate",
  "Computador",
  "Janela",
  "Livro",
  "Palmeiras",
  "Loja",
  "Vaca",
  "Vento",
  "Copo",
  "Caneta",
  "Chave",
];

const answers = {
  tempo: ["Fogo", "Frio", "Vento", "Vaca"],
  comida: ["Banana", "Chocolate", "Palmeiras", "Copo"],
  casa: ["Janela", "Livro", "Loja", "Chave"],
  transporte: ["Foguete", "Carro", "Computador", "Caneta"],
};

const ToggleButton = ({
  word,
  children,
}: {
  word: string;
  children: React.ReactNode;
}) => {
  const { selected, append, remove } = useStore();
  const [isOn, setIsOn] = useState(false);

  const handleToggle = (word: string) => {
    if (!isOn) {
      append(word);
    } else {
      remove(word);
    }
    setIsOn((isOn) => !isOn);
  };

  return (
    <>
      {isOn ? (
        <button
          className="group bg-purple-600 rounded border border-transparent lg:p-10 transition-colors hover:scale-110 hover:border-amber-400  hover:dark:bg-purple-400"
          onClick={() => handleToggle(word)}
        >
          <h2 className={`text-xs lg:text-2xl font-semibold`}>{children}</h2>
        </button>
      ) : (
        <button
          disabled={selected.length > 3}
          onClick={() => handleToggle(word)}
          className="group bg-slate-800 rounded border border-transparent px-4 py-8 lg:p-10 transition-colors hover:animate-wiggle hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`text-xs lg:text-2xl font-semibold`}>{children}</h2>
        </button>
      )}
    </>
  );
};

export default function Home() {
  const [bears, setBears] = useState(words);
  const { selected } = useStore();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="absolute top-0 right-0 h-12 w-12 py-2">
          <button className="flex rounded-full border border-neutral-700 transition-colors hover:dark:border-neutral-200 hover:dark:bg-slate-800">
            <span className="h-7 w-7 text-neutral-700 hover:text-slate-200" >?</span>
          </button>
        </div>
      <div className="grid -mx-12 place-content-center text-center lg:mb-0 grid-cols-4 gap-1">
        {words.map((word) => (
          <ToggleButton word={word} key={word}>
            {word}
          </ToggleButton>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <Lightbulb fill="white" size={20} />
        <Lightbulb fill="white" size={20} />
        <Lightbulb fill="white" size={20} />
        <Lightbulb size={20} />
      </div>

      <div className="grid grid-cols-2 items-center justify-center gap-2">
        <button className="bg-slate-800 rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          Misturar
        </button>
        <button
          className="bg-slate-800 rounded-lg border border-transparent px-5 py-4 transition-colors hover:scale-110 hover:border-amber-400  hover:dark:bg-purple-600"
          disabled={selected.length < 4}
        >
          Chutar
        </button>
      </div>
    </main>
  );
}
