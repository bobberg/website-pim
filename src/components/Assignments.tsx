import { useLang, type Lang } from "../i18n";
import dog from "./../images/dog.jpg";

const PdfLink = ({
  href,
  label,
  size,
}: {
  href: string;
  label: string;
  size: string;
}) => (
  <a className="pdf-link" href={href} target="_blank" rel="noopener noreferrer">
    <span className="pdf-badge" aria-hidden="true">
      PDF
    </span>
    <span>
      {label}
      <span className="pdf-size">PDF, {size}</span>
    </span>
  </a>
);

type Block = string | { href: string; label: string; size: string };

const Copy: Record<
  Lang,
  {
    title: string;
    sub: string;
    alt: string;
    challengesTitle: string;
    challenges: Block[];
    nextTitle: string;
    next: string[];
  }
> = {
  en: {
    title: "What assignments did Pim have and what’s planned next?",
    sub: "Just a flavour of the variety of projects I am working on.",
    alt: "A corgi on a lead looking up at the camera on a city pavement",
    challengesTitle: "Challenges",
    challenges: [
      "My columns in Foodpersonality since 2009 are included in this site.",
      {
        href: "/MetPimOpStraat2009-2013def.pdf",
        label: "Met Pim op Straat – columns 2009–2013",
        size: "1.2 MB",
      },
      "Involved in the development of the DNA of 5 cities in the Netherlands and a project of investigating the potential of 20 areas in and near these cities.",
      "Preparing a tour with a management team to Singapore and Tokyo/Kyoto. Together with Jempi Moens I am part of Lunar. A non-traditional management program for leaders. Just accompanied the 1st group for 3 days in Ghent. A fascinating learning experience we had with great insights on both the external as internal side of life.",
      "Just had a city tour to retail and city developments in London, Tokyo, Kyoto, Berlin, Leipzig and Dresden.",
      "For an international Group of Foodstores I investigated the next step in their format portfolio.",
      "A visual DNA was presented for a global investment company from Rotterdam.",
      "With the Global Design Team of Reckitt Benckiser we had a great team event prepared in Amsterdam. One of their biggest clients from the States had a streetology tour with me in London. With the design team we also had an investigation in Mumbai and Tokyo to see how people clean their toilets.",
      "With a dairy company we traced the secrets of innovation and packaging in surrounding countries.",
      "For Rabobank I guided a trade mission in India. In October last year I discovered together with Jos Sentel the secrets of transition cities in Detroit, Cleveland, Pittsburgh and Philadelphia.",
      {
        href: "/FN_Outlook%202013_p34-37_pimvandenberg.pdf",
        label: "FondsNieuws Outlook 2013 – article",
        size: "1 MB",
      },
    ],
    nextTitle: "What’s next",
    next: [
      "Wondering whether a new book about DNA and Cities would add value to the existing volume of information. Maybe a similar approach as my book “Ondernemen is een straatfeest” could create a winning performance.",
      "It strikes me how the global reshuffle has an impact on the development of cities, public space, homes/living, offices and retail. On our thinking in general! It has hit the real estate world enormously for the next decade. Developers must transform. Financial institutions must rethink their values.",
      "Maybe architects can become city editors. A new position for municipalities that can conduct the City as an inspiring partiture. Collaboration on all levels for creating a better shared value on What Is and What is Needed is very important. What a great society we are living in! Full of inspiring challenges.",
    ],
  },
  nl: {
    title: "Welke opdrachten deed Pim en wat staat er op stapel?",
    sub: "Een greep uit de verscheidenheid aan projecten waaraan ik werk.",
    alt: "Een corgi aan de lijn die op een stoep in de stad omhoogkijkt naar de camera",
    challengesTitle: "Uitdagingen",
    challenges: [
      "Mijn columns in FoodPersonality sinds 2009 staan op deze site.",
      {
        href: "/MetPimOpStraat2009-2013def.pdf",
        label: "Met Pim op Straat – columns 2009–2013",
        size: "1,2 MB",
      },
      "Betrokken bij de ontwikkeling van het DNA van vijf Nederlandse steden en bij een onderzoek naar de potentie van twintig gebieden in en rond die steden.",
      "Ik bereid een reis voor met een managementteam naar Singapore en Tokio/Kyoto. Samen met Jempi Moens ben ik onderdeel van Lunar, een onconventioneel managementprogramma voor leiders. Net heb ik de eerste groep drie dagen in Gent begeleid. Een boeiende leerervaring, met mooie inzichten in zowel de buitenkant als de binnenkant van het leven.",
      "Net terug van een stedenreis langs retail- en stadsontwikkelingen in Londen, Tokio, Kyoto, Berlijn, Leipzig en Dresden.",
      "Voor een internationale groep foodwinkels onderzocht ik de volgende stap in hun formuleportfolio.",
      "Voor een wereldwijde investeringsmaatschappij uit Rotterdam presenteerde ik een visueel DNA.",
      "Met het Global Design Team van Reckitt Benckiser bereidden we een mooi teamevent in Amsterdam voor. Een van hun grootste klanten uit de Verenigde Staten maakte met mij een streetologytour door Londen. Met het designteam deden we ook onderzoek in Mumbai en Tokio naar hoe mensen hun toilet schoonmaken.",
      "Met een zuivelbedrijf spoorden we de geheimen op van innovatie en verpakking in de omringende landen.",
      "Voor de Rabobank begeleidde ik een handelsmissie in India. In oktober vorig jaar ontdekte ik samen met Jos Sentel de geheimen van transitiesteden in Detroit, Cleveland, Pittsburgh en Philadelphia.",
      {
        href: "/FN_Outlook%202013_p34-37_pimvandenberg.pdf",
        label: "FondsNieuws Outlook 2013 – artikel",
        size: "1 MB",
      },
    ],
    nextTitle: "Wat volgt",
    next: [
      "Ik vraag me af of een nieuw boek over DNA en steden iets toevoegt aan alle informatie die er al is. Misschien kan een aanpak zoals in mijn boek ‘Ondernemen is een straatfeest’ opnieuw een succes worden.",
      "Het valt me op hoe de wereldwijde verschuivingen doorwerken in de ontwikkeling van steden, openbare ruimte, wonen, kantoren en retail. En in ons denken in het algemeen! De vastgoedwereld is er voor het komende decennium enorm door geraakt. Ontwikkelaars moeten veranderen. Financiële instellingen moeten hun waarden herijken.",
      "Misschien kunnen architecten stadsredacteuren worden. Een nieuwe rol voor gemeenten, die de stad kunnen dirigeren als een inspirerende partituur. Samenwerking op alle niveaus om betere gedeelde waarde te creëren rond Wat Er Is en Wat Er Nodig Is, is heel belangrijk. Wat een geweldige samenleving waarin we leven! Vol inspirerende uitdagingen.",
    ],
  },
};

const Assignments = () => {
  const copy = Copy[useLang()];

  return (
    <section
      id="work"
      className="section band-black"
      aria-labelledby="work-title"
    >
      <div className="container work-grid">
        <header className="section-header work-header">
          <h2 id="work-title">{copy.title}</h2>
          <p className="section-sub">{copy.sub}</p>
        </header>

        <figure className="work-photo">
          <img src={dog} alt={copy.alt} width={380} height={252} loading="lazy" />
        </figure>

        <div className="prose work-text">
          <h3>{copy.challengesTitle}</h3>
          {copy.challenges.map((block) =>
            typeof block === "string" ? (
              <p key={block}>{block}</p>
            ) : (
              <PdfLink key={block.href} {...block} />
            ),
          )}

          <h3>{copy.nextTitle}</h3>
          {copy.next.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Assignments;
