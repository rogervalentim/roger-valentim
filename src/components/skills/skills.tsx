import { skills } from "../../constants";
import { CardSkills } from "./card-skills";
import { motion } from "framer-motion";

export function Skills() {
  const container = {
    hidden: {},
    visible: {
    transition: { staggerChildren: 0.2 }
    }
}

  return (
    <>
    <h1 className="text-center font-bold text-3xl lg:text-4xl underline  pt-16" id="Tecnologias">Tecnologias</h1>
    <section className="flex justify-around">
     <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4 mt-6" 
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       variants={container}>
    {skills.map(skill => (
       <CardSkills 
        key={skill.name}
        name={skill.name}
        icon={skill.icon}
       />
       ))}
    </motion.div>
    </section>
    </>
  );
}
