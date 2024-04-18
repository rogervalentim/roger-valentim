import React, { Dispatch, SetStateAction, createContext } from "react";

import { useLanguage } from "./use-language";
import { TFunction } from "i18next";

type Language = {
  t: TFunction<"translation", undefined>;
  currentLanguage: string;
  setCurrentLanguage: Dispatch<SetStateAction<string>>;
  handleChangeLanguage: () => void;
};

export const LanguageContext = createContext<Language>({} as Language);

function LanguageProvider({
  children
}: React.PropsWithChildren): React.JSX.Element {
  const {
    t,
    currentLanguage,
    setCurrentLanguage,
    handleChangeLanguage
  } = useLanguage();

  return (
    <LanguageContext.Provider
      value={{
        t,
        currentLanguage,
        setCurrentLanguage,
        handleChangeLanguage
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;
