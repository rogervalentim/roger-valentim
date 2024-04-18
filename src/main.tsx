import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "./index.css";

import "./lib/i18n";
import LanguageProvider from "./context/language-context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
