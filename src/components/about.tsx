import { ArrowDownToLine } from "lucide-react";
import computer from "../assets/computer.jpg";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export function About() {
  return (
    <>
    <h1 className="text-center font-bold text-3xl lg:text-4xl pt-16 underline underline-offset-1">Sobre mim</h1>
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
      <p className="leading-normal text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        quisquam nihil quod velit,<br/> repellendus amet officiis tempore<br/> voluptatum
        delectus dolores non quibusdam pariatur nemo magnam<br/> voluptatem neque
        corrupti molestiae recusandae?
      </p>
      </motion.div>
      <Button type="button" className="font-bold flex gap-2 mt-4 text-chetwode-blue-950 bg-gradient-to-t from-chetwode-blue-500 to-chetwode-blue-600 hover:bg-gradient-to-t hover:from-chetwode-blue-600 hover:to-chetwode-blue-700">
        Baixar CV
        <ArrowDownToLine className="text-chetwode-blue-950" />
      </Button>
      </div>

    </section>
    </>
  );
}
