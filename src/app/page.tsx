"use client";
import { useEffect, useState } from "react";
import { IWord, useStore } from "~/lib/store";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { Button } from "~/components/ui/button";
import ConfettiExplosion from "react-confetti-explosion";
import shuffle from "lodash.shuffle";
import { vocabulary } from "~/lib/words";

const ToggleButton = ({
  word,
  children,
}: {
  word: IWord;
  children: React.ReactNode;
}) => {
  const { selected, append, remove } = useStore();
  const [isOn, setIsOn] = useState(false);

  const handleToggle = (word: IWord) => {
    // check if the word is in the selected array
    if (!selected.find((w) => w.name === word.name)) {
      append(word);
    } else {
      remove(word);
    }
    setIsOn((s) => !s);
  };

  return (
    <motion.div layout>
      {isOn ? (
        <Button
          className="w-full h-16 hover:animate-wiggle"
          onClick={() => handleToggle(word)}
        >
          <h2 className={`text-xs lg:text-2xl font-semibold`}>{children}</h2>
        </Button>
      ) : (
        <Button
          disabled={selected.length > 3}
          variant={"outline"}
          onClick={() => handleToggle(word)}
          className="w-full h-16 hover:animate-wiggle"
        >
          <h2 className={`text-xs lg:text-2xl font-semibold`}>{children}</h2>
        </Button>
      )}
    </motion.div>
  );
};

export default function Home() {
  const selectWords = () => {
    // get 4 random keys from vocabulary object
    const keys = shuffle(Object.keys(vocabulary)).slice(0, 4);
    // get 4 random words from each array of words in vocabulary object from the selected keys
    return keys
      .map((key) =>
        shuffle(vocabulary[key])
          .slice(0, 4)
          .map((word) => ({ name: word, label: key } as IWord))
      )
      .flat();
  };
  const [words, setWords] = useState<IWord[]>([]);
  const [isExploding, setIsExploding] = useState(false);
  const { selected, clear } = useStore();
  const [chances, setChances] = useState(4);
  const [mainkey, setMainkey] = useState(0);
  const [wordStateKey, setWordStateKey] = useState(0);

  useEffect(() => {
    setWords(() => selectWords());
  }, []);

  const handleSubmit = () => {
    console.log(selected);
    // if all selected words are from the same label, then the user chances
    const labels = selected.map((w) => w.label);
    const isSameLabel = labels.every((label) => label === labels[0]);
    if (isSameLabel) {
      // remove the selected words from the words array
      setWords(words.filter((w) => !selected.includes(w)));
      console.log("You win!");
      setIsExploding(true);
    }
    // unselect all words
    clear();
    setWordStateKey(wordStateKey + 1);
    setChances((c) => c - 1);
  };

  const handleReset = () => {
    clear();
    setWords(selectWords());
    console.log(selectWords());
    setMainkey(mainkey + 1);
    setChances(4);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">
      <div>
        <h1 className="py-2 text-center text-sm text-muted-foreground">
          Escolha 4 palavras
        </h1>

        {isExploding && (
          <ConfettiExplosion
            force={0.8}
            duration={3000}
            particleCount={250}
            width={1600}
            onComplete={() => setIsExploding(false)}
          />
        )}
        <motion.div
          className="grid grid-cols-4 gap-1"
          layout
          animate={{ scale: [1, 1.1, 0.9, 1], rotate: [-5, 0, 5, 0] }}
          transition={{
            duration: 0.1,
            type: "spring",
            stiffness: 6000,
            damping: 4,
          }}
          key={wordStateKey}
        >
          <AnimatePresence>
            {words.map((word) => (
              <ToggleButton word={word} key={word.name}>
                {word.name}
              </ToggleButton>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-4 gap-2">
        {[...Array(chances)].map((_, i) => (
          <Lightbulb
            className="fill-black dark:fill-white"
            size={20}
            key={"bulb_" + i}
          />
        ))}
        {[...Array(4 - chances)].map((_, i) => (
          <Lightbulb size={20} key={"bulb_" + i} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Button variant="outline" onClick={handleReset}>
          Novo Jogo
        </Button>
        <Button
          onClick={() => setWords(shuffle(words))}
          variant="outline"
        >
          Misturar
        </Button>
        <Button
          onClick={handleSubmit}
          variant={selected.length < 4 ? "outline" : "default"}
          disabled={selected.length < 4}
        >
          Chutar
        </Button>
      </div>
    </main>
  );
}
