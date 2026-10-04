import { useRef, useState, type ReactNode } from "react";
import { useLang } from "../i18n";

type Principle = { title: string; text: ReactNode };

const Principles: Principle[] = [
  {
    title: "Contact that moves you",
    text: "One on one, eye to eye, the moment and the message. A meeting of the mind as well as spirit should once again become a central ingredient in marketing. Where meeting people is the true art.",
  },
  {
    title: "Refocus, and see with new eyes",
    text: (
      <>
        Successes are not achieved, even though they are often claimed, by
        masters in finance. A success is an opportunity into a reality. And
        there are opportunities everywhere: waiting to be realised. Look
        carefully, and <em>with new eyes</em>, that's often when you'll be able
        to make them work for you.
      </>
    ),
  },
  {
    title: "Becoming yourself",
    text: "These days people are wired and networked; what they haven't yet discovered for themselves, they can learn from others. Essential knowledge is reached by conversations and discussion. All the demands made on you to be alert and sharp make it even more crucial that you see clearly, say what you mean, and become who you are. There's nothing more wonderful than evolution.",
  },
  {
    title: "See, discover, experience",
    text: "The trend of providing \u201cbread and circus\u201d as content, presented as an \u201cexperience\u201d, persists. The product and the film. The product and the musical. The performance and the master class. The theme of an event is increasingly a meaningful and ideally unforgettable encounter. But the added value of \u2018content\u2019 is only achieved once the \u2018delivery\u2019 is experienced.",
  },
  {
    title: "Joyful wonder",
    text: "My open eyes have served me well all these years. I look at everything around me, of course, but especially at people, their position, attitudes and behaviours in their world. I make contact with them with my eyes, and it's without doubt my most pleasant discovery and one I hold dear. My wish is for everyone to open their eyes this way.",
  },
  {
    title: "Build stories around feelings",
    text: "Success comes with friendship. A story built around feelings packs a punch. The tone and the house style, expressed in words and rhythms, forms and images, attitude and behaviour, determine the sincerity and durability of our friendships.",
  },
  {
    title: "Get close",
    text: "Marketing can't be done from a distance, nor purely on the basis of rationality. Marketing takes place on your doorstep, on the street, at markets and other gathering places. Only there will you run into people who can see, feel, taste, consider and buy your product or service. Get close! Look in their eyes, look at their facial expressions, their body language. Listen to what they're saying and what they're not. Then take it from there.",
  },
  {
    title: "Go deep",
    text: "Superficiality is not an option. Quality is the measure, with all it implies, of knowledge, skill, inspiration, motivation and healthy pride. From these deepest sources come individuality, strength, and self-confidence. We can't do it any other way.",
  },
  {
    title: "Give your all",
    text: "Sometimes \u2013 quite often, actually \u2013 it's all about giving everything to the job at hand: our complete self-confidence, energy and optimism. When an organisation creates a climate of trust and confidence, that kind of \u2018esprit de corps\u2019 and teamwork comes from the heart and flourishes.",
  },
  {
    title: "Ask the right questions",
    text: "The simplest questions are often the most important: who, what, why, when, how do you feel, are you satisfied and would you do it again if you had the chance? People will eagerly respond to others who are sincerely interested. Digging for treasure can be that easy.",
  },
  {
    title: "True colours",
    text: "We are bombarded by marketing on every corner, turning colourful streets into dull thoroughfares. What really matters to the success of a brand is a marketing strategy and messages that are solid through their diversity, consistency and authenticity.",
  },
  {
    title: "Let your VOICE be heard!",
    text: "More and more, people are turning their backs on clever marketing strategies. This is not a trend but a mass movement. VOICE = say what you mean in your own terms: be expressive and imaginative.",
  },
  {
    title: "What is good, and what feels good",
    text: "Business and institutions should work at convincing their clients that their feelings can be trusted. When something feels right, it usually is, and there's nothing better than that. Yes, that first \u2018gut\u2019 connection and response is often \u2018for always\u2019.",
  },
  {
    title: "The art of life",
    text: "In order to maintain well-being and enjoy the Art of Living, you must first master the Art of Giving. That's easier said than done, because it requires an investment of time, effort and money. And of yourself.",
  },
  {
    title: "Embrace the details",
    text: "The bigger picture consists of many points and lines. Without the details, you may as well forget the larger picture. It's ironic because the lower people sit in the organisation, the more important the details of what they do and how they do it. It is here and nowhere else that the reputation of your organisation, product or trademark is determined.",
  },
  {
    title: "Invest in internal strength",
    text: "External impact emerges from internal strength. Invest in internal strength, unity and connection, inspiration and motivation, recognition and appreciation. This is also the best investment in durable external impact. When people grow, their business ventures flourish.",
  },
  {
    title: "Leaders with a future",
    text: "Leaders with a future take enough time for CONTACT and emotion: the meeting itself, speaking as well as listening between the lines \u2013 this applies to marketeers as well as people in their markets.",
  },
  {
    title: "Roots and wings",
    text: "Companies who misjudge or deny their DNA cannot possibly get the best from the range and power of their wings.",
  },
  {
    title: "Be open to unique CVs",
    text: "Dare to work with people who are unique and have colourful CVs \u2013 who are adventurous and edgy. People who have an aesthetic, who know how to find harmony, and the balance in between.",
  },
  {
    title: "Trustworthy",
    text: "Beware of fads that are like balloons: all surface, no substance, and ready to go up in the air. Restoring trust between marketeers and their target groups is a matter of attitude, actions and a sincere interest.",
  },
  {
    title: "You reap what you sow",
    text: "When we are not loyal to our clients, their employees and suppliers, we shouldn't expect to rely on loyalty and commitment from them. It doesn't work that way.",
  },
  {
    title: "It's all about people",
    text: "Take off those blinders! Resist laziness and take the extra steps. Reject arrogance and work from the heart. Be alert to indifference\u2026 it's all about people.",
  },
  {
    title: "Person to person",
    text: "Equal footing is essential. Brands and marketeers should never think they are superior to their target groups. Imposed prescriptions from marketeers don't work; their clients will not work with them.",
  },
  {
    title: "It begins with the human touch",
    text: "Every day I know one thing for sure: without humanity, enduring success in business is unthinkable. Anyone who thinks differently will be bullied by things like shareholder values, and a momentary joy that lasts but a short while. There's no more juice in a squeezed lemon.",
  },
  {
    title: "Trust yourself",
    text: "Distrust blueprints, the \u2018tried and true\u2019. Trust your sharp eye for people, their attitudes and behaviour. Focus on the bigger picture with an eye for detail. Then turn what you see with those new eyes into achievements you can look on with pride.",
  },
];

const PrinciplesNl: Principle[] = [
  {
    title: "Contact dat je raakt",
    text: "Eén op één, oog in oog, het moment en de boodschap. Een ontmoeting van hoofd én hart moet weer een centraal ingrediënt van marketing worden. Waar mensen ontmoeten de ware kunst is.",
  },
  {
    title: "Stel opnieuw scherp en kijk met nieuwe ogen",
    text: (
      <>
        Successen worden niet behaald door financiële meesters, ook al eisen
        zij ze vaak op. Een succes is een kans die werkelijkheid wordt. En
        overal liggen kansen te wachten om benut te worden. Kijk goed, en{" "}
        <em>met nieuwe ogen</em>: juist dan lukt het vaak om ze voor je te laten
        werken.
      </>
    ),
  },
  {
    title: "Jezelf worden",
    text: "Mensen zijn tegenwoordig verbonden en genetwerkt; wat ze zelf nog niet ontdekt hebben, kunnen ze van anderen leren. Wezenlijke kennis ontstaat in gesprek en discussie. Alle eisen om alert en scherp te zijn maken het des te belangrijker dat je helder ziet, zegt wat je bedoelt en wordt wie je bent. Er is niets mooiers dan evolutie.",
  },
  {
    title: "Zien, ontdekken, beleven",
    text: "De trend om “brood en spelen” als content aan te bieden, verpakt als “beleving”, houdt aan. Het product en de film. Het product en de musical. De voorstelling en de masterclass. Het thema van een evenement is steeds vaker een betekenisvolle en het liefst onvergetelijke ontmoeting. Maar de meerwaarde van ‘content’ ontstaat pas als de ‘levering’ wordt beleefd.",
  },
  {
    title: "Blije verwondering",
    text: "Mijn open blik heeft me al die jaren goed gediend. Ik kijk natuurlijk naar alles om me heen, maar vooral naar mensen: hun positie, houding en gedrag in hun wereld. Ik maak met mijn ogen contact met ze, en dat is zonder twijfel mijn mooiste ontdekking, een die ik koester. Ik wens iedereen toe zo zijn ogen te openen.",
  },
  {
    title: "Bouw verhalen rond gevoel",
    text: "Succes komt met vriendschap. Een verhaal dat om gevoel draait, komt hard aan. De toon en de huisstijl, uitgedrukt in woorden en ritmes, vormen en beelden, houding en gedrag, bepalen hoe oprecht en duurzaam onze vriendschappen zijn.",
  },
  {
    title: "Kom dichtbij",
    text: "Marketing doe je niet op afstand, en ook niet alleen op basis van ratio. Marketing gebeurt op je stoep, op straat, op markten en andere ontmoetingsplekken. Alleen daar kom je de mensen tegen die je product of dienst kunnen zien, voelen, proeven, overwegen en kopen. Kom dichtbij! Kijk ze in de ogen, let op hun gezichtsuitdrukking en lichaamstaal. Luister naar wat ze zeggen en naar wat ze niet zeggen. En ga daarmee aan de slag.",
  },
  {
    title: "Ga de diepte in",
    text: "Oppervlakkigheid is geen optie. Kwaliteit is de maat, met alles wat daarbij hoort: kennis, vakmanschap, inspiratie, motivatie en gezonde trots. Uit die diepste bronnen komen eigenheid, kracht en zelfvertrouwen. Anders kunnen we het niet.",
  },
  {
    title: "Geef alles",
    text: "Soms – eigenlijk best vaak – draait het erom dat je alles geeft voor de taak die voor je ligt: al je zelfvertrouwen, energie en optimisme. Als een organisatie een klimaat van vertrouwen schept, komen ‘esprit de corps’ en teamwerk vanuit het hart en bloeien ze op.",
  },
  {
    title: "Stel de juiste vragen",
    text: "De eenvoudigste vragen zijn vaak de belangrijkste: wie, wat, waarom, wanneer, hoe voel je je, ben je tevreden en zou je het opnieuw doen als je de kans had? Mensen reageren graag op iemand die oprecht geïnteresseerd is. Zo makkelijk kan schatgraven zijn.",
  },
  {
    title: "Ware kleuren",
    text: "Op elke straathoek worden we bestookt met marketing, waardoor kleurrijke straten saaie doorgangen worden. Wat echt telt voor het succes van een merk, is een marketingstrategie met boodschappen die overeind blijven door hun diversiteit, consistentie en authenticiteit.",
  },
  {
    title: "Laat je VOICE horen!",
    text: "Steeds meer mensen keren slimme marketingstrategieën de rug toe. Dat is geen trend maar een massabeweging. VOICE = zeg wat je bedoelt, in je eigen woorden: wees expressief en verbeeldingsrijk.",
  },
  {
    title: "Wat goed is, en wat goed voelt",
    text: "Bedrijven en instellingen moeten hun klanten ervan overtuigen dat ze op hun gevoel kunnen vertrouwen. Als iets goed voelt, is het dat meestal ook, en er is niets beters dan dat. Ja, die eerste verbinding en reactie op je buikgevoel is vaak ‘voor altijd’.",
  },
  {
    title: "De kunst van het leven",
    text: "Wie zich goed wil blijven voelen en wil genieten van de Kunst van het Leven, moet eerst de Kunst van het Geven beheersen. Dat is makkelijker gezegd dan gedaan, want het vraagt een investering in tijd, moeite en geld. En van jezelf.",
  },
  {
    title: "Omarm de details",
    text: "Het grote geheel bestaat uit vele punten en lijnen. Zonder de details kun je het grote geheel net zo goed vergeten. Ironisch genoeg geldt: hoe lager mensen in de organisatie zitten, hoe belangrijker de details van wat ze doen en hoe ze het doen. Hier en nergens anders wordt de reputatie van je organisatie, product of merk bepaald.",
  },
  {
    title: "Investeer in interne kracht",
    text: "Impact naar buiten komt voort uit kracht van binnen. Investeer in interne kracht, eenheid en verbinding, inspiratie en motivatie, erkenning en waardering. Dat is ook de beste investering in duurzame impact naar buiten. Als mensen groeien, bloeien hun ondernemingen.",
  },
  {
    title: "Leiders met toekomst",
    text: "Leiders met toekomst nemen genoeg tijd voor CONTACT en emotie: de ontmoeting zelf, spreken én luisteren tussen de regels door – dat geldt voor marketeers en voor de mensen in hun markten.",
  },
  {
    title: "Wortels en vleugels",
    text: "Bedrijven die hun DNA miskennen of ontkennen, kunnen onmogelijk het beste halen uit het bereik en de kracht van hun vleugels.",
  },
  {
    title: "Sta open voor unieke cv’s",
    text: "Durf te werken met mensen die uniek zijn en een kleurrijk cv hebben – avontuurlijk en eigenzinnig. Mensen met gevoel voor esthetiek, die harmonie weten te vinden, en de balans daartussen.",
  },
  {
    title: "Betrouwbaar",
    text: "Pas op voor hypes die zijn als ballonnen: alleen buitenkant, geen inhoud, en klaar om weg te zweven. Vertrouwen herstellen tussen marketeers en hun doelgroepen is een kwestie van houding, daden en oprechte interesse.",
  },
  {
    title: "Wie zaait, zal oogsten",
    text: "Als wij niet loyaal zijn aan onze klanten, hun medewerkers en leveranciers, moeten we ook niet rekenen op hun loyaliteit en betrokkenheid. Zo werkt het niet.",
  },
  {
    title: "Het draait om mensen",
    text: "Oogkleppen af! Verzet je tegen gemakzucht en zet die extra stappen. Wijs arrogantie af en werk vanuit het hart. Wees alert op onverschilligheid… het draait om mensen.",
  },
  {
    title: "Van mens tot mens",
    text: "Gelijkwaardigheid is essentieel. Merken en marketeers moeten nooit denken dat ze boven hun doelgroepen staan. Opgelegde recepten van marketeers werken niet; hun klanten gaan er niet in mee.",
  },
  {
    title: "Het begint met menselijkheid",
    text: "Elke dag weet ik één ding zeker: zonder menselijkheid is blijvend succes in het bedrijfsleven ondenkbaar. Wie daar anders over denkt, wordt opgejaagd door zaken als aandeelhouderswaarde en een vreugde van korte duur. Uit een uitgeknepen citroen komt geen sap meer.",
  },
  {
    title: "Vertrouw op jezelf",
    text: "Wantrouw blauwdrukken, het ‘beproefde recept’. Vertrouw op je scherpe blik voor mensen, hun houding en gedrag. Richt je op het grote geheel, met oog voor detail. En maak van wat je met die nieuwe ogen ziet prestaties waar je met trots op terugkijkt.",
  },
];

const Copy = {
  en: {
    title: "Take off those blinders!",
    sub: "Pim van den Berg’s manifesto on the future of streetology.",
    quote:
      "Look carefully, and with new eyes. That’s when you’ll be able to make them work for you.",
    less: "Show fewer principles",
    all: (n: number) => `Read all ${n} principles`,
    download: "Download manifesto",
    meta: "PDF",
    credit: "In close cooperation with Rob Smelt.",
  },
  nl: {
    title: "Oogkleppen af!",
    sub: "Het manifest van Pim van den Berg over de toekomst van streetology.",
    quote: "Kijk goed, en met nieuwe ogen. Dan kun je kansen voor je laten werken.",
    less: "Toon minder principes",
    all: (n: number) => `Lees alle ${n} principes`,
    download: "Download het manifest",
    meta: "PDF, Engels",
    credit: "In nauwe samenwerking met Rob Smelt.",
  },
};

const PREVIEW_COUNT = 3;

const Manifesto = () => {
  const lang = useLang();
  const copy = Copy[lang];
  const principles = lang === "nl" ? PrinciplesNl : Principles;
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const visible = isOpen ? principles : principles.slice(0, PREVIEW_COUNT);

  const toggle = () => {
    if (isOpen) sectionRef.current?.scrollIntoView();
    setIsOpen(!isOpen);
  };

  return (
    <section
      id="manifesto"
      ref={sectionRef}
      className="section band-paper"
      aria-labelledby="manifesto-title"
    >
      <div className="container">
        <header className="section-header manifesto-header">
          <div>
            <h2 id="manifesto-title">{copy.title}</h2>
            <p className="section-sub">{copy.sub}</p>
          </div>
          <blockquote className="pull-quote">
            <p>{copy.quote}</p>
          </blockquote>
        </header>

        <ol className="principles" id="manifesto-principles">
          {visible.map((item, i) => (
            <li key={item.title} className="principle">
              <span className="principle-number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>

        <div className="manifesto-actions">
          <button
            type="button"
            className="button button-primary"
            aria-expanded={isOpen}
            aria-controls="manifesto-principles"
            onClick={toggle}
          >
            {isOpen ? copy.less : copy.all(principles.length)}
          </button>
          <a
            className="button button-outline"
            href="/WEBSITE_01_MANIFESTO.pdf"
            target="_blank"
            rel="noopener noreferrer"
            hrefLang="en"
          >
            {copy.download} <span className="button-meta">{copy.meta}</span>
          </a>
        </div>
        {isOpen && <p className="manifesto-credit">{copy.credit}</p>}
      </div>
    </section>
  );
};
export default Manifesto;
