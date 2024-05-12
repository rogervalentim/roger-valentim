import { 
  Menubar, 
  MenubarContent, 
  MenubarItem, 
  MenubarMenu, 
  MenubarSeparator, 
  MenubarSub, 
  MenubarSubContent, 
  MenubarSubTrigger, 
  MenubarTrigger 
} from "../ui/menubar";

import brazilFlag from "../../assets/brazil-flag.svg";
import usaFlag from "../../assets/usa-flag.svg";
import spainFlag from "../../assets/flag-of-spain.svg"; 
import frenchFlag from "../../assets/france-flag.svg";

import { useTranslation } from "react-i18next";
import { useLanguage } from "@/context/use-language";
import { Settings, SunMoon } from "lucide-react";
import { SunIcon } from '@radix-ui/react-icons'
import { useTheme } from "@/context/useTheme";
import { useState } from "react";
import { Button } from "../ui/button";

export function NavMenubar() {
  const { t, i18n } = useTranslation();
  const { handleChangeLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  return (
    <Menubar className="border-none bg-transparent">
      <MenubarMenu>
        <MenubarTrigger >
          <Button variant="outline" size="icon" type="button" aria-label="Abrir a configurações do projeto">
            <Settings className="size-5 text-primary" />
          </Button>
        </MenubarTrigger>
        <MenubarContent>
          <p className="px-2 py-1.5 font-bold">{t("theme")}</p>
          <MenubarItem className={`flex gap-2 items-center cursor-pointer ${selectedTheme === "light" ? "bg-accent" : ""}`} onClick={() => {
            setTheme("light");
            setSelectedTheme("light");
          }}>
            <SunIcon className="text-amber-400 size-5" /> {t("light")}
          </MenubarItem>
          <MenubarItem className={`flex gap-2 items-center cursor-pointer ${selectedTheme === "dark" ? "bg-accent" : ""}`} onClick={() => {
            setTheme("dark");
            setSelectedTheme("dark");
          }}>
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.89998 0.499976C2.89998 0.279062 2.72089 0.0999756 2.49998 0.0999756C2.27906 0.0999756 2.09998 0.279062 2.09998 0.499976V1.09998H1.49998C1.27906 1.09998 1.09998 1.27906 1.09998 1.49998C1.09998 1.72089 1.27906 1.89998 1.49998 1.89998H2.09998V2.49998C2.09998 2.72089 2.27906 2.89998 2.49998 2.89998C2.72089 2.89998 2.89998 2.72089 2.89998 2.49998V1.89998H3.49998C3.72089 1.89998 3.89998 1.72089 3.89998 1.49998C3.89998 1.27906 3.72089 1.09998 3.49998 1.09998H2.89998V0.499976ZM5.89998 3.49998C5.89998 3.27906 5.72089 3.09998 5.49998 3.09998C5.27906 3.09998 5.09998 3.27906 5.09998 3.49998V4.09998H4.49998C4.27906 4.09998 4.09998 4.27906 4.09998 4.49998C4.09998 4.72089 4.27906 4.89998 4.49998 4.89998H5.09998V5.49998C5.09998 5.72089 5.27906 5.89998 5.49998 5.89998C5.72089 5.89998 5.89998 5.72089 5.89998 5.49998V4.89998H6.49998C6.72089 4.89998 6.89998 4.72089 6.89998 4.49998C6.89998 4.27906 6.72089 4.09998 6.49998 4.09998H5.89998V3.49998ZM1.89998 6.49998C1.89998 6.27906 1.72089 6.09998 1.49998 6.09998C1.27906 6.09998 1.09998 6.27906 1.09998 6.49998V7.09998H0.499976C0.279062 7.09998 0.0999756 7.27906 0.0999756 7.49998C0.0999756 7.72089 0.279062 7.89998 0.499976 7.89998H1.09998V8.49998C1.09998 8.72089 1.27906 8.89997 1.49998 8.89997C1.72089 8.89997 1.89998 8.72089 1.89998 8.49998V7.89998H2.49998C2.72089 7.89998 2.89998 7.72089 2.89998 7.49998C2.89998 7.27906 2.72089 7.09998 2.49998 7.09998H1.89998V6.49998ZM8.54406 0.98184L8.24618 0.941586C8.03275 0.917676 7.90692 1.1655 8.02936 1.34194C8.17013 1.54479 8.29981 1.75592 8.41754 1.97445C8.91878 2.90485 9.20322 3.96932 9.20322 5.10022C9.20322 8.37201 6.82247 11.0878 3.69887 11.6097C3.45736 11.65 3.20988 11.6772 2.96008 11.6906C2.74563 11.702 2.62729 11.9535 2.77721 12.1072C2.84551 12.1773 2.91535 12.2458 2.98667 12.3128L3.05883 12.3795L3.31883 12.6045L3.50684 12.7532L3.62796 12.8433L3.81491 12.9742L3.99079 13.089C4.11175 13.1651 4.23536 13.2375 4.36157 13.3059L4.62496 13.4412L4.88553 13.5607L5.18837 13.6828L5.43169 13.7686C5.56564 13.8128 5.70149 13.8529 5.83857 13.8885C5.94262 13.9155 6.04767 13.9401 6.15405 13.9622C6.27993 13.9883 6.40713 14.0109 6.53544 14.0298L6.85241 14.0685L7.11934 14.0892C7.24637 14.0965 7.37436 14.1002 7.50322 14.1002C11.1483 14.1002 14.1032 11.1453 14.1032 7.50023C14.1032 7.25044 14.0893 7.00389 14.0623 6.76131L14.0255 6.48407C13.991 6.26083 13.9453 6.04129 13.8891 5.82642C13.8213 5.56709 13.7382 5.31398 13.6409 5.06881L13.5279 4.80132L13.4507 4.63542L13.3766 4.48666C13.2178 4.17773 13.0353 3.88295 12.8312 3.60423L12.6782 3.40352L12.4793 3.16432L12.3157 2.98361L12.1961 2.85951L12.0355 2.70246L11.8134 2.50184L11.4925 2.24191L11.2483 2.06498L10.9562 1.87446L10.6346 1.68894L10.3073 1.52378L10.1938 1.47176L9.95488 1.3706L9.67791 1.2669L9.42566 1.1846L9.10075 1.09489L8.83599 1.03486L8.54406 0.98184ZM10.4032 5.30023C10.4032 4.27588 10.2002 3.29829 9.83244 2.40604C11.7623 3.28995 13.1032 5.23862 13.1032 7.50023C13.1032 10.593 10.596 13.1002 7.50322 13.1002C6.63646 13.1002 5.81597 12.9036 5.08355 12.5522C6.5419 12.0941 7.81081 11.2082 8.74322 10.0416C8.87963 10.2284 9.10028 10.3497 9.34928 10.3497C9.76349 10.3497 10.0993 10.0139 10.0993 9.59971C10.0993 9.24256 9.84965 8.94373 9.51535 8.86816C9.57741 8.75165 9.63653 8.63334 9.6926 8.51332C9.88358 8.63163 10.1088 8.69993 10.35 8.69993C11.0403 8.69993 11.6 8.14028 11.6 7.44993C11.6 6.75976 11.0406 6.20024 10.3505 6.19993C10.3853 5.90487 10.4032 5.60464 10.4032 5.30023Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>  {t("dark")}
          </MenubarItem>
          <MenubarItem  className={`flex gap-2 items-center cursor-pointer ${selectedTheme === "system" ? "bg-accent" : ""}`} onClick={() => {
            setTheme("system");
            setSelectedTheme("system")}}
          >
            <SunMoon className="size-5" /> {t("system")}
          </MenubarItem>
          <MenubarSeparator />

          <p className="px-2 py-1.5 font-bold">{t("language")}</p>
          <MenubarSub>
            <MenubarSubTrigger className="flex items-center gap-2">
              <img src={
                i18n.language === 'pt' ? brazilFlag :
                i18n.language === 'es' ? spainFlag :
                i18n.language === 'fr' ? frenchFlag :
                usaFlag
              }
              alt="bandeiras"
              className="w-5 h-5"
              />
              {i18n.language === "pt" ? t("portuguese") :
               i18n.language === 'es' ? t("spanish") :
               i18n.language === 'fr' ? t("french") :
               t("english")}
            </MenubarSubTrigger>
            <MenubarSubContent>
              {i18n.language !== "en" && (
                <MenubarItem className="flex items-center gap-2" onClick={() => handleChangeLanguage("en")}>
                  <img src={usaFlag} alt="bandeira dos Estados Unidos" className="w-5 h-5" /> {t("english")}
                </MenubarItem>
              )}
              {i18n.language !== "pt" && (
                <MenubarItem className="flex items-center gap-2" onClick={() => handleChangeLanguage("pt")}>
                  <img src={brazilFlag} alt="bandeira do Brasil" className="w-5 h-5" /> {t("portuguese")}
                </MenubarItem>
              )}
              {i18n.language !== "es" && (
                <MenubarItem className="flex items-center gap-2" onClick={() => handleChangeLanguage("es")}>
                  <img src={spainFlag} alt="bandeira da Espanha" className="w-5 h-5" /> {t("spanish")}
                </MenubarItem>
              )}
              {i18n.language !== "fr" && (
                <MenubarItem className="flex items-center gap-2" onClick={() => handleChangeLanguage("fr")}>
                  <img src={frenchFlag} alt="bandeira da França" className="w-5 h-5" /> {t("french")}
                </MenubarItem>
              )}
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
