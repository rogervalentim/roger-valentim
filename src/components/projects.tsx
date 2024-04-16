import { projectsaData } from "../constants";
import { CardProjects } from "./card-projects";
import { motion } from "framer-motion";

export function Projects() {
  const container = {
    hidden: {},
    visible: {
    transition: { staggerChildren: 0.2 }
    }
}

  return (
    <>
      <h1 className="text-center font-bold text-3xl lg:text-4xl pt-16 underline" id="Projetos">Projetos</h1>
      <motion.section className="flex justify-center"  
      initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       variants={container}>
        {projectsaData.map((item) => (
          <CardProjects 
           key={item.id} 
           name={item.name}
           description={item.description}
           image={item.image}
           technologies={item.technologies}
           deploy={item.deploy}
           repository={item.repository}
          />
        ))}
      </motion.section>
    </>
  );
}
