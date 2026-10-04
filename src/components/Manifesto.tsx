import { useRef, useState } from "react";
import { useLang, type Lang } from "../i18n";
// Shared with scripts/manifesto-pdf.mjs, which prints the PDFs from it
import manifesto from "../content/manifesto.json";

type Principle = { title: string; text: string; emphasis?: string };

const Principles: Record<Lang, Principle[]> = {
  en: manifesto.en.principles,
  nl: manifesto.nl.principles,
};

const PrincipleText = ({ text, emphasis }: Principle) => {
  if (!emphasis || !text.includes(emphasis)) return <>{text}</>;
  const [before, ...rest] = text.split(emphasis);
  return (
    <>
      {before}
      <em>{emphasis}</em>
      {rest.join(emphasis)}
    </>
  );
};

const Copy = {
  en: {
    less: "Show fewer principles",
    all: (n: number) => `Read all ${n} principles`,
    download: "Download manifesto",
  },
  nl: {
    less: "Toon minder principes",
    all: (n: number) => `Lees alle ${n} principes`,
    download: "Download het manifest",
  },
};

const PREVIEW_COUNT = 3;

const Manifesto = () => {
  const lang = useLang();
  const copy = Copy[lang];
  const content = manifesto[lang];
  const principles = Principles[lang];
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
            <h2 id="manifesto-title">{content.title}</h2>
            <p className="section-sub">{content.sub}</p>
          </div>
          <blockquote className="pull-quote">
            <p>{content.quote}</p>
          </blockquote>
        </header>

        <ol className="principles" id="manifesto-principles">
          {visible.map((item, i) => (
            <li key={item.title} className="principle">
              <span className="principle-number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>
                <PrincipleText {...item} />
              </p>
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
            href={content.pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.download} <span className="button-meta">PDF</span>
          </a>
        </div>
        {isOpen && <p className="manifesto-credit">{content.credit}</p>}
      </div>
    </section>
  );
};
export default Manifesto;
