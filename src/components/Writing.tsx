import { formatDate, useLang, type Lang } from "../i18n";

type Article = {
  title: string;
  url: string;
  date: string;
  kind: Record<Lang, string>;
  note: Record<Lang, string>;
};

const Column: Article = {
  title: "Met Pim op straat: Smartphonezombies",
  url: "https://www.foodpersonality.nl/opinie/opinie/18734/met-pim-op-straat-smartphonezombies",
  date: "2024-08-29",
  kind: { en: "Column", nl: "Column" },
  note: {
    en: "Pim looks at the human scale in retail and business.",
    nl: "Pim kijkt naar de menselijke maat in retail en het bedrijfsleven.",
  },
};

const Press: Article[] = [
  {
    title: "Foodwatch wil ‘meldplicht krimpflatie’",
    url: "https://www.foodpersonality.nl/nieuws/nieuws/19642/foodwatch-wil-meldplicht-krimpflatie",
    date: "2025-11-20",
    kind: { en: "News", nl: "Nieuws" },
    note: {
      en: "Photo by Pim: the Billa Corso shopfront in Vienna.",
      nl: "Foto van Pim: de winkelpui van Billa Corso in Wenen.",
    },
  },
  {
    title: "‘Supermarkten, denk mee over die verloedering van winkelcentra’",
    url: "https://www.foodpersonality.nl/branche-cijfers/branche-cijfers/18481/supermarkten-denk-mee-over-die-verloedering-van-winkelcentra",
    date: "2024-03-25",
    kind: { en: "Interview", nl: "Interview" },
    note: {
      en: "Pim on vacant town centres and the role supermarkets can play. Photos by Pim.",
      nl: "Pim over leegstaande winkelcentra en de rol die supermarkten kunnen spelen. Foto’s van Pim.",
    },
  },
  {
    title: "C&A en Wibra als lichtpuntjes in de leegstand",
    url: "https://www.foodpersonality.nl/opinie/opinie/18465/c-a-en-wibra-als-lichtpuntjes-in-de-leegstand",
    date: "2024-03-14",
    kind: { en: "Opinion", nl: "Opinie" },
    note: {
      en: "Builds on Pim’s photo series on empty shops, from Alkmaar to Heerlen.",
      nl: "Bouwt voort op Pims fotoserie over lege winkels, van Alkmaar tot Heerlen.",
    },
  },
  {
    title: "Locatus: winkelleegstand neemt weer toe",
    url: "https://www.foodpersonality.nl/nieuws/nieuws/18344/locatus-winkelleegstand-neemt-weer-toe",
    date: "2024-01-10",
    kind: { en: "News", nl: "Nieuws" },
    note: {
      en: "Illustrated with one of Pim’s images of retail vacancy.",
      nl: "Geïllustreerd met een van Pims beelden van winkelleegstand.",
    },
  },
];

const Copy = {
  en: {
    title: "Columns and press",
    intro: ["Pim writes the column ", " for the Dutch food retail magazine FoodPersonality, which also regularly uses his observations and photographs."],
    footnote: "Articles are in Dutch; some are for FoodPersonality subscribers.",
  },
  nl: {
    title: "Columns en pers",
    intro: ["Pim schrijft de column ", " voor het vakblad FoodPersonality, dat ook regelmatig zijn observaties en foto’s gebruikt."],
    footnote: "Sommige artikelen zijn alleen voor abonnees van FoodPersonality.",
  },
};

const Meta = ({ item, lang }: { item: Article; lang: Lang }) => (
  <p className="article-meta">
    {item.kind[lang]} ·{" "}
    <time dateTime={item.date}>{formatDate(item.date, lang)}</time>
  </p>
);

const Writing = () => {
  const lang = useLang();
  const copy = Copy[lang];

  return (
    <section
      id="writing"
      className="section band-orange writing"
      aria-labelledby="writing-title"
    >
      <div className="container writing-grid">
        <div>
          <h2 id="writing-title">{copy.title}</h2>
          <p className="writing-intro">
            {copy.intro[0]}
            <i lang="nl">Met Pim op straat</i>
            {copy.intro[1]}
          </p>
          <article className="column-featured">
            <h3 lang="nl">
              <a href={Column.url} target="_blank" rel="noopener noreferrer">
                {Column.title}
              </a>
            </h3>
            <Meta item={Column} lang={lang} />
            <p>{Column.note[lang]}</p>
          </article>
        </div>
        <div>
          <ul className="press-list">
            {Press.map((item) => (
              <li key={item.url}>
                <h3 lang="nl">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </h3>
                <Meta item={item} lang={lang} />
                <p>{item.note[lang]}</p>
              </li>
            ))}
          </ul>
          <p className="writing-footnote">{copy.footnote}</p>
        </div>
      </div>
    </section>
  );
};
export default Writing;
