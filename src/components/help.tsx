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

export function Help() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm">
          <HelpCircle />
          <span className="sr-only">Need Help?</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Como jogar</DialogTitle>
          <DialogDescription>
            Encontre grupos de 4 palavras que compartilhem de alguma categoria.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div>
            <ul className="list-disc p-5">
              <li>
                Escolha 4 itens e clique em <b>Chutar</b> para checar se seu
                palpite está correto.
              </li>
              <li>Você pode errar no máximo 4 vezes!</li>
            </ul>
          </div>
          <span className="font-bold">Exemplos de categorias:</span>
          <ul className="list-disc p-5">
            <li><b>TEMPO:</b> Chuva, Calor, Neve, Nublado</li>
            <li><b>FUTEBOL:</b> BOLA, QUADRA, GOL, CHUTEIRA</li>
          </ul>
          <span className="font-semibold">Dica: </span>
          Categorias sempre serão mais específicas que &quot;NOMES&quot;,
          &quot;LUGARES&quot;, &quot;COISAS&quot;.
        </div>
        <DialogFooter>        
          <i>Cuidado, algumas categorias
          podem ser complicadas!</i>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
