import { useRef, useState, type ReactNode } from "react";

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

const PREVIEW_COUNT = 3;

const Manifesto = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const visible = isOpen ? Principles : Principles.slice(0, PREVIEW_COUNT);

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
            <h2 id="manifesto-title">Take off those blinders!</h2>
            <p className="section-sub">
              Pim van den Berg’s manifesto on the future of streetology.
            </p>
          </div>
          <blockquote className="pull-quote">
            <p>
              Look carefully, and with new eyes. That’s when you’ll be able to
              make them work for you.
            </p>
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
            {isOpen
              ? "Show fewer principles"
              : `Read all ${Principles.length} principles`}
          </button>
          <a
            className="button button-outline"
            href="/WEBSITE_01_MANIFESTO.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download manifesto <span className="button-meta">PDF</span>
          </a>
        </div>
        {isOpen && (
          <p className="manifesto-credit">
            In close cooperation with Rob Smelt.
          </p>
        )}
      </div>
    </section>
  );
};
export default Manifesto;
