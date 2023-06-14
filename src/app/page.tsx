"use client";
import { useState } from "react";
import { useStore } from "~/lib/store";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb } from "lucide-react";
import { Button } from "~/components/ui/button";
import ConfettiExplosion from "react-confetti-explosion";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import shuffle from "lodash.shuffle";

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
    <motion.div layout>
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
          className="lg:min-w-[185px] px-2 py-5 lg:p-10 hover:animate-wiggle"
        >
          <h2 className={`text-xs lg:text-2xl font-semibold`}>{children}</h2>
        </Button>
      )}
    </motion.div>
  );
};

export default function Home() {
  const [bears, setBears] = useState(words);
  const [isExploding, setIsExploding] = useState(false);
  const { selected } = useStore();
  const variants = {
    hidden: { opacity: 0.5 },
    visible: { opacity: 1 },
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2 className="text-sm text-muted-foreground">Escolha 4 palavras</h2>
      </div>
      {isExploding && (
        <ConfettiExplosion
          force={0.8}
          duration={3000}
          particleCount={250}
          width={1600}
        />
      )}

      {/* <Card className="col-span-4 bg-amber-400">
          <CardHeader>
            <CardTitle>Tempo</CardTitle>
            <CardDescription>
              {" "}
              Palavras que se referem ao tempo.
            </CardDescription>
          </CardHeader>
        </Card> */}
      {/* <Card className="col-span-4 bg-lime-400">
      <CardHeader>
        <CardTitle>Tempo</CardTitle>
        <CardDescription> Palavras que se referem ao tempo.</CardDescription>
      </CardHeader>
      </Card>
      <Card className="col-span-4 bg-cyan-400">
      <CardHeader>
        <CardTitle>Tempo</CardTitle>
        <CardDescription> Palavras que se referem ao tempo.</CardDescription>
      </CardHeader>
      </Card>
      <Card className="col-span-4 bg-purple-400">
      <CardHeader>
        <CardTitle>Tempo</CardTitle>
        <CardDescription> Palavras que se referem ao tempo.</CardDescription>
      </CardHeader>
      </Card> */}
      <AnimatePresence>
        <div className="grid grid-cols-4 gap-1">
            {bears.map((word) => (
              <ToggleButton word={word} key={word}>
                {word}
              </ToggleButton>
            ))}
        </div>
      </AnimatePresence>

      <div className="grid grid-cols-4 gap-2">
        <Lightbulb className="fill-black dark:fill-white" size={20} />
        <Lightbulb className="fill-black dark:fill-white" size={20} />
        <Lightbulb size={20} />
        <Lightbulb size={20} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button onClick={() => setBears(shuffle(bears))} variant="outline">
          Misturar
        </Button>
        <Button
          variant={selected.length < 4 ? "outline" : "default"}
          disabled={selected.length < 4}
          onClick={() => setIsExploding(true)}
        >
          Chutar
        </Button>
      </div>
    </main>
  );
}
