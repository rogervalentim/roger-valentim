import { navLinks } from "@/constants";
import { Button } from "../ui/button";
import { ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";
import curriculum from "../../assets/CV-ROGER-VALENTIM-FRONT-END.pdf";
import { useTranslation } from "react-i18next";

interface NavMobileProps {
  closeMenu: () => void;
}

interface NavLink {
  id: number;
  link: string;
  translatedLink: string;
}

export function NavMobile({ closeMenu }: NavMobileProps) {
  const { t } = useTranslation();

  const headerLinks: string[] = t("header", { returnObjects: true });

  const translatedLinks: NavLink[] = navLinks.map((item, index) => ({
    ...item,
    translatedLink: headerLinks[index]
  }));

  return (
    <motion.div
      className="z-auto absolute border-b border-border/40 flex flex-col w-full h-screen bg-popover"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <ul className="flex flex-col items-center w-full">
        {translatedLinks.map(item =>
          <li
            className="w-full border-b border-collapse p-4 px-10 text-primary  dark:text-muted-foreground  dark:hover:text-primary font-semibold text-lg cursor-pointer"
            key={item.id}
          >
            <a href={`#${item.link}`} onClick={closeMenu}>
              {item.translatedLink}
            </a>
          </li>
        )}
      </ul>

      <div className="flex justify-center mt-5">
        <a href={curriculum} target="_blank">
          <Button
            type="button"
            className="w-64 font-bold flex gap-2 mt-4 text-royal-blue-950 bg-gradient-to-t from-royal-blue-500 to-royal-blue-600 hover:bg-gradient-to-t hover:from-royal-blue-600 hover:to-royal-blue-700"
          >
            {t("cv")}
            <ArrowDownToLine className="text-royal-blue-950" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
}