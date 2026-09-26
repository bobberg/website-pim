type Article = {
  title: string;
  url: string;
  date: string;
  label: string;
  kind: string;
  note: string;
};

const Column: Article = {
  title: "Met Pim op straat: Smartphonezombies",
  url: "https://www.foodpersonality.nl/opinie/opinie/18734/met-pim-op-straat-smartphonezombies",
  date: "2024-08-29",
  label: "29 August 2024",
  kind: "Column",
  note: "Pim looks at the human scale in retail and business.",
};

const Press: Article[] = [
  {
    title: "Foodwatch wil ‘meldplicht krimpflatie’",
    url: "https://www.foodpersonality.nl/nieuws/nieuws/19642/foodwatch-wil-meldplicht-krimpflatie",
    date: "2025-11-20",
    label: "20 November 2025",
    kind: "News",
    note: "Photo by Pim: the Billa Corso shopfront in Vienna.",
  },
  {
    title: "‘Supermarkten, denk mee over die verloedering van winkelcentra’",
    url: "https://www.foodpersonality.nl/branche-cijfers/branche-cijfers/18481/supermarkten-denk-mee-over-die-verloedering-van-winkelcentra",
    date: "2024-03-25",
    label: "25 March 2024",
    kind: "Interview",
    note: "Pim on vacant town centres and the role supermarkets can play. Photos by Pim.",
  },
  {
    title: "C&A en Wibra als lichtpuntjes in de leegstand",
    url: "https://www.foodpersonality.nl/opinie/opinie/18465/c-a-en-wibra-als-lichtpuntjes-in-de-leegstand",
    date: "2024-03-14",
    label: "14 March 2024",
    kind: "Opinion",
    note: "Builds on Pim’s photo series on empty shops, from Alkmaar to Heerlen.",
  },
  {
    title: "Locatus: winkelleegstand neemt weer toe",
    url: "https://www.foodpersonality.nl/nieuws/nieuws/18344/locatus-winkelleegstand-neemt-weer-toe",
    date: "2024-01-10",
    label: "10 January 2024",
    kind: "News",
    note: "Illustrated with one of Pim’s images of retail vacancy.",
  },
];

const Writing = () => {
  return (
    <section
      id="writing"
      className="section band-orange writing"
      aria-labelledby="writing-title"
    >
      <div className="container writing-grid">
        <div>
          <h2 id="writing-title">Columns and press</h2>
          <p className="writing-intro">
            Pim writes the column <i lang="nl">Met Pim op straat</i> for the
            Dutch food retail magazine FoodPersonality, which also regularly
            uses his observations and photographs.
          </p>
          <article className="column-featured">
            <h3 lang="nl">
              <a href={Column.url} target="_blank" rel="noopener noreferrer">
                {Column.title}
              </a>
            </h3>
            <p className="article-meta">
              {Column.kind} · <time dateTime={Column.date}>{Column.label}</time>
            </p>
            <p>{Column.note}</p>
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
                <p className="article-meta">
                  {item.kind} · <time dateTime={item.date}>{item.label}</time>
                </p>
                <p>{item.note}</p>
              </li>
            ))}
          </ul>
          <p className="writing-footnote">
            Articles are in Dutch; some are for FoodPersonality subscribers.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Writing;
