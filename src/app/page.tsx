"use client";
import { useState } from "react";
import { create } from "zustand";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { Button } from "~/components/ui/button";

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
  "Doce",
  "Kombi",
  "Janela",
  "Livro",
  "Palmito",
  "Colher",
  "Chuva",
  "Vento",
  "Pizza",
  "Caneta",
  "Chave",
];

const answers = {
  tempo: ["Fogo", "Frio", "Vento", "Chuva"],
  comida: ["Banana", "Doce", "Palmito", "Pizza"],
  casa: ["Janela", "Livro", "Colher", "Chave"],
  transporte: ["Foguete", "Carro", "Kombi", "Caneta"],
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
        <Button
          className="px-2 py-5 lg:p-10 hover:animate-wiggle"
          onClick={() => handleToggle(word)}
        >
          <h2 className={`text-xs lg:text-2xl font-semibold`}>{children}</h2>
        </Button>
      ) : (
        <Button
          disabled={selected.length > 3}
          variant={"outline"}
          onClick={() => handleToggle(word)}
          className="px-2 py-5 lg:p-10 hover:animate-wiggle"
        >
          <h2 className={`text-xs lg:text-2xl font-semibold`}>{children}</h2>
        </Button>
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
          <span className="h-7 w-7 text-neutral-700 hover:text-slate-200">
            ?
          </span>
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
        <Lightbulb className="fill-black dark:fill-white" size={20} />
        <Lightbulb className="fill-black dark:fill-white" size={20} />
        <Lightbulb size={20} />
        <Lightbulb size={20} />
      </div>

      <div className="grid grid-cols-2 items-center justify-center gap-2">
        <Button variant="outline">
          Misturar
        </Button>
        <Button
          variant={selected.length < 4 ? "outline" : "default"}
          disabled={selected.length < 4}
        >
          Chutar
        </Button>
      </div>
    </main>
  );
}
