import { createContext, useContext } from "react";

export type Lang = "en" | "nl";

export const LangContext = createContext<Lang>("en");

export const useLang = () => useContext(LangContext);

export const pagePath: Record<Lang, string> = { en: "/", nl: "/nl/" };

export const formatDate = (iso: string, lang: Lang) =>
  new Intl.DateTimeFormat(lang === "nl" ? "nl-NL" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
