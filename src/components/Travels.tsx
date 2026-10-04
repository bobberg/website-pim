import { useLang } from "../i18n";
import map from "./../images/travels-map.webp";

const Copy = {
  en: {
    title: "The world, seen with new eyes",
    text: [
      "More than 33,000 of Pim’s photos on one map, from two decades of observations: Dutch high streets, the transition cities of the American Rust Belt, Tokyo, Cape Town and everywhere in between.",
      "Slide through the years, pick a trip and step through it photo by photo, exactly where each picture was taken.",
    ],
    cta: "Explore the travel map",
    alt: "World map with orange circles where Pim’s photos were taken, most of them in Europe",
    credit: "Map data © OpenStreetMap contributors",
  },
  nl: {
    title: "De wereld, met nieuwe ogen",
    text: [
      "Ruim 33.000 foto’s van Pim op één kaart, uit twintig jaar observaties: Nederlandse winkelstraten, de transitiesteden van de Amerikaanse Rust Belt, Tokio, Kaapstad en alles daartussen.",
      "Schuif door de jaren, kies een reis en blader er foto voor foto doorheen, precies op de plek waar elke foto is gemaakt.",
    ],
    cta: "Bekijk de reiskaart",
    alt: "Wereldkaart met oranje cirkels op de plekken waar Pims foto’s zijn gemaakt, de meeste in Europa",
    credit: "Kaartgegevens © OpenStreetMap-bijdragers",
  },
};

const Travels = () => {
  const copy = Copy[useLang()];

  return (
    <section id="travels" className="section" aria-labelledby="travels-title">
      <div className="container">
        <div className="travels-intro">
          <div className="prose travels-text">
            <h2 id="travels-title">{copy.title}</h2>
            {copy.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a className="button button-primary" href="/travels/">
            {copy.cta}
          </a>
        </div>
        <figure className="travels-map">
          {/* The button above is the accessible link; the map is a mouse shortcut */}
          <a href="/travels/" tabIndex={-1} aria-hidden="true">
            <img
              src={map}
              alt={copy.alt}
              width={2400}
              height={1200}
              loading="lazy"
            />
          </a>
          <figcaption>{copy.credit}</figcaption>
        </figure>
      </div>
    </section>
  );
};
export default Travels;
