import { ArrowDownToLine } from "lucide-react";
import computer from "../../assets/computer.jpg";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import curriculum from "../../assets/CV-ROGER-VALENTIM-DESENVOLVEDOR-FRONT-END.pdf";

export function About() {
  return (
    <>
    <h1 className="text-center font-bold text-3xl lg:text-4xl pt-16 underline underline-offset-1" id="Sobre">Sobre mim</h1>
    <section className="block lg:flex lg:justify-around lg:items-center">

      <figure className="flex justify-center pt-4 lg:flex-col lg:max-w-lg">
        <img className="h-80 mx-w-sm rounded-lg" src={computer} alt="computador" />
      </figure>

      <div className="pt-4 flex flex-col items-center justify-center">
      <motion.div className="flex justify-center items-center max-w-sm lg:max-w-lg"
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, x: 50 },
           visible: { opacity: 1, x: 0 },
         }}>
      <p className="px-6 lg:px-0 leading-normal text-muted-foreground">
      Desenvolvedor Front-End Apaixonado com experiência prática na criação 
      de interfaces de usuário interativas e responsivas. Especializado em React 
      e TypeScript, com habilidade para construir componentes reutilizáveis e eficientes. 
      Proficiente no uso de Tailwind CSS para design utilitário de primeira classe, 
      garantindo uma estética consistente e moderna. Experiência com Shadcn UI 
      para um design de interface limpo e acessível, e Framer Motion 
      para adicionar animações fluidas e naturais, enriquecendo a experiência do usuário. 
      Comprometido com a escrita de código 
      limpo e a implementação de melhores práticas de desenvolvimento web.</p>
      </motion.div>
    <a href={curriculum} target="_blank">
      <Button type="button" className="font-bold flex gap-2 mt-4 text-ronchi-950 bg-gradient-to-t from-ronchi-500 to-ronchi-600 hover:bg-gradient-to-t hover:from-ronchi-600 hover:to-ronchi-700">
        Baixar CV
        <ArrowDownToLine className="text-ronchi-950" />
      </Button>
    </a> 
      </div>

    </section>
    </>
  );
}
