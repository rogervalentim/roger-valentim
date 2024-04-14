import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { FaCode } from "react-icons/fa";
import { navLinks } from "../constants/index";

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
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-10 lg:px-16 h-14 flex justify-between border-b border-border/40 items-center flex-row">
        <div className="flex items-center gap-2 cursor-pointer">
          <FaCode className="size-6 fill-chetwode-blue-500 hover:fill-chetwode-blue-600" />
        <h1 className="text-chetwode-blue-500 font-bold text-lg">Roger</h1>
        </div>
       <ul className="hidden lg:flex lg:gap-5"> 
        {navLinks.map(item => (
          <li className="text-muted-foreground font-semibold text-lg hover:text-white cursor-pointer" key={item.id}>
            {item.link}
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
      <div className="z-auto absolute border-b border-border/40 flex  w-full h-screen bg-popover">
      <ul className="flex  flex-col items-center space-y-4 w-full mt-2 px-10">
      {navLinks.map(item => (
      <li className="text-muted-foreground font-semibold text-lg cursor-pointer " key={item.id}>
        {item.link}
      </li>
      ))}
      </ul>
    </div>
     )}
     
    </nav>
    </>
  );
}