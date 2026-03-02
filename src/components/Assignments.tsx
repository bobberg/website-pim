import React from "react";
import dog from "./../images/dog.jpg";
// import metpimopstraat from "./media/MetPimOpStraat2009-2013def.pdf";

const Assignments = () => {
  return (
    <>
      <div className="assignments-wrapper">
        <div className="assignments-picture">
          <img src={dog} alt="dog" />
        </div>
        <h1>What assignments did Pim have and what's planned next?</h1>
        <h2>Just a flavour of the variety of projects I am working on.</h2>
        <h3>Challenges</h3>
        <p>
          My columns in Foodpersonality since 2009 are included in this site.
        </p>

        <div className="assignments-pdf">
          <a
            href="/MetPimOpStraat2009-2013def.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Met Pim op Straat Columns PDF
          </a>
        </div>
        <p>
          Involved in the development of the DNA of 5 cities in the Netherlands
          and a project of investigating the potential of 20 areas in and near
          these cities.
        </p>
        <p>
          Preparing a tour with a management team to Singapore and Tokyo/Kyoto.
          Together with Jempi Moens I am part of Lunar. A non-traditional
          management program for leaders. Just accompanied the 1st group for 3
          days in Ghent. A fascinating learning experience we had with great
          insights on both the external as internal side of life.
        </p>
        <p>
          Just had a Citytour to retail and city developments in London, Tokyo,
          Kyoto, Berlin, Leipzig and Dresden.
        </p>
        <p>
          For an international Group of Foodstores I investigated the next step
          in their format portfolio.
        </p>
        <p>
          A visual DNA was presented for a global investment company from
          Rotterdam.
        </p>
        <p>
          With the Global Design Team of Reckitt Benckiser we had a great team
          event prepared in Amsterdam. One of their biggest clients from the
          States had a streetology tour with me in London. With the design team
          we also had an investigation in Mumbai and Tokyo to see how people
          clean their toilets.
        </p>
        <p>
          With a dairy company we traced the secrets of innovation and packaging
          in surrounding countries.
        </p>
        <p>
          For Rabo Bank I guided a trade mission in India. In October last year
          I discovered together with Jos Sentel the secrets of transition cities
          in Detroit, Cleveland, Pittsburgh and Philadelphia.
        </p>
        <div className="assignments-pdf">
          <a
            href="/FN_Outlook 2013_p34-37_pimvandenberg.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            FondsNieuws article PDF
          </a>
        </div>

        <p>
          Wondering whether a new book about DNA and Cities would add value to
          the existing volume of information. Maybe a similar approach as my
          book "Ondernemen is een straatfeest" could create a winning
          performance.
        </p>
        <p>
          It strikes me how the global reshuffle has an impact on the
          development of cities, public space, homes/living, offices and retail.
          On our thinking in general! It has hit the real estate world
          enormously for the next decade. Developers must transform. Financial
          institutions must rethink their values.
        </p>
        <p>
          Maybe architects can become city editors. A new position for
          municipalities that can conduct the City as an inspiring partiture.
          Collaboration on all levels for creating a better shared value on What
          Is and What is Needed is very important. What a great society we are
          living in! Full of inspiring challenges.
        </p>
      </div>
    </>
  );
};
export default Assignments;
