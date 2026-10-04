import "./Introduction.css";
import { useLang } from "../../i18n";

const Copy = {
  en: {
    title: "Opposing insights",
    lede: "I define the visual DNA of brands, cities and organisations.",
    text: [
      "Welcome! Thank you for visiting my website and for your time and interest. If there are any questions about the information please do get in touch.",
      "My observations, imaginative stories and discovery tours for companies and municipalities stimulate new thinking for innovative behaviour.",
      "I share my eyes with international A-brand suppliers, companies in fashion, retail, financial services, real estate development and marketing communication. My work is often described as eye-opening.",
      "Municipalities invite me to visualise and describe the present status and the potential of their cities. While taking people on my discovery tours throughout the world, I teach what daily insights can offer.",
      "Inspiring trips offer the (re-)discovery of beauty and trace the challenges of innovation and new thinking. Always with a catching curiosity for why people do what they do.",
      "The fundamentals of my approach are based on streetology.",
    ],
    differenceTitle: "Understanding the difference between",
    difference: [
      "Looking and really seeing.",
      "Just hearing and really internalising what you hear.",
      "Getting in touch and connecting.",
    ],
    differenceNote:
      "In order to create relevant, meaningful and challenging insights and perspectives for the coming years.",
    specialtiesTitle: "Specialties",
    specialties: [
      "DNA research for cities and organisations",
      "Discovery tours throughout the world",
      "Innovation and development",
      "Visual storytelling",
    ],
  },
  nl: {
    title: "Tegendraadse inzichten",
    lede: "Ik breng het visuele DNA van merken, steden en organisaties in kaart.",
    text: [
      "Welkom! Dank u voor uw bezoek aan mijn website en voor uw tijd en interesse. Heeft u vragen over de informatie? Neem dan gerust contact met mij op.",
      "Mijn observaties, beeldende verhalen en ontdekkingsreizen voor bedrijven en gemeenten zetten aan tot nieuw denken en vernieuwend gedrag.",
      "Ik deel mijn ogen met internationale A-merkleveranciers en met bedrijven in mode, retail, financiële dienstverlening, vastgoedontwikkeling en marketingcommunicatie. Mijn werk wordt vaak een eyeopener genoemd.",
      "Gemeenten vragen mij om de huidige staat en de potentie van hun stad in beeld te brengen en te beschrijven. Tijdens mijn ontdekkingsreizen over de hele wereld laat ik zien wat dagelijkse inzichten kunnen opleveren.",
      "Inspirerende reizen bieden de (her)ontdekking van schoonheid en brengen de uitdagingen van innovatie en nieuw denken in beeld. Altijd met een aanstekelijke nieuwsgierigheid naar waarom mensen doen wat ze doen.",
      "De basis van mijn aanpak is streetology.",
    ],
    differenceTitle: "Het verschil begrijpen tussen",
    difference: [
      "Kijken en echt zien.",
      "Alleen horen en echt in je opnemen wat je hoort.",
      "Contact leggen en verbinding maken.",
    ],
    differenceNote:
      "Om relevante, betekenisvolle en uitdagende inzichten en perspectieven te creëren voor de komende jaren.",
    specialtiesTitle: "Specialismen",
    specialties: [
      "DNA-onderzoek voor steden en organisaties",
      "Ontdekkingsreizen over de hele wereld",
      "Innovatie en ontwikkeling",
      "Verhalen vertellen in beelden",
    ],
  },
};

const Introduction = () => {
  const copy = Copy[useLang()];

  return (
    <section
      id="welcome"
      className="section intro"
      aria-labelledby="welcome-title"
    >
      <div className="container intro-grid">
        <header className="intro-heading">
          <h2 id="welcome-title">{copy.title}</h2>
          <p className="intro-lede">{copy.lede}</p>
        </header>

        <div className="prose intro-text">
          {copy.text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <div className="intro-cards">
            <div className="card">
              <h3>{copy.differenceTitle}</h3>
              <ul className="dash-list">
                {copy.difference.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="card-note">{copy.differenceNote}</p>
            </div>
            <div className="card">
              <h3>{copy.specialtiesTitle}</h3>
              <ul className="dash-list">
                {copy.specialties.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
