import { navLinks } from "@/constants";
import { Button } from "../ui/button";
import { ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";
import curriculum from "../../assets/CV-ROGER-VALENTIM-DESENVOLVEDOR-FRONT-END.pdf";
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
            className="w-full border-b border-collapse p-4 px-10 text-muted-foreground hover:text-white font-semibold text-lg cursor-pointer"
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
            className="w-64 font-bold flex gap-2 mt-4 text-ronchi-950 bg-gradient-to-t from-ronchi-500 to-ronchi-600 hover:bg-gradient-to-t hover:from-ronchi-600 hover:to-ronchi-700"
          >
            {t("cv")}
            <ArrowDownToLine className="text-ronchi-950" />
          </Button>
        </a>
      </div>

      <div className="flex justify-center gap-5 mt-14">
        <a
          className="text-muted-foreground text-lg font-bold hover:text-white"
          href="https://www.linkedin.com/in/rogervalentim33"
          target="_blank"
        >
          LinkedIn
        </a>
        <a
          className="text-muted-foreground text-lg font-bold hover:text-white"
          href="https://www.github.com/rogervalentim"
          target="_blank"
        >
          GitHub
        </a>
        <a
          className="text-muted-foreground text-lg font-bold hover:text-white"
          href="https://api.whatsapp.com/send/?phone=11970506367&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          WhatsApp
        </a>
      </div>
    </motion.div>
  );
}
