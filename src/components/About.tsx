import { useLang } from "../i18n";
import pim from "./../images/Pim.jpg";
import book from "./../images/OndernemenIsEenStraatfeest.jpg";

const Copy = {
  en: {
    portrait: "Portrait of Pim van den Berg",
    title: "Who am I?",
    text: [
      "I am Pim van den Berg and thank you for visiting my website.",
      "My approach is based on streetology. A curious way of understanding the now in all its details by connecting with people and their stories. With a focus on Brands, Organisations, People and Cities.",
      "My background in Food and Retail helps me with looking for the broad inspiring perspectives of the world we live in.",
    ],
    specialtiesTitle: "Specialties",
    specialties: [
      "DNA research for cities and organisations",
      "Discovery tours throughout the world",
      "Innovation and development",
      "Inspirational see-throughs and presentations",
    ],
    bookAlt:
      "A sign reading ‘Ondernemen is een straatfeest’ on the Amsterdam waterfront",
    book: "Pim’s book. Over 10,000 copies sold, and still available second-hand.",
  },
  nl: {
    portrait: "Portret van Pim van den Berg",
    title: "Wie ben ik?",
    text: [
      "Ik ben Pim van den Berg. Dank u voor uw bezoek aan mijn website.",
      "Mijn aanpak is gebaseerd op streetology: een nieuwsgierige manier om het nu in al zijn details te begrijpen, door verbinding te maken met mensen en hun verhalen. Met de focus op merken, organisaties, mensen en steden.",
      "Mijn achtergrond in food en retail helpt me om te zoeken naar de brede, inspirerende perspectieven van de wereld waarin we leven.",
    ],
    specialtiesTitle: "Specialismen",
    specialties: [
      "DNA-onderzoek voor steden en organisaties",
      "Ontdekkingsreizen over de hele wereld",
      "Innovatie en ontwikkeling",
      "Inspirerende doorkijkjes en presentaties",
    ],
    bookAlt:
      "Een bord met de tekst ‘Ondernemen is een straatfeest’ aan het water in Amsterdam",
    book: "Het boek van Pim. Ruim 10.000 exemplaren verkocht en nog steeds tweedehands te koop.",
  },
};

const About = () => {
  const copy = Copy[useLang()];

  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about-grid">
        <figure className="about-portrait">
          <img
            src={pim}
            alt={copy.portrait}
            width={188}
            height={288}
            loading="lazy"
          />
        </figure>
        <div className="prose about-text">
          <h2 id="about-title">{copy.title}</h2>
          {copy.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h3>{copy.specialtiesTitle}</h3>
          <ul className="dash-list">
            {copy.specialties.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside className="card publication" aria-labelledby="publication-title">
          <img
            src={book}
            alt={copy.bookAlt}
            width={290}
            height={192}
            loading="lazy"
          />
          <div>
            <h3 id="publication-title" lang="nl">
              Ondernemen is een straatfeest
            </h3>
            <p>{copy.book}</p>
          </div>
        </aside>
      </div>
    </section>
  );
};
export default About;
