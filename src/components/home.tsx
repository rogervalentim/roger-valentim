import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/button";
import avatar from "../assets/avatar-programming.jpg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "./ui/tooltip";
import { motion } from "framer-motion";

export function Home() {
  return (
    <section
      className="lg:flex lg:items-center lg:justify-around pt-14 relative"
      id="Inicio"
    >
      <motion.div
        className="flex justify-center items-center flex-col lg:justify-start py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}
      >
        <h1 className="text-4xl text-center font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Olá eu sou <br /> desenvolvedor <br />front end
        </h1>

        <p className="text-lg text-muted-foreground pt-4">
          {`//`} Apaixonado por tecnologias e inovações.
        </p>

        <div className="flex gap-1 pt-4">
          <a
            href="https://www.linkedin.com/in/rogervalentim33/"
            target="_blank"
            aria-label="Veja o meu LinkedIn"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    size="icon"
                    variant="link"
                    aria-label="Veja o meu LinkedIn"
                  >
                    <FaLinkedin className="h-8 w-8  fill-ronchi-500 hover:fill-ronchi-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Veja o meu LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
          <a
            href="https://www.github.com/rogervalentim/"
            target="_blank"
            aria-label="veja o meu github"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    size="icon"
                    variant="link"
                    aria-label="veja o meu github"
                  >
                    <FaGithub className="h-8 w-8  fill-ronchi-500 hover:fill-ronchi-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Veja o meu github</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=11970506367&text&type=phone_number&app_absent=0"
            target="_blank"
            aria-label="Entre em contato pelo whatsApp"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    type="button"
                    size="icon"
                    variant="link"
                    aria-label="Entre em contato pelo whatsApp"
                  >
                    <FaWhatsapp className="h-8 w-8  fill-ronchi-500 hover:fill-ronchi-600" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Entre em contato pelo whatsApp</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        </div>
      </motion.div>
      <figure className="flex justify-center items-center pt-4 lg:flex-col lg:max-w-lg">
        <img
          className="h-80 max-w-sm lg:h-auto lg:max-w-full rounded-lg"
          src={avatar}
          alt="avatar"
        />
      </figure>
    </section>
  );
}
