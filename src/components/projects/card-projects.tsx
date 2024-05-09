import { IconType } from "react-icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.div
      className="max-w-full  rounded overflow-hidden border border-border mt-10"
      variants={childVariant}
    >
      <img
        src={image}
        alt="imagem do projeto"
        className="w-full object-cover h-52"
      />

      <div className="px-3 mt-2">
        <h2 className="font-bold text-xl mb-2">
          {name}
        </h2>

        <p className="text-primary mt-1">
          {description}
        </p>
      </div>

      <div className="px-3 mt-2">
        <div className="flex gap-1">
          {technologies.map(Icon =>
            <Icon size={30} className="fill-royal-blue-500" key={Icon.name} />
          )}
        </div>
      </div>

      <div className="flex items-center justify-between px-3 p-3">
        <a
          className="text-muted-foreground hover:text-primary"
          href={deploy}
          target="_blank"
        >
          {t("project")}
        </a>
        <a
          className="text-muted-foreground hover:text-primary"
          href={repository}
          target="_blank"
        >
          {t("repository")}
        </a>
      </div>
    </motion.div>
  );
}
