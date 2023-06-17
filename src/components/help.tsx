"use client";

import { Button } from "~/components/ui/button";
import { HelpCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { motion } from "framer-motion";

export function Help() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <HelpCircle />
          <span className="sr-only">Need Help?</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Que lab faz isso?</DialogTitle>
          <DialogDescription>
            Encontre grupos de 4 palavras que estejam relacionadas a um dos
            laboratórios.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="flex flex-col space-y-2">
            <h1>
              Escolha 4 itens e clique em <b>Chutar</b> para checar se seu
              palpite está correto.
            </h1>
            <h1>
              <div className="border-4 border-double grid grid-cols-4 p-4 gap-2 space-x-0">
                <span className="col-span-4 text-xs text-center font-semibold">
                  ⚠️ Você pode errar no máximo 4 vezes! ⚠️
                </span>
                <div className="px-8">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4 lucide lucide-lightbulb"
                    fill="none"
                    animate={{ fill: "currentColor", opacity: [0, 1] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2.0,
                      delay: 0.9,
                    }}
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </motion.svg>
                </div>
                <div className="px-8">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4 lucide lucide-lightbulb"
                    fill="none"
                    animate={{ fill: "currentColor", opacity: [0, 1] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2.0,
                      delay: 0.6,
                    }}
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </motion.svg>
                </div>
                <div className="px-8">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4 lucide lucide-lightbulb"
                    fill="none"
                    animate={{ fill: "currentColor", opacity: [0, 1] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2.0,
                      delay: 0.3,
                    }}
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </motion.svg>
                </div>
                <div className="px-8">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="w-4 h-4 lucide lucide-lightbulb"
                    fill="none"
                    animate={{ fill: "currentColor", opacity: [0, 1] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 2.0,
                      delay: 0.0,
                    }}
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6" />
                    <path d="M10 22h4" />
                  </motion.svg>
                </div>
              </div>
            </h1>
            <span className="font-bold">Exemplos:</span>
            <ul className="list-disc p-5">
              <li>
                <b>LNLS:</b> SÍNCROTRON, ELÉTRON, ACELERADOR, BOOSTER
              </li>
              <li>
                <b>LNBio:</b> CÉLULA, VÍRUS, CAMUNDONGO, VACINA
              </li>
            </ul>
          </div>
        </div>
        <DialogFooter>
          <i>Cuidado, algumas palavras podem enganar!</i>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
