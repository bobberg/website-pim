import pim from "./../images/Pim.jpg";
import book from "./../images/OndernemenIsEenStraatfeest.jpg";

const Specialities = [
  "DNA research for cities and organisations",
  "Discovery tours throughout the world",
  "Innovation and development",
  "Inspirational see-throughs and presentations",
];

const About = () => {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container about-grid">
        <figure className="about-portrait">
          <img
            src={pim}
            alt="Portrait of Pim van den Berg"
            width={188}
            height={288}
            loading="lazy"
          />
        </figure>
        <div className="prose about-text">
          <h2 id="about-title">Who am I?</h2>
          <p>I am Pim van den Berg and thank you for visiting my website.</p>
          <p>
            My approach is based on streetology. A curious way of understanding
            the now in all its details by connecting with people and their
            stories. With a focus on Brands, Organisations, People and Cities.
          </p>
          <p>
            My background in Food and Retail helps me with looking for the broad
            inspiring perspectives of the world we live in.
          </p>
          <h3>Specialties</h3>
          <ul className="dash-list">
            {Specialities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <aside className="card publication" aria-labelledby="publication-title">
          <img
            src={book}
            alt="A sign reading ‘Ondernemen is een straatfeest’ on the Amsterdam waterfront"
            width={290}
            height={192}
            loading="lazy"
          />
          <div>
            <h3 id="publication-title" lang="nl">
              Ondernemen is een straatfeest
            </h3>
            <p>
              Pim’s book. Over 10,000 copies sold, and still available
              second-hand.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};
export default About;
