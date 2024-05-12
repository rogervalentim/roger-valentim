import { useState } from "react";
import { Button } from "../ui/button";
import { Menu,  X } from "lucide-react";
import { FaCode } from "react-icons/fa";
import { navLinks } from "../../constants/index";
import { NavMobile } from "./nav-mobile";
import { motion } from "framer-motion";
import { Separator } from "../ui/separator";
import { useTranslation } from "react-i18next";
import { NavMenubar } from "./nav-menubar";

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
      <div className="lg:px-16 h-14 flex justify-around border-b border-border/40 items-center flex-row">
        <div className="flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-t w-24 h-8 from-royal-blue-500 to-royal-blue-600 hover:bg-gradient-to-t hover:from-royal-blue-600 hover:to-royal-blue-700 rounded-md animate-pulse">
          <FaCode className="size-5 fill-royal-blue-950" />
          <a href="#Inicio" className="text-royal-blue-950 font-bold text-lg">
            Roger
          </a>
        </div>

        <div className="flex items-center h-8 space-x-4">
          <ul className="hidden lg:flex lg:gap-5">
            {translatedLinks.map(item =>
              <li key={item.id}>
                <a
                  href={`#${item.link}`}
                  className="text-primary dark:text-muted-foreground font-semibold text-lg dark:hover:text-primary cursor-pointer"
                >
                  {item.translatedLink}
                </a>
              </li>
            )}
          </ul>

          <Separator className="hidden lg:flex" orientation="vertical" />

          <div className="hidden lg:flex border-none">
            <NavMenubar />
          </div>
        </div>

        <div className="flex items-center h-8 space-x-4 lg:hidden">
          <div className="lg:hidden">
            <NavMenubar />
          </div>
          <Separator className="lg:hidden" orientation="vertical" />
          {!openMenu
            ? <Button
                type="button"
                className="flex items-center lg:hidden"
                variant="outline"
                size="icon"
                onClick={toggleOpenMenu}
                aria-label="Abrir menu"
              >
                <Menu className="text-primary" />
              </Button>
            : <Button
                type="button"
                className="flex items-center lg:hidden"
                variant="outline"
                size="icon"
                onClick={closeMenu}
                aria-label="Fechar menu"
              >
                <X className="text-primary" />
              </Button>}
        </div>
      </div>
      {openMenu && <NavMobile closeMenu={closeMenu} />}
    </motion.nav>
  );
}