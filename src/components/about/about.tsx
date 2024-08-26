import { ArrowDownToLine } from "lucide-react";
import computer from "../../assets/computer.jpg";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import curriculum from "../../assets/CV-ROGER-VALENTIM-FRONT-END-REACT.pdf";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

  return (
    <>
      <h1
        className="text-center font-bold text-3xl lg:text-4xl pt-16 underline underline-offset-1"
        id="Sobre"
      >
        {t("about-me")}
      </h1>
      <section className="block lg:flex lg:justify-around lg:items-center">
        <figure className="flex justify-center pt-4 lg:flex-col lg:max-w-lg">
          <img
            className="h-80 w-72 mx-w-sm lg:w-full rounded-lg"
            src={computer}
            alt="computador"
          />
        </figure>

        <div className="pt-4 flex flex-col items-center px-6 lg:px-0 justify-center">
          <motion.div
            className="flex justify-center flex-col  items-center max-w-sm lg:max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <p className=" leading-normal text-primary">{t("about")}</p>
            <Button
              type="button"
              className="font-bold w-full flex gap-2 mt-4 text-royal-blue-950 shadow-lg shadow-royal-blue-500/50 dark:shadow-royal-blue-800/50 bg-gradient-to-t from-royal-blue-500 to-royal-blue-600 hover:bg-gradient-to-t hover:from-royal-blue-600 hover:to-royal-blue-700"
            >
              <a href={curriculum} target="_blank" rel="noopener noreferrer">
                {t("cv")}
              </a>
              <ArrowDownToLine className="text-royal-blue-950" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
