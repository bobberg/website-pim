import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { LangContext, type Lang } from "./i18n";

// index.html (Dutch) and en/index.html share this entry; <html lang> picks the language
const lang: Lang = document.documentElement.lang === "en" ? "en" : "nl";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <LangContext.Provider value={lang}>
    <App />
  </LangContext.Provider>,
);
