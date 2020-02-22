import React from "react";
import pim from "./../images/Pim.jpg";

const Specialities = [
  {
    key: 1,
    speciality: "- DNA reseach for cities and organisations"
  },
  {
    key: 2,
    speciality: "- Discovery tours throughout the world"
  },
  {
    key: 3,
    speciality: "- Innovation and development"
  },
  {
    key: 4,
    speciality: "- Inspirational see-throughs/presentations"
  }
];

const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <div className="about-left">
          <img src={pim} alt="Pim" />
        </div>
        <div className="about-right">
          <h1>Who am I?</h1>
          <p>
            I am Pim van den Berg and thank you for visiting my website.
            <br />
            My approach is based on streetology. A curious way of understanding
            the now in all its details by connecting with people and their
            stories.
            <br />
            With a focus on Brands, Organisations, People and Cities.
            <br />
            My background in Food and Retail helps me with looking for the broad
            inspiring perspectives of the world we live in.
          </p>
          <p>Specialties:</p>
          <ul>
            {Specialities.map(item => {
              return (
                <li className="about-speciality" key={item.key}>
                  {item.speciality}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default About;
