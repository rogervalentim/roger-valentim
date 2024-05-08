import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger } from "../ui/menubar";
import brazilFlag from "../../assets/brazil-flag.svg";
import usaFlag from "../../assets/usa-flag.svg";
import { useTranslation } from "react-i18next";
import { useLanguageContext } from "@/context/use-language-context";
import { Settings } from "lucide-react";


export function NavMenubar() {
const { i18n } = useTranslation();
const { handleChangeLanguage } = useLanguageContext();

    return (
        <Menubar>
        <MenubarMenu>
          <MenubarTrigger><Settings className="size-5" /></MenubarTrigger>
          <MenubarContent>
            <p className="px-2 py-1.5 font-bold">Tema</p>
            <MenubarItem>
              Claro
            </MenubarItem>
            <MenubarItem>
              Escuro
            </MenubarItem>
            <MenubarSeparator />

            <p className="px-2 py-1.5 font-bold">Idioma</p>
            <MenubarSub>
              <MenubarSubTrigger className="flex items-center gap-2">
                <img src={i18n.language === 'pt' ? brazilFlag : usaFlag} alt="bandeira do brazil" className="w-5 h-5" />
                {i18n.language === "pt" ? "Português" : "Inglês"}
              </MenubarSubTrigger>
              <MenubarSubContent>
                {i18n.language === "pt" ? 
                <MenubarItem className="flex items-center gap-2" onClick={() => handleChangeLanguage()}>
                 <img src={usaFlag} alt="bandeira dos Estados Unidos" className="w-5 h-5" /> Inglês
                </MenubarItem>
               :   <MenubarItem className="flex items-center gap-2" onClick={() => handleChangeLanguage()}>
                 <img src={brazilFlag} alt="bandeira do Brasil" className="w-5 h-5" /> 
               Português
             </MenubarItem> }
              </MenubarSubContent>
            </MenubarSub>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    )
}