import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { FaCode } from "react-icons/fa";
import { navLinks } from "../../constants/index";
import { NavMobile } from "./nav-mobile";
import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
import { SelectLanguage } from "./select-language";

interface NavLink {
  id: number;
  link: string;
  translatedLink: string;
}

export function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { t } = useTranslation();

  const headerLinks: string[] = t("header", { returnObjects: true });

  const translatedLinks: NavLink[] = navLinks.map((item, index) => ({
    ...item,
    translatedLink: headerLinks[index]
  }));

  function toggleOpenMenu() {
    setOpenMenu(true);
  }

  function closeMenu() {
    setOpenMenu(false);
  }

  return (
    <motion.nav
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-8 lg:px-16 h-14 flex justify-between border-b border-border/40 items-center flex-row">
        <div className="flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-t w-24 h-8 from-ronchi-500 to-ronchi-600 hover:bg-gradient-to-t hover:from-ronchi-600 hover:to-ronchi-700 rounded-md">
          <FaCode className="size-5 fill-ronchi-950" />
          <a href="#Inicio" className="text-ronchi-950 font-bold text-lg">
            Roger
          </a>
        </div>

        <div className="flex items-center h-8 space-x-4">
          <ul className="hidden lg:flex lg:gap-5">
            {translatedLinks.map(item =>
              <li key={item.id}>
                <a
                  href={`#${item.link}`}
                  className="text-muted-foreground font-semibold text-lg hover:text-white cursor-pointer"
                >
                  {item.translatedLink}
                </a>
              </li>
            )}
          </ul>

          <Separator className="hidden lg:flex" orientation="vertical" />

          <div className="hidden lg:flex">
            <SelectLanguage />
          </div>
        </div>

        <div className="flex items-center h-8 space-x-4 lg:hidden">
          <div className="lg:hidden">
            <SelectLanguage />
          </div>
          <Separator className="lg:hidden" orientation="vertical" />
          {!openMenu
            ? <Button
                type="button"
                className="flex items-center lg:hidden"
                variant="link"
                size="icon"
                onClick={toggleOpenMenu}
                aria-label="Abrir menu"
              >
                <Menu className="text-muted-foreground fill-text-muted-foreground" />
              </Button>
            : <Button
                type="button"
                className="flex items-center lg:hidden"
                variant="link"
                size="icon"
                onClick={closeMenu}
                aria-label="Fechar menu"
              >
                <X className="text-muted-foreground fill-text-muted-foreground" />
              </Button>}
        </div>
      </div>
      {openMenu && <NavMobile closeMenu={closeMenu} />}
    </motion.nav>
  );
}
