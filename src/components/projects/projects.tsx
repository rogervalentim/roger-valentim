import { motion } from "framer-motion";
import { CarouselProjects } from "./carousel-projects";
import { useTranslation } from "react-i18next";
 
export function Projects() {
  const { t } = useTranslation();
  
  const container = {
    hidden: {},
    visible: {
    transition: { staggerChildren: 0.2 }
    }
}

  return (
    <>
      <h1 className="text-center font-bold text-3xl lg:text-4xl pt-16 underline" id="Projetos">{t("projects")}</h1>
      <motion.section className="flex justify-center"  
      initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       variants={container}>
        <CarouselProjects />
      </motion.section>
    </>
  );
}
