import { useLang } from "../i18n";
import linkedin from "./../images/linkedin.png";
import facebook from "./../images/facebook.png";

const Copy = {
  en: {
    title: "Contact Pim",
    address: "Address",
    country: "1181 RR Amstelveen, the Netherlands",
    maps: "Open in Google Maps",
    call: "Call or write",
    phone: "Phone",
    follow: "Follow Pim",
    followText:
      "I actually prefer genuine contact, but you can also connect to me in different ways.",
  },
  nl: {
    title: "Contact met Pim",
    address: "Adres",
    country: "1181 RR Amstelveen",
    maps: "Open in Google Maps",
    call: "Bellen of mailen",
    phone: "Telefoon",
    follow: "Volg Pim",
    followText:
      "Ik heb eigenlijk liever echt contact, maar u kunt ook op andere manieren met mij verbinden.",
  },
};

const Socials = [
  {
    label: "LinkedIn",
    icon: linkedin,
    href: "https://www.linkedin.com/in/pim-van-den-berg-aaa226",
  },
  {
    label: "Facebook",
    icon: facebook,
    href: "https://www.facebook.com/pim.vandenberg.336",
  },
];

const Contact = () => {
  const copy = Copy[useLang()];

  return (
    <section
      id="contact"
      className="section band-contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <header className="section-header">
          <h2 id="contact-title">{copy.title}</h2>
        </header>
        <div className="contact-grid">
          <div>
            <h3>{copy.address}</h3>
            <address>
              Pim van den Berg Perspectives BV
              <br />
              Charlotte van Montpensierlaan 2c
              <br />
              {copy.country}
            </address>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=Charlotte+van+Montpensierlaan+2c+1181+RR+Amstelveen"
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.maps}
            </a>
          </div>

          <div>
            <h3>{copy.call}</h3>
            <ul className="contact-list">
              <li>
                <a href="tel:+31651431255">
                  <span className="contact-label">{copy.phone}</span>
                  +31 (0)6 51 43 12 55
                </a>
              </li>
              <li>
                <a href="mailto:pimvandenberg@wxs.nl">
                  <span className="contact-label">E-mail</span>
                  pimvandenberg@wxs.nl
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>{copy.follow}</h3>
            <p>{copy.followText}</p>
            <ul className="social-list">
              {Socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={social.icon} alt="" width={20} height={20} />
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
