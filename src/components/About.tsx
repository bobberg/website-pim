import React from "react";
import pim from "./../images/Pim.jpg";

const Specialities = [
  "DNA research for cities and organisations",
  "Discovery tours throughout the world",
  "Innovation and development",
  "Inspirational see-throughs/presentations",
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
          <h3>Specialties:</h3>
          <ul className="about-specialities">
            {Specialities.map((item, index) => (
              <li className="about-speciality" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default About;
