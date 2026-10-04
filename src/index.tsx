import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import App from "./App";
import { LangContext, type Lang } from "./i18n";

// nl/index.html sets <html lang="nl">; both pages share this entry
const lang: Lang = document.documentElement.lang === "nl" ? "nl" : "en";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <LangContext.Provider value={lang}>
    <App />
  </LangContext.Provider>,
);
