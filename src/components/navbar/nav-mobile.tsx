import { navLinks } from "@/constants";
import { MenuIcon, SunIcon, SunMoon } from "lucide-react";
import { motion } from "framer-motion";
import curriculum from "../../assets/CV-ROGER-VALENTIM-FRONT-END.pdf";
import { useTranslation } from "react-i18next";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger
} from "../ui/drawer";
import { Separator } from "../ui/separator";
import { useTheme } from "@/context/useTheme";
import { useState } from "react";
import { NavMenubar } from "./nav-menubar";

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

  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

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
      <Drawer>
        <DrawerTrigger>
          <MenuIcon className="text-primary" />
        </DrawerTrigger>
        <DrawerContent className="px-3">
          <DrawerHeader>
            <ul className="flex flex-col items-center w-full">
              {translatedLinks.map((item) => (
                <li
                  className="w-full  p-4 px-10 text-primary  dark:text-muted-foreground  dark:hover:text-primary font-semibold text-lg cursor-pointer"
                  key={item.id}
                >
                  <a href={`#${item.link}`} onClick={closeMenu}>
                    {item.translatedLink}
                  </a>
                </li>
              ))}
            </ul>
          </DrawerHeader>
          <div className="px-3">
            <Separator />
          </div>
          <DrawerFooter>
            <NavMenubar />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </motion.div>
  );
}
