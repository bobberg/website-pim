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

const Assignments = () => {
  return (
    <section
      id="work"
      className="section band-black"
      aria-labelledby="work-title"
    >
      <div className="container work-grid">
        <header className="section-header work-header">
          <h2 id="work-title">
            What assignments did Pim have and what’s planned next?
          </h2>
          <p className="section-sub">
            Just a flavour of the variety of projects I am working on.
          </p>
        </header>

        <figure className="work-photo">
          <img
            src={dog}
            alt="A corgi on a lead looking up at the camera on a city pavement"
            width={380}
            height={252}
            loading="lazy"
          />
        </figure>

        <div className="prose work-text">
          <h3>Challenges</h3>
          <p>
            My columns in Foodpersonality since 2009 are included in this site.
          </p>
          <PdfLink
            href="/MetPimOpStraat2009-2013def.pdf"
            label="Met Pim op Straat – columns 2009–2013"
            size="1.2 MB"
          />
          <p>
            Involved in the development of the DNA of 5 cities in the
            Netherlands and a project of investigating the potential of 20 areas
            in and near these cities.
          </p>
          <p>
            Preparing a tour with a management team to Singapore and
            Tokyo/Kyoto. Together with Jempi Moens I am part of Lunar. A
            non-traditional management program for leaders. Just accompanied the
            1st group for 3 days in Ghent. A fascinating learning experience we
            had with great insights on both the external as internal side of
            life.
          </p>
          <p>
            Just had a city tour to retail and city developments in London,
            Tokyo, Kyoto, Berlin, Leipzig and Dresden.
          </p>
          <p>
            For an international Group of Foodstores I investigated the next
            step in their format portfolio.
          </p>
          <p>
            A visual DNA was presented for a global investment company from
            Rotterdam.
          </p>
          <p>
            With the Global Design Team of Reckitt Benckiser we had a great team
            event prepared in Amsterdam. One of their biggest clients from the
            States had a streetology tour with me in London. With the design
            team we also had an investigation in Mumbai and Tokyo to see how
            people clean their toilets.
          </p>
          <p>
            With a dairy company we traced the secrets of innovation and
            packaging in surrounding countries.
          </p>
          <p>
            For Rabobank I guided a trade mission in India. In October last year
            I discovered together with Jos Sentel the secrets of transition
            cities in Detroit, Cleveland, Pittsburgh and Philadelphia.
          </p>
          <PdfLink
            href="/FN_Outlook%202013_p34-37_pimvandenberg.pdf"
            label="FondsNieuws Outlook 2013 – article"
            size="1 MB"
          />

          <h3>What’s next</h3>
          <p>
            Wondering whether a new book about DNA and Cities would add value to
            the existing volume of information. Maybe a similar approach as my
            book “Ondernemen is een straatfeest” could create a winning
            performance.
          </p>
          <p>
            It strikes me how the global reshuffle has an impact on the
            development of cities, public space, homes/living, offices and
            retail. On our thinking in general! It has hit the real estate world
            enormously for the next decade. Developers must transform. Financial
            institutions must rethink their values.
          </p>
          <p>
            Maybe architects can become city editors. A new position for
            municipalities that can conduct the City as an inspiring partiture.
            Collaboration on all levels for creating a better shared value on
            What Is and What is Needed is very important. What a great society
            we are living in! Full of inspiring challenges.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Assignments;
