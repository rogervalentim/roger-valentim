import { IconType } from "react-icons";
import { motion } from "framer-motion";

interface SkillsProps {
  name: string;
  icon: IconType;
}

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export function CardSkills({ name, icon: Icon }: SkillsProps) {
  return (
    <motion.div
      className="flex flex-col gap-2 justify-center items-center border-2 border-royal-blue-900 max-w-full w-36 h-36 rounded-lg"
      variants={childVariant}
    >
      <Icon className="fill-royal-blue-500 size-20 hover:fill-royal-blue-600 cursor-pointer" />
      <p className="text-primary">
        {name}
      </p>
    </motion.div>
  );
}
