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
    const newLanguage = currentLanguage === "pt" ? "en" : "pt";
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
