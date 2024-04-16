import { ArrowDownToLine } from "lucide-react";
import computer from "../assets/computer.jpg";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

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
      Com uma sólida compreensão das tecnologias web modernas e um olhar atento para o design, me dedico a construir interfaces limpas, responsivas e acessíveis.<br/> 
      Acredito que um bom design é mais do que apenas aparência;
      é sobre criar uma interação intuitiva e eficiente entre o usuário e a aplicação.
      Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente e contribuir para projetos inovadores.
      Se você está procurando um desenvolvedor que possa transformar suas ideias em realidade e agregar valor ao seu projeto, vamos conversar!
      </p>
      </motion.div>
      <Button type="button" className="font-bold flex gap-2 mt-4 text-ronchi-950 bg-gradient-to-t from-ronchi-500 to-ronchi-600 hover:bg-gradient-to-t hover:from-ronchi-600 hover:to-ronchi-700">
        Baixar CV
        <ArrowDownToLine className="text-ronchi-950" />
      </Button>
      </div>

    </section>
    </>
  );
}
