import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "../ui/select";

import brazilFlag from "../../assets/brazil-flag.svg";
import usaFlag from "../../assets/usa-flag.svg";
import { useLanguageContext } from "@/context/use-language-context";

export function SelectLanguage() {
  const { i18n } = useTranslation();
  const { handleChangeLanguage } = useLanguageContext();

  return (
    <Select onValueChange={handleChangeLanguage} value={i18n.language}>
      <SelectTrigger className="w-20 h-8 lg:w-20 lg:h-10 gap-2">
        <SelectValue>
          <img
            className="w-10 h-10"
            src={i18n.language === "pt" ? brazilFlag : usaFlag}
            alt={
              i18n.language === "pt"
                ? "bandeira do brasil"
                : "bandeira dos estados unidos"
            }
          />
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="pt">
          <img
            className="w-10 h-10"
            src={brazilFlag}
            alt="bandeira do brasil"
          />
        </SelectItem>
        <SelectItem value="en">
          <img
            className="w-10 h-10"
            src={usaFlag}
            alt="bandeira dos estados unidos"
          />
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
