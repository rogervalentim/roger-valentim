import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface CardProjectsProps {
  name: string;
  image: string;
  technologies: IconType[];
  description: string;
  deploy: string;
  repository: string;
}

export function CardProjects({
  name,
  image,
  technologies,
  description,
  deploy,
  repository
}: CardProjectsProps) {
  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      className="max-w-full w-72 rounded overflow-hidden border border-border mt-10"
      variants={childVariant}
    >
      <img
        src={image}
        alt="imagem do projeto"
        className="w-72 object-cover h-52"
      />

      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">
          {name}
        </h2>

        <p className="text-ronchi-50 pt-2">
          {description}
        </p>
      </div>

      <div className="px-6 pt-2 pb-2">
        <div className="flex gap-1">
          {technologies.map(Icon =>
            <Icon size={30} className="fill-ronchi-500" key={Icon.name} />
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-6 p-3">
        <a
          className="text-muted-foreground hover:text-primary"
          href={deploy}
          target="_blank"
        >
          Projeto
        </a>
        <a
          className="text-muted-foreground hover:text-primary"
          href={repository}
          target="_blank"
        >
          Repositório
        </a>
      </div>
    </motion.div>
  );
}
