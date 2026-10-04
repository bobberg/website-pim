import "./css";
import Introduction from "./components/Introduction";
import Slideshow from "./components/Slideshow";
import Writing from "./components/Writing";
import VideoSection from "./components/VideoSection";
import Travels from "./components/Travels";
import Assignments from "./components/Assignments";
import Manifesto from "./components/Manifesto";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { pagePath, useLang } from "./i18n";

const Copy = {
  en: {
    skip: "Skip to content",
    navLabel: "Main",
    nav: [
      { href: "#writing", label: "Writing" },
      { href: "#videos", label: "Videos" },
      { href: "#travels", label: "Travels" },
      { href: "#manifesto", label: "Manifesto" },
      { href: "#work", label: "Work" },
      { href: "#about", label: "About" },
      { href: "#contact", label: "Contact" },
    ],
    other: { lang: "nl", short: "NL", label: "Nederlands" },
    motto: "There is no strategy without streetology.",
    sub: "Visual DNA research, observations and discovery tours for brands, retail and cities.",
    cta: "Contact Pim",
  },
  nl: {
    skip: "Direct naar de inhoud",
    navLabel: "Hoofdmenu",
    nav: [
      { href: "#writing", label: "Columns" },
      { href: "#videos", label: "Video’s" },
      { href: "#travels", label: "Reizen" },
      { href: "#manifesto", label: "Manifest" },
      { href: "#work", label: "Werk" },
      { href: "#about", label: "Over Pim" },
      { href: "#contact", label: "Contact" },
    ],
    other: { lang: "en", short: "EN", label: "English" },
    motto: "Geen strategie zonder streetology.",
    sub: "Onderzoek naar visueel DNA, observaties en ontdekkingsreizen voor merken, retail en steden.",
    cta: "Neem contact op",
  },
} as const;

const App = () => {
  const lang = useLang();
  const copy = Copy[lang];
  const other = copy.other.lang;

  return (
    <>
      <a className="skip-link" href="#main">
        {copy.skip}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <h1 className="brand">
            <a href="#top">
              <span className="brand-name">Pim van den Berg</span>
              <span className="brand-tag">Perspectives</span>
            </a>
          </h1>
          <nav aria-label={copy.navLabel}>
            <ul className="nav-list">
              {copy.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            className="lang-switch"
            href={pagePath[other]}
            hrefLang={other}
            lang={other}
            title={copy.other.label}
          >
            {copy.other.short}
            <span className="visually-hidden">, {copy.other.label}</span>
          </a>
        </div>
      </header>

      <main id="main">
        <div className="hero container">
          <div className="hero-intro">
            <div>
              <p className="hero-motto">{copy.motto}</p>
              <p className="hero-sub">{copy.sub}</p>
            </div>
            <a className="button button-primary" href="#contact">
              {copy.cta}
            </a>
          </div>
          <Slideshow />
        </div>
        <Introduction />
        <Writing />
        <VideoSection />
        <Travels />
        <Manifesto />
        <Assignments />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
