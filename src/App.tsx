import "./css";
import Introduction from "./components/Introduction";
import Slideshow from "./components/Slideshow";
import Writing from "./components/Writing";
import VideoSection from "./components/VideoSection";
import Assignments from "./components/Assignments";
import Manifesto from "./components/Manifesto";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const NavItems = [
  { href: "#welcome", label: "Welcome" },
  { href: "#writing", label: "Writing" },
  { href: "#videos", label: "Videos" },
  { href: "#manifesto", label: "Manifesto" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const App = () => {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <h1 className="brand">
            <a href="#top">
              <span className="brand-name">Pim van den Berg</span>
              <span className="brand-tag">Perspectives</span>
            </a>
          </h1>
          <nav aria-label="Main">
            <ul className="nav-list">
              {NavItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main">
        <div className="hero container">
          <div className="hero-intro">
            <div>
              <p className="hero-motto">
                There is no strategy without streetology.
              </p>
              <p className="hero-sub">
                Visual DNA research, observations and discovery tours for
                brands, retail and cities.
              </p>
            </div>
            <a className="button button-primary" href="#contact">
              Contact Pim
            </a>
          </div>
          <Slideshow />
        </div>
        <Introduction />
        <Writing />
        <VideoSection />
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
