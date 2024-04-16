import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { FaCode } from "react-icons/fa";
import { navLinks } from "../constants/index";
import { NavMobile } from "./nav-mobile";
import { motion } from "framer-motion";

export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  function toggleOpenMenu() {
    setOpenMenu(true);
  }

  function closeMenu() {
    setOpenMenu(false);
  }

  return (
    <>
    <motion.nav 
     className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
     initial={{ opacity: 0, y: -50 }}
     animate={{ opacity: 1, y: 0 }} 
     exit={{ opacity: 0, y: -50 }} 
     transition={{ duration: 0.5 }} 
    >
      <div className="px-10 lg:px-16 h-14 flex justify-between border-b border-border/40 items-center flex-row">
        <div className="flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-t w-24 h-8 from-ronchi-500 to-ronchi-600 hover:bg-gradient-to-t hover:from-ronchi-600 hover:to-ronchi-700 rounded-md">
          <FaCode className="size-5 fill-ronchi-950" />
        <a href="#Inicio" className="text-ronchi-950 font-bold text-lg">Roger</a>
        </div>
       <ul className="hidden lg:flex lg:gap-5"> 
        {navLinks.map(item => (
          <li key={item.id}>
          <a 
           href={`#${item.link}`} 
           className="text-muted-foreground font-semibold text-lg hover:text-white cursor-pointer" 
          >
            {item.link}
          </a>
          </li>
        ))}
        </ul>

        {!openMenu ? (
          <Button type="button" className="flex items-center lg:hidden" variant="link" size="icon" onClick={toggleOpenMenu} aria-label="Abrir menu">
            <Menu className="text-muted-foreground fill-text-muted-foreground" />
          </Button>
        ) : (
          <Button type="button" className="flex items-center lg:hidden" variant="link" size="icon" onClick={closeMenu} aria-label="Fechar menu">
            <X className="text-muted-foreground fill-text-muted-foreground"/>
          </Button>
        )}
      </div>
      
     {openMenu && (
      <NavMobile closeMenu={closeMenu} />
     )}
     
    </motion.nav>
    </>
  );
}