import { useLang } from "../i18n";

const Copy = {
  en: { rights: "All rights reserved.", by: "Website by Bob van den Berg", top: "Back to top" },
  nl: { rights: "Alle rechten voorbehouden.", by: "Website door Bob van den Berg", top: "Terug naar boven" },
};

const Footer = () => {
  const copy = Copy[useLang()];

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          &copy; {new Date().getFullYear()} Pim van den Berg Perspectives BV.{" "}
          {copy.rights}
        </p>
        <p>{copy.by}</p>
        <a className="text-link" href="#top">
          {copy.top}
        </a>
      </div>
    </footer>
  );
};
export default Footer;
