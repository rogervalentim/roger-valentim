import React, { createContext } from "react";
import { useLanguage } from "./use-language";
import { Dispatch, SetStateAction } from "react";

type Language = {
  currentLanguage: string;
  handleChangeLanguage: (newLanguage: string) => void;
};

type LanguageContextType = Language & {
  setCurrentLanguage: Dispatch<SetStateAction<string>>;
};

export const LanguageContext = createContext<LanguageContextType>({} as LanguageContextType);

function LanguageProvider({
  children
}: React.PropsWithChildren): React.JSX.Element {
  const {
    currentLanguage,
    setCurrentLanguage,
    handleChangeLanguage
  } = useLanguage();

  return (
    <LanguageContext.Provider
      value={{
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
