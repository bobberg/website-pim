const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          &copy; {new Date().getFullYear()} Pim van den Berg Perspectives BV.
          All rights reserved.
        </p>
        <p>Website by Bob van den Berg</p>
        <a className="text-link" href="#top">
          Back to top
        </a>
      </div>
    </footer>
  );
};
export default Footer;
