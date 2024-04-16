import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { projectsaData } from "../constants";
import { CardProjects } from "./card-projects";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
 

export function Projects() {
  const container = {
    hidden: {},
    visible: {
    transition: { staggerChildren: 0.2 }
    }
}

const plugin = React.useRef(
  Autoplay({ delay: 2000, stopOnInteraction: true })
)

  return (
    <>
      <h1 className="text-center font-bold text-3xl lg:text-4xl pt-16 underline" id="Projetos">Projetos</h1>
      <motion.section className="flex justify-center"  
      initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       variants={container}>
      <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {projectsaData.map((item) => (
          <CarouselItem>
          <CardProjects 
           key={item.id} 
           name={item.name}
           description={item.description}
           image={item.image}
           technologies={item.technologies}
           deploy={item.deploy}
           repository={item.repository}
          />
          </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
      </motion.section>
    </>
  );
}
