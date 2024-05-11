import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { t, i18n: { changeLanguage, language } } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(language);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
      changeLanguage(savedLanguage);
    }
  }, []);

  const handleChangeLanguage = () => {
    let newLanguage;
    switch (currentLanguage) {
      case "pt":
        newLanguage = "en" && "es";
        break;
      case "en":
        newLanguage = "es" && "pt"; // Adicionando o idioma espanhol
        break;
      case "es":
        newLanguage = "pt" && "en"; // Voltando para o português
        break;
      default:
        newLanguage = "en";
        break;
    }
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  return {
    t,
    currentLanguage,
    setCurrentLanguage,
    handleChangeLanguage
  };
};
